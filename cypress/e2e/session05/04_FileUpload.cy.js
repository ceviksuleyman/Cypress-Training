/// <reference types="cypress" />

describe("File Upload", () => {
    /*
    https://www.npmjs.com/package/cypress-file-upload  bu adresten plugin indirdik


    npm install --save-dev cypress-file-upload => terminal komut
    
    */
    /*
    Eklemek istedigimiz dosyayı oncelikle masaustunde olusturdugumuz proje klasorumuzun icinden
    Cypress icindeki fixtures dosyasına ekleriz ve bu otomatik olarak buradaji fixtures klasorunun altina gelir
    sonrasinda da istersek dosyanin direkt yolunu ya da ismini kullanarak ekleme yapabiliriz
    */

    // **** 1 DOSYA EKLEDIK ****

    it.skip("Single File Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.wait(3000);

        const filePath = "ayyildiz.png"; // ekleyeceğim dosyanin ismini girdim
        cy.get("#filesToUpload").attachFile(filePath); // locate ini aldıgımız kısma dosyayı yükledik

        cy.get("#fileList > li").should("include.text", "ayyildiz.png"); // eklemis oldugumuz dosyanın locatini alip eklendiğini doğruladık (eklemnen dosya bu ismi iceriyor mu diye baktik)
        cy.get("#fileList > li").should("have.text", "ayyildiz.png");
    });

    // **** 3 DOSYA EkLEME **** 1.yontem

    it.skip("Multiple File Upload 1", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        const path1 = "ayyildiz.png";
        const path2 = "redCar.png";
        const path3 = "ayyildiz2.png";

        cy.get("#filesToUpload")
            .attachFile(path1)
            .wait(2000)
            .attachFile(path2)
            .wait(2000)
            .attachFile(path3)
            .wait(2000);
    });

    // **** 3 DOSYA EKLEDIK **** 2.Yontem Tek seferde

    it.skip("Multiple File Upload 2", () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        const path1 = "ayyildiz.png";
        const path2 = "redCar.png";
        const path3 = "ayyildiz2.png";

        cy.get("#filesToUpload").attachFile([path1, path2, path3]);

        // ****  3 FARKLI DOGRULAMA  ****
        cy.get("#fileList > :nth-child(1)").should("have.text", "ayyildiz.png"); // have.text birebir ayni olmak gerekir
        cy.get("#fileList > :nth-child(2)").should("contain.text", "redCar.png"); // burada iceriyor  mu diye soruk
        cy.get("#fileList > :nth-child(3)").should("include.text", "ayyildiz2.png"); // burada da dosya ismi icinde 3.jpg bunu iceriyor mu diye sorduk
    });

    // Dosyayı eklerken ismini değiştirebiliyoruz (Bizim ana dosyamızın ismi değişmiyor yükleme yaptiğimiz sayfada değişiyor)
    it('OverWrite File Name', () => {
       
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1="ayyildiz.png" // bu dosyanin ismini

        cy.get('#filesToUpload').attachFile({filePath: path1, fileName: 'AYYILDIZ'}) // bu sekilde degistirmis olduk
   
        cy.get("#fileList > li").should("include.text", "AYYILDIZ");
    })
});
