const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

        baseUrl: "https://www.google.com/",
        projectId: "18ejp4", //cypress cloud
        video: false, // test videolarini kaydetmemesi icin false default olarak true gelir
        //retries: 2, // Test FAIL oldugunda kac defa daha calistirmak istersin hata aldiktan sonra 2 defa daha dener toplamda 3 defa calismis olur
    },
});
