#! /env/usr/bin node
// import the "inquirer" module, which is a command line interface for Node.js
import inquirer from "inquirer"

// Declare a const 'answer' and assign it to the result of inquirer.promt function
const answer: {
     sentence: string
    } = await inquirer.prompt([{

        name:"sentence",
        type:"input",
        message:"Kindly,Enter your sentence to count the word: "

    }])
    const words = answer.sentence.trim().split(" ");

    // print the array of words to the console

    console.log(words);

    console.log(`Your sentence word count is ${words.length}`);
    
    