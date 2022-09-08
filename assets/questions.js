var questionIndex = [
    {  
       Question: "What does HTML stand for?",
       Choices: { a:'HyperText Monitoring Language', b: 'HyperText Markup Language', c: 'HyperToss Mass Literary', d: 'Hasbro Toy Miniature List'},
       Answer: 'b',
    },

    {
        Question: "Commonly used data types Do Not Include",
        Choices: { a: 'String', b: 'Integer', c: 'Boolean', d: 'Object'},
        Answer: 'd',
    },

    {
        Question: "Boolean is a datatype that returns either of two values",
        Choices: { a: 'True', b: 'False'},
        Answer: 'a',
    },

    {
        Question:"Which one of these is Not a built-in method of JavaScript?",
        Choices: { a: 'concat()', b: 'toUpperCase()', c: 'parse()', d: 'valueOf()'},
        Answer: 'c',
    },

    {
        Question:"Arrays in JavaScript can be used to store ____?",
        Choices: { a: 'Numbers and Strings', b: 'Other arrays', c: 'Booleans', d: 'All of the above'},
        Answer: 'd',
    }
];

function storeQI() {
    localStorage.setItem("questionIndex", JSON.stringify(questionIndex))
}
