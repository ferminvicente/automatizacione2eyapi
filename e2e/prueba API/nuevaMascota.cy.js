 describe('Pruebas API - PetStore', () => { 
       
    const urlApi = 'https://petstore.swagger.io/v2/pet'

    //bodypara nueva mascota
    const  nuevaMascota =  {
        "id": 101,
        "category": {
          "id": 101,
          "name": "Perro"
        },
        "name": "def",
        "photoUrls": [
          "shttps://www.bing.com/images/search?view=detailV2&ccid=e4egXVb6&id=5BB1CFB9C0532B803C96359AC45BA834F26802B4&thid=OIP.e4egXVb6yZ_zZKaGsee1CwHaHa&mediaurl=https%3a%2f%2fi0.wp.com%2fwww.diarioviral.net%2fwp-content%2fuploads%2f2019%2f11%2fraza-de-perro-pastor-aleman-m.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7b87a05d56fac99ff364a686b1e7b50b%3frik%3dtAJo8jSoW8SaNQ%26pid%3dImgRaw%26r%3d0&exph=745&expw=745&q=pastor+alema&simid=608036965825733531&FORM=IRPRST&ck=64E61270F5FA7F584580A57FC1B2F7E6&selectedIndex=2"
        ],
        "tags": [
          {
            "id": 101,
            "name": "deff"
          }
        ],
        "status": "available"
      } 
   //body para modificaicon 
      const modificarMascota = {
          "id": 101,
          "category": {
            "id": 101,
            "name": "perro"
          },
          "name": "frodo",
          "photoUrls": [
            "shttps://www.bing.com/images/search?view=detailV2&ccid=e4egXVb6&id=5BB1CFB9C0532B803C96359AC45BA834F26802B4&thid=OIP.e4egXVb6yZ_zZKaGsee1CwHaHa&mediaurl=https%3a%2f%2fi0.wp.com%2fwww.diarioviral.net%2fwp-content%2fuploads%2f2019%2f11%2fraza-de-perro-pastor-aleman-m.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7b87a05d56fac99ff364a686b1e7b50b%3frik%3dtAJo8jSoW8SaNQ%26pid%3dImgRaw%26r%3d0&exph=745&expw=745&q=pastor+alema&simid=608036965825733531&FORM=IRPRST&ck=64E61270F5FA7F584580A57FC1B2F7E6&selectedIndex=2"
          ],
          "tags": [
            {
              "id": 101,
              "name": "frodo"
            }
          ],
          "status": "sold"
        }

      //metodo añadir la nueva mascota
      const añadirMascota = nuevaMascota => {
         cy.request('POST', urlApi, nuevaMascota)
      }
      //metodo actulizacion mascota
      const actulizarMascota = modificarMascota => {
        cy.request('PUT', urlApi, modificarMascota)
     }

 
    it('Nueva Mascota', ()=> {
        añadirMascota(nuevaMascota)

        cy.request('GET', `${ urlApi}/${nuevaMascota.id}`)
        .its('body')
        .should('deep.eq', nuevaMascota)         
    })
    
    it('Actulizacion Mascota', () =>{
        actulizarMascota(modificarMascota)

      cy.request('GET', `${ urlApi}/${"findByStatus"}`)

    })

})    