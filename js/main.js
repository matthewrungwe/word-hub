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
                    description: `A mathematical method or operaration of combining two or more numbers to get a total result.`,
                    example: `
                    Example1:

                    A farm has 2 cattle, 4 goats, 2 horses, 4 sheep and 10 chickens. How many animals are on the farm in total?

                    cattle - 2
                    goats - 4
                    horses - 2
                    sheep - 4
                    chickens - 10

                    -> 2 + 4 + 2 + 4 + 10
                    => ${2 + 4 + 2 + 4 + 10}
                    `,
                    synonyms: ["add", "sum"]
                },
                {
                    word: "subtraction",
                    description: "A mathematical method or operation of removing a number from another number to get a remaining result. Subtraction is finding the difference between two numbers.",
                    synonyms: ["subtract", "difference", "take away", "take from", "minus"]

                },
                {
                    word: "bi",
                    description: "A prefix or a stand alone word that denotes the value or quantity two."
                },
                {
                    word: "common",
                    description: "This is a word used to describe a set of elements that share a finite number of properties."
                },
                {
                    word: "capacity",
                    description: "A measure of the amount of contents that an object can hold."
                },
                {
                    word: "cubic",
                    description: "A number or unit that has been raided to the poser or exponent of 3 (three)."
                },
                {
                    word: "cube",
                    description: "A closed 3D object made from 6 equal squares"
                },
                {
                    word: "complete",
                    description: "A stage in a process taht you reach after finishing the operations that needed to be done is finished."
                },
                {
                    word: "determine",
                    description: "A prompt to the person to find a solution to the of the problem on which the word has been used on."
                },
                {
                    word: "difference",
                    description: "A word that refers to subtracting two numbers to find the gap between them."
                },
                {
                    word: "diagram",
                    description: ""
                },
                {
                    word: "dimensions",
                    description: "A measurement of the side of a shape.",
                    synonyms: [],
                    example: "A restangular shape has the dimensions of 1500mm x 1000mm."
                },
                {
                    word: "dotted line",
                    description: "This is a broken line that is drawn to represent a line that is not a part of the shape or to represent missing or non-visible lines on a shape."
                },
                {
                    word: "dice",
                    description: "A small cube with at least one engraved dot on each face. The dots on each face are one or six numbers that range from 1 to 6 e.g one face can have 1 dot, another, 4 dots and so on, but no face will have more that 6 dots and no number of dots is repeated."
                },
                {
                    word: "double",
                    description: "Doubling a number is the same as making it twice as large. To double a number, add the number to itself or multiply it by 2."
                },
                {
                    word: "expansion notation",
                    description: ""
                },
                {
                    word: "place value",
                    description: "The value of digit which is determined by its positon in a number e.g. TTh, T or U."
                },
                {
                    word: "multiplication",
                    description: "A mathematical method or operation that results in repeated addition of a number for a specified number of time."
                },
                {
                    word: "division",
                    description: "A mathematical method or operation that results in repeated subtraction of a number by a divisor until the divisor can't subtract anymore and the number is in its simplest form."
                },
                {
                    word: "multiple",
                    description: "This is a number that is produced from the product of a number and a factor."
                },
                {
                    word: "factor", 
                    description: "A number that goes or divides into another specified number a complete number of times without leaving a remainder."
                },
                {
                    word: "2D",
                    description: "A shape that has got one flat face, and can be drawn on a chart with 2 axes (x, y).",
                    synonyms: ["2 dimensional shape"]
                },
                {
                    word: "3D",
                    description: "A shape that has more than one face, has more that one view, and can be drawn on a chart with 3 axes (x, y, z)",
                    synonyms: ["3 dimensional shape"]
                },
                {
                    word: "rule",
                    description: "This is like a machine that receives input, operates on that input and produces output or a method or tool that operates on input to give you output.",
                    synonyms: ["function", "method", "tool"]
                },
                {
                    word: "input",
                    description: "The data or content that you put into a rule in order to get output."
                },
                {
                    word: "output",
                    description: "The information or content that is produced by a rule after entering some input."
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
        <h3>${definitionObject.dictionStatement}</h3>
        <p>${definitionObject.dictionDescription}</p>
        `);
    }
        
    

    const searchButton = $(".search-button");
    searchButton.click(() => { 
        console.log("Button clicked")       
        displayDefinition();
    });
});
