const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: "Are you ready for a Maze?",
    answers: {
        yes: {
            q: "Great! As soon as you enter you come across two pathways. You need to choose wisely, any misstep can mean you will be lost for ever! Will you go either left or right?",
            answers: {
                left: {
                    q: "The left path was the right choice for you! As you walk along the way you come across a mystical figure that appears out of a mistyrose fog that blocks the view. It says that you will only allowed to pass if you know the right answer to his question. What is at the end of the Rainbow?",
                    answers: {
                        W: {
                            q: "As the fog clears a new pathway apears to be splitting into two directions. Make sure to choose the right way.",
                            answers: {
                                right: {
                                    q: "Wise choice of you. You seem to be a good listener! Go ahead and you'll meet the wizard who is awaiting you with one final question. What word is always spelled wrong?",
                                    answers: {
                                        wrong: "Absolutley right smartass you'll be allowed to enter the fort and receive an endless amount of wealth.",
                                        right:"WRONG! The wizard waves his wand and speaks some hardly understandable phrases. You magically transform into a tiny bug and before you even realize it, he crushes you with your foot."
                                    }
                                },
                                left: "You arent really listening you will be catapulted back to the start. Make sure to clean your ears before you try another time.",
                            },
                        },
                        Gold: "WRONG! The mystical creature opens its mouth rapidly and devours you in one piece.",
                    },
                },
                right: "Its a trap! You fall into a bottomless hole! The right way might not always be the right way...",
            },
        },
        no: "Too bad.... bye!",
    },
};

function askQuestion(obj) {
    rl.question(chalk.green(obj.q), (answer) => {
        const question = obj.answers[answer];
        if (obj.answers[answer]) {
            if (question.q) {
                askQuestion(question);
                console.log(
                    chalk.blue("[ " + Object.keys(question.answers) + " ]")
                );
            } else {
                console.log(chalk.yellow(question));
                rl.close();
            }
        } else {
            console.log(chalk.red("thats not the right answer try again"));
            askQuestion(obj);
        }
    });
}
console.log(chalk.bgYellow("Good day to you, Max!"));
askQuestion(story);
