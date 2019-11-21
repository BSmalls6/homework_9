const fs = require("fs");

// Use npm i puppeteer-core for install, much smaller file
// const puppeteer = require('puppeteer')
// const axios = require("axios")
const inquirer = require("inquirer");
const info = [];

async function getManagerInfo() {
    try {
        const name = await inquirer.prompt({
            message: "What is the Managers name?",
            name: "name"
        });

        const id = await inquirer.prompt({
            message: "What is the ID?",
            name: "id"
        });
        const email = await inquirer.prompt({
            message: "What is the Email?",
            name: "Email"
        });

        const office = await inquirer.prompt({
            message: "What is the office number?",
            name: "office"
        });
        info.push(name);
        info.push(id);
        info.push(email);
        info.push(office);

        specifics();

    }
    catch (err) {
        console.log(err);
    }
};

async function specifics() {
    // try {
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What kind of team member do you wish to add?',
            choices: ['Engineer', 'Intern', 'I am done adding team members'],
        },
    ])
    let title = JSON.stringify(choice.role);

    getEmployeeinfo(title);
}



async function getEmployeeinfo(title) {
    const emInfo = [];
    console.log(title);
    if (title === 'Intern') {
        try {
            const name = await inquirer.prompt({
                message: "What is the Intern's name?",
                name: "name"
            });

            const id = await inquirer.prompt({
                message: "What is the ID?",
                name: "id"
            });
            const email = await inquirer.prompt({
                message: "What is the Email?",
                name: "Email"
            });

            const school = await inquirer.prompt({
                message: "What is the School?",
                name: "school"
            });
            emInfo.push(name);
            emInfo.push(id);
            emInfo.push(email);
            emInfo.push(school);
console.log(emInfo);
            specifics();
            // await newGuy(emInfo);

        }
        catch (err) {
            console.log(err);
        }

    }

    else if (title = 'Engineer') {
        try {
            const name = await inquirer.prompt({
                message: "What is the Engineers's name?",
                name: "name"
            });

            const id = await inquirer.prompt({
                message: "What is the ID?",
                name: "id"
            });
            const email = await inquirer.prompt({
                message: "What is the Email?",
                name: "Email"
            });

            const github = await inquirer.prompt({
                message: "What is the Github username?",
                name: "github"
            });
            emInfo.push(name);
            emInfo.push(id);
            emInfo.push(email);
            emInfo.push(github);
            console.log(emInfo);
            specifics();

            // await newGuy(emInfo);

        }
        catch (err) {
            console.log(err);
        }

    }
    else if (title === 'I am done adding team members') {
        console.log("finished adding")
        // createPage();
    }
    else {
        console.log("failed to add member");
        specifics();
    }
}



getManagerInfo();

