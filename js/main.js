$(document).ready(() => {
    const searchButton = $(".search-button");
    
    const testing = () => {
        const resultField = $("#result-field");
        const searchField = $("#search-field");
        resultField.html(`
        <p>${searchField.val()}</p>
        <p>This is just a test<p>
        `);
    }

    searchButton.click(() => {
        console.log("button Clicked")
        testing();
    });
});
