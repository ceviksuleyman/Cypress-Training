/// <reference types="cypress" />

describe("", () => {
    it("", () => {});
});

context("", () => {
    it("", () => {});
});

/*
npm init -y
npm install cypress --save-dev
npx cypress open
npx cypress run --spec cypress\e2e\day05\03_CustomCommands.cy.js
npx cypress info
npm run cy:RunDay02
*/
/**
 * npx cypress run: Electron headless (browser ı acmadan)  ile butun testleri calistirir
                 Hata alinan testlerin ekran goruntulerini screenshots klasorune koyar
                 Butun testlerin video kayitlarini videos klasorune koyar

npx cypress info: Bilgisayarinizda yüklü browser bilgilerini, cypress versionunu
                  isletim sistemini, hafiza bilgileri gibi verileri gosterir

npx cypress verify: Cypress'in yuklu oldugunu onaylar
                    Cypress i yeni versiyona güncellemek istiyorsak npx cypress open komutu ile önce cypress i açariz
                    Sonra sağ üstte Upgrade kısmına tıkla Update edeceğin sürüm çıkıyor buna tıkla
                    Sonrada çıkan komutu kopyalayıp terminale yapıştır yeni versiyona güncelliyor bu sırada ekrandakileri kapat

npx cypress run --browser chrome : Chrome headless(browser'i acmadan) ile butun testleri calistirir

npx cypress run --browser chrome --headed : Chrome browser'i acarak butun testleri calistirir


*** ISTENEN KLASORDEKI TUM TESTLERI CALISTIRMAK ***

npx cypress run --spec 'cypress/e2e/day02/'
* Default olarak Electron ile calistirir

npx cypress run --spec 'cypress/e2e/day02/' --browser chrome
* day02 klasorundeki butun testleri Chrome headles (browser acmadan) ile calistirir

npx cypress run --spec 'cypress/e2e/day02/' --browser chrome --headed
* day02 klasorundeki butun testleri Chrome browser'i acarak  calistirir



*** TEK BIR TEST CALISTIRMAK ***

npx cypress run --spec 'cypress/e2e/day02/01_LoginTest1.cy.js'
* Default olarak Electron ile calistirir.

npx cypress run --spec 'cypress/e2e/day02/01_LoginTest1.cy.js' --browser chrome
*day02 klasorundeki 01_LoginTest1.cy.js dosyasını Chrome headless (browser açmadan) ile calistirir

npx cypress run --spec 'cypress/e2e/day02/01_LoginTest1.cy.js' --browser chrome --headed
*day02 klasorundeki 01_LoginTest1.cy.js dosyasını Chrome browser'ı acarak calistirir



*** CALISTIRMAK ICIN KOD TANIMLAMA ***
PACKAGE.JSON dosyasi icerisindeki script bolumune kendimizin belirleyeceği calistirma komutlari

"cy:run_day02": "npx cypress run --spec 'cypress/e2e/day02/' --browser chrome" ==> biz burda kendimiz komut yazdık day02 package icin 
                                                                               bu komutuda package.json dosyasının içinceki "scripts"{} basligi altinda tanimlanmis yere yapistiriyorum
                                                                               calistirmak icin konsolda npm run cy:run_day02 yazdigimda bu komuta atamis oldugum test calisacak
                                                                              TERMINALE = npm run cy:run_day02 

"mycode": "npx cypress run --spec 'cypress/e2e/day03/06_SuperDomain.cy.js' --browser chrome --headed',

"mycode" diye bir komut tanımlamıs olduk
                                        TERMINALE = npm run mycode

 
 Olusturdugumuz bu komutu terminalde su sekilde calistiracagiz


 "test-dashboard" : "npx cypress run --record --key c834637f-a6d6-49b5-9279-10b30b3eaeb0",
        npm run test_dashboard => butun testlerim calistirilip dashboard a gonderilecek

 "dashboard_day02": "npx cypress run --spec 'cypress/e2e/day02/' --record --key c834637f-a6d6-49b5-9279-10b30b3eaeb0"
        npm run dashboard_day02 => day02 klasorundeki testler calisacak ve dashboard a gonderilecek
 */
