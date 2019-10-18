$(document).ready(() => {
    class Glossary {
        constructor() {
            this.words = [
                {
                    word: "maths",
                    description: "the are of using arithmatic logic and its symbols to solve problems"
                },
                {
                    word: "addition",
                    description: `Addition: A mathematical method of combining two numbers to get a total result.
                `,
                    example: `Example1:

                A farm has 2 cattle, 4 goats, 2 horses, 4 sheep and 10 chickens. How many animals are on the farm in total?

                cattle - 2
                goats - 4
                horses - 2
                sheep - 4
                chickens - 10

                -> 2 + 4 + 2 + 4 + 10
                => ${2 + 4 + 2 + 4 + 10}
                `
                },
                {
                    word: "subtraction",
                    description: "A mathematical method of removing a number from another number to get a remaining result",
                    synonym: ""

                },
                {
                    word: "bi",
                    description: "a prefix or a stand alone word that denotes the value or quantity two."
                },
                {
                    word: "common",
                    description: "this is a word used to describe a set of elements that share a finite number of properties."
                },
                {
                    word: "capacity",
                    description: "a measure of the ability of a object to hold other elements."
                },
                {
                    word: "cube",
                    description: "a unit to the power of three or that has an exponent of 3"
                },
                {
                    word: "complete",
                    description: "a state in which a process reaches when it has come to an end.\n A promt to the person to complete a specified process"
                },
                {
                    word: "determine",
                    description: "A prompt to the person to find a solution to the of the problem on which the word has been used on."
                },
                {
                    word: "difference",
                    description: ""
                },
                {
                    word: "diagram",
                    description: ""
                },
                {
                    word: "dimensions",
                    description: ""
                },
                {
                    word: "dotted line",
                    description: ""
                },
                {
                    word: "dice",
                    description: ""
                },
                {
                    word: "double",
                    description: ""
                },
                {
                    word: "expansion notation",
                    description: ""
                }
            ];
        }

        allWords() {
            return this.words;
        }

    }

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
                    dictionDescription: element.description
                }
            } 
        }

        return {
            dictionStatement: "word entered not found, please check your spelling",
            dictionDescription: "No descrition found"
        }

    }

    const displayDefinition = () => {
        console.log("Calling displayDefinition function");

        const resultField = $("#result-field");
        const definitionObject = search();

        resultField.html(`
        <p>${definitionObject.dictionStatement}</p>
        <p>${definitionObject.dictionDescription}</p>
        `);
    }
        
    

    const searchButton = $(".search-button");
    searchButton.click(() => { 
        console.log("Button clicked")       
        displayDefinition();
    });
});
