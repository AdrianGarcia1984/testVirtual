describe('prueba tecnica puntos 1 y 3', () => {
    beforeEach(() => {  
      //cy.viewport(1280,720)  
      cy.visit('https://automationexercise.com/')
    })
    
    context('hooks excercice',()=>{
        before(()=>{            
            cy.log("ejercicio 3: llenar un formulario correctamente")
            cy.visit('https://automationexercise.com/')
            cy.get('a[href*="/login"]').click()
            cy.get('[type="text"]').type('adrian{enter}')
            cy.get('.signup-form > form > [type="email"]').type('adrian@correo.com{enter}')
            cy.get('body').then(($body) => {
            if(!($body.text().includes('Email Address already exist!'))){
                cy.log('es visible')
                cy.get('#id_gender1').click()
                cy.get('#password').type("adrian123")
                cy.get('#days').select(7)
                cy.get('#months').select(3)
                cy.get('#years').select('1984')
                cy.get('#first_name').type('adrian')
                cy.get('#last_name').type('garcia')
                cy.get('#company').type('ninguna')
                cy.get('[name="address1"]').type('calle 40-04')
                cy.get('#country').select(2)
                cy.get('[name="state"]').type('antioquia')
                cy.get('[name="city"]').type('medellin')
                cy.get('#zipcode').type('50010')
                cy.get('#mobile_number').type('3006022624')
                cy.get('.login-form > form > .btn').click()
                cy.get('.pull-right > .btn').click()
            }
        })
        })
        beforeEach(()=>{            
            cy.get('body').then(($body) => {
                if(!($body.text().includes('Logged in as'))){
                    cy.get('a[href*="/login"]').click()
                    cy.get('.login-form > form > [type="email"]').type('adrian@correo.com{enter}')
                    cy.get('[type="password"]').type("adrian123")
                    cy.get('.login-form > form > .btn').click()
                }
            })
        })

     

      it('run test correct login',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text',' Logout')
       // cy.get('.shop-menu > .nav > :nth-child(2) > a')
        })

        it('corriendo test de adicion de producto al carrito de compras',()=>{
            cy.log('ejercicio 1: adicionar un elemento al carrito de compras')
            //cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text',' Logout')
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
            cy.get('#search_product').type('polo')
            cy.get('#submit_search > .fa').click()
            cy.get('a[href="/product_details/30"]').click()
            cy.get('.product-information > h2').should('to.contain',' Polo')
            cy.get(':nth-child(5) > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()           

            })

            it('corriendo test de adicion de producto al carrito de compras con valor 0',()=>{
                cy.log('ejercicio 1: adicionar un elemento al carrito de compras')
                //cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text',' Logout')
                cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
                cy.get('#search_product').type('blue')
                cy.get('#submit_search > .fa').click()
                cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
                cy.get('.product-information > h2').should('to.contain','Blue')
                cy.get("#quantity").type("0")
                cy.get(':nth-child(5) > .btn').click()
                cy.get('.modal-footer > .btn').click()
                cy.get('.shop-menu > .nav > :nth-child(3) > a').click()                         
                cy.get("#product-1 > .cart_description > h4 > a").should('to.contain',' Blue').log("error el sistema no muestra un mensaje ")               
    
                })

        after(()=>{            
            cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
            //cy.get("a[class='btn btn-primary']").click()
        })



    })


})