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
                    description: `A mathematical method or operaration of combining two or more numbers to get a total or resultant.
                    A plus (+) operator is used with addition operations to represent the combination of the numbers.`,
                    synonyms: ["add", "add up", "add in", "plus"],
                    example: `
                    Example: 
                    Add 240 and 160
                    -> 240 + 160
                    => ${240 + 160}`                   
                },
                {
                    word: "subtraction",
                    description: `A mathematical method or operation of removing a number from another number to get a remaining result. Subtraction is finding the difference between two numbers.`,
                    synonyms: ["subtract", "difference", "take away", "take from", "minus"],
                    example: `
                    Example: 
                    Subtract 160 from 240
                    -> 240 - 160
                    => ${240 - 160}`
                },
                {
                    word: "bi",
                    description: `A prefix or a stand alone word that denotes the value or quantity two.`,
                    example: `
                    Example:
                    -> bicycle, bicoloured, biennial, bicentennial, bipnnate                    
                    `
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
                    description: "A closed three-dimensional object made from 6 equal square face."
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
                    description: "A symbolic representation of information using visual techniques."
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
                    description: "A mathematical technique of breaking up a number and rewriting it as a sum each digit in its place value."
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
                    description: "A mathematical method or operation that results in repeated subtraction of a number by a divisor until the divisor can't subtract anymore and the number is in its simplest form. A method to find out how many time a divisor goes into a number"
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
                    synonyms: ["two-dimensional shape"]
                },
                {
                    word: "3D",
                    description: "A shape that has more than one face, has more that one view, and can be drawn on a chart with 3 axes (x, y, z)",
                    synonyms: ["three-dimensional shape"]
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
                },
                {
                    word: "area",
                    description: ""
                },
                {
                    word: "volume",
                    description: ""
                },
                {
                    word: "vertices",
                    description: ""
                },
                {
                    word: "edges",
                    description: ""
                },
                {
                    word: "faces",
                    description: ""
                },
                {
                    word: "triangle",
                    description: ""
                },
                {
                    word: "quadrilateral",
                    description: ""
                },
                {
                    word: "hcf",
                    description: "The Highest Common Factor is used when you are trying to fint"
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
