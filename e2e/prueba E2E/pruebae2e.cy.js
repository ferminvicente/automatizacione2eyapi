 describe('compras en pagina web' , () => { 
    
    it('proceso de compra', () =>{
        //abrir pagina
        cy.visit('https://www.demoblaze.com/');

        //validamos que estamos en la pagina
        cy.contains('PRODUCT STORE');
        
        //seleccionamos y agregamos nuestros productos al carrito
        cy.contains('Samsung galaxy s6').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('.active > .nav-link').click();
        cy.contains('Sony vaio i7').click(); 
        cy.get('.col-sm-12 > .btn').click();

        //visualizamos el carrito y validamos que nuestros productos
        cy.get('#cartur').click();
        cy.contains('Samsung galaxy s6').should('be.visible');   
        cy.contains('Sony vaio i7').should('be.visible'); 

        //realizamos pedido
        cy.get('.col-lg-1 > .btn').click();

        //llenamos el formulario
        cy.get('#name').type('fermin vicente')
        cy.get('#country').type('Rep Dom')
        cy.get('#city').type('D.N')
        cy.get('#card').type('515161618616')
        cy.get('#month').type('05')
        cy.get('#year').type('2028')
        
        //procedemos a completar nuestra compra
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

        //validamos que se presente mensaje de compra realizada
        cy.contains('Thank you for your purchase!').should('be.visible'); 
    }) 
  })