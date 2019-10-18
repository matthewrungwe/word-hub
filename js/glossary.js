class Glossary {
    constructor () {
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

// let glossary = new Glossary();

// let theArray = glossary.allWords();


module.exports = Glossary;
