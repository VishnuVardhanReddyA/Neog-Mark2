import chalk from 'chalk'
import readlineSync from 'readline-sync'

var questions = [
    {
        question: 'What is full form of CLI ? \n',
        answer: 'Command line Interface'
    },
    {
        question: 'What do we use for running javascript outside of browser?\n',
        answer: 'node.js'
    },
    {
        question: 'which keyword is used for declaring variables in js ? \n',
        answer: 'var'
    },
    {
        question: 'Which function do we use for printing the data int the console ? \n',
        answer: 'console.log()'
    },
    {
        question: 'What should be used for repeated use of code ?\n ',
        answer: 'function'
    }
]

var score = 0;
var topScores = [
    {
        name: 'Stefan',
        score: 5
    },
    {
        name: 'Bella',
        score: 4
    }
]

function welcome() {
    var name = readlineSync.question(chalk.red("What is your name: "));
    console.log('Hello ' + name + ' ! Answer these questions ')
}
function play() {
    for (let i = 0; i < questions.length; i++) {
        var userAns = readlineSync.question(chalk.red(questions[i].question))
        if (userAns.toUpperCase() == (questions[i].answer).toUpperCase()) {
            score++;
            console.log("Nice! answer is correct ")
        } else {
            console.log('Huh Oh! The answer is incorrect')
        }
        console.log('Your current Score is :' + chalk.green.bold(score + '/' + (i + 1)))
    }
}

function displayScores() {
    console.log("\n\n")
    console.log('You scored ' + chalk.bgGreen.bold(score) + ' in the game')
    if (score <= 2)
        console.log(chalk.red('Try better next time'))
    else if (score <= 4)
        console.log(chalk.orange('Nice job! you scored good'))
    else
        chalk.green(console.log('Hurrah! you got all correct\n'))
    console.log('These are the top scores, I will update your score after learning database')
    for (let i = 0; i < topScores.length; i++) {
        console.log(chalk.magenta(topScores[i].name) + ' : ' + chalk.cyan(topScores[i].score))
    }
}

welcome()
play()
displayScores()
