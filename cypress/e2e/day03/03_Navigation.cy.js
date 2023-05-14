describe('Navigation', () => {

    it('Back, Forward, Refresh', () => {
       
        cy.visit('https://qa-environment.koalaresorthotels.com/')
       
        cy.wait(3000) // burda beklemeyi hata aldigimiz icin degil gormek icin yaptik
        
        cy.get('#navLogon > .nav-link').click()

        cy.wait(3000)

        cy.go('back') // geri git dedik onceki sayfaya don
        // cy.go(-1) -1 de geri gitme islemini yapar

        cy.wait(3000)
        cy.go('forward') // ileri git
        // cy.go(1) 1 ile sayfa ileri gider

        cy.wait(3000)
        cy.reload() // sayfayi refresh yapar
    })

    it.only('Chaing Navigation', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com/')
       
        cy.wait(3000) 
        
        cy.get('#navLogon > .nav-link').click()

        cy.wait(3000)

        cy.go('back').go('forward').go(-1).go(1) // burada zincirleme sekilde yaptik komutlari
        
        cy.reload(true) 
        // cy.reload(true) : Sayfayi hafizadan degil yeniden yukler, bunu kullanmak daha mantikli
    })
})