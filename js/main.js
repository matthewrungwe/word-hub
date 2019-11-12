$(document).ready(() => {
    //The Glossary class is found in the ./js/glossary.js file
    
     const getSearchObject = () => {
        //getSearchObject returns an object of the input field itself and the value of the input field
        console.log("Calling getSearchObject function");
        const searchField = $("#search-field");
        const searchedStatement = searchField.val();

        return {
            field: searchField,
            statement: searchedStatement
        };
    };

    const statementToLowerCase = () => {
        //statementToLowerCase returns a lowercase of the searched word
        console.log("Calling statementToLowerCase function");

        const searchObject = getSearchObject();
        const originalStatement = searchObject.statement;        
        const loweredStatement = originalStatement.toLowerCase();
        
        return loweredStatement; 
    };

    const search = () => {
        console.log("Calling search Function");

        const statement = statementToLowerCase();

        const glossary = new Glossary();
        const dictionaryArray = glossary.allWords();

        for(let element of dictionaryArray){ //searches through stored elements in array
            if(element.word === statement){

                return {
                    dictionStatement: statement,
                    dictionDescription: element.description,
                    dictionSynonyms: element.synonyms,
                    dictionExample: element.example
                }
            } 
        }

        return {
            dictionStatement: "word entered not found, please check your spelling or enter word",
            dictionDescription: "",
            dictionSynonyms: "",
            dictionExample: ""
        }

    }

    const displayDefinition = () => {
        console.log("Calling displayDefinition function");

        const resultField = $("#result-field");
        const definitionObject = search();

        resultField.html(`
        <h3>${definitionObject.dictionStatement}</h3>
        <p>${definitionObject.dictionDescription}</p>
        <p>${(definitionObject.dictionSynonyms === "") ? "" : "Similar: " + definitionObject.dictionSynonyms}</p>
        <div>${definitionObject.dictionExample}</div>
        `);
    }
        
    

    const searchButton = $(".search-button");
    searchButton.click(() => { 
        console.log("Button clicked")       
        displayDefinition();
    });
});
