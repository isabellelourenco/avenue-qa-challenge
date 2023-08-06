describe('GET /weather', () => {
    const API_URL = Cypress.env('API_URL')
    const API_KEY = Cypress.env('API_KEY')

    let testData;

    beforeEach(() => {
      cy.fixture('api/cordinates').then(c => {
        testData = c
      })
    })

    context('Happy path', () => {
        it('Should GET the current weather data for the Recife city', { tags: '@smoke' }, () => {
            const recife = testData.validCordinates[0]
        
            cy.request({
              method: 'GET',
              url: `${API_URL}?lat=${recife.latitude}&lon=${recife.longitude}&appid=${API_KEY}`,
            }).should(({ body, status, statusText }) => {
              expect(status).to.equal(200)
              expect(statusText).to.equal('OK')
              expect(body.sys.country).to.equal('BR')
            });
          });
        
          it('Should GET the current weather data for the Seoul city', { tags: '@smoke' }, () => {
            const seoul = testData.validCordinates[1]
      
              cy.request({
                  method: 'GET',
                  url: `${API_URL}?lat=${seoul.latitude}&lon=${seoul.longitude}&appid=${API_KEY}`,
              }).should(({ body, status, statusText }) => {
              expect(status).to.equal(200)
              expect(statusText).to.equal('OK')
              expect(body.sys.country).to.equal('KR')
              })
          })
      
    })
  
    context('Sad path', () => {
        it('Should return 401 error when provides a invalid API Key', () => {
            const recife = testData.validCordinates[0]
            const expectedMessage = 'Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.'
        
            cy.request({
              method: 'GET',
              url: `${API_URL}?lat=${recife.latitude}&lon=${recife.longitude}&appid=123456789ABCDEF`,
              failOnStatusCode: false,
            }).should(({ body, status, statusText }) => {
              expect(status).to.equal(401)
              expect(statusText).to.equal('Unauthorized')
              expect(body.message).to.contain(expectedMessage)
            })
        })
    
        it('Should return 400 error when provides a invalid latitude', () => {
            const invalidLatitudeCity = testData.invalidLatitude
            const expectedMessage = 'wrong latitude'
        
            cy.request({
              method: 'GET',
              url: `${API_URL}?lat=${invalidLatitudeCity.latitude}&lon=${invalidLatitudeCity.longitude}&appid=${API_KEY}`,
              failOnStatusCode: false,
            }).should(({ body, status, statusText }) => {
              expect(status).to.equal(400)
              expect(statusText).to.equal('Bad Request')
              expect(body.message).to.contain(expectedMessage)
            })
        })

        it('Should return 400 error when provides a invalid longitude', () => {
            const invalidLongitudeCity = testData.invalidLongitude
            const expectedMessage = 'wrong longitude'
        
            cy.request({
              method: 'GET',
              url: `${API_URL}?lat=${invalidLongitudeCity.latitude}&lon=${invalidLongitudeCity.longitude}&appid=${API_KEY}`,
              failOnStatusCode: false,
            }).should(({ body, status, statusText }) => {
              expect(status).to.equal(400)
              expect(statusText).to.equal('Bad Request')
              expect(body.message).to.contain(expectedMessage)
            })
        })
    })
})