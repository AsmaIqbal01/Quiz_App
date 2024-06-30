#!/usr/bin/env 
// The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.
import inquirer from "inquirer";
import chalk from "chalk";
const response = await inquirer.prompt([
    {
        name: "Question1",
        type: "list",
        choices: [".ty", ".ts", ".pv",".xy"],
        message: "Extension of typescript is?",
    },
    {
        name: "Question2",
        type: "list",
        choices: ["Case-Sensitive", "Case-insensitive", "depends on typescript version"],
        message: "Typescript is:",
    },
    {
        name: "Question3",
        type: "list",
        choices: [1, 2,3,4],
        message: "Typescript supports how many types of comments:",
    },
]);
while(response.Question1 === ".ts" && response.Question2 === "Case-Sensitive" && response.Question3 === 2)
    {
        console.log(chalk.bgGreen("Your answers are correct!"));
        break;
    }
    if(response.Question1 !== ".ts" || response.Question2 !== "Case-Sensitive" || response.Question3 !== 2)
    {
        console.log(chalk.bgRed("Please try again!"));
    }

 console.log(chalk.bgBlue("Your answers:"));
 console.log(response);
 console.log(chalk.bgYellow("Correct answers:"));
 console.log({Question1: ".ts", Question2: "Case-Sensitive", Question3: 2});
 
