describe('Prueba de rendimiento', () => {
    it('Simula carga entre 30 y 50 hilos', () => {

        for (let i =1; i < 50; i++) {
            cy.log("ingresando a la prueba ",i)
            cy.visit({
                url: 'https://www.news.com',
                delay: Math.floor(Math.random() * (1000 - 500 + 1)) + 500
            })
        }
    })
})
  