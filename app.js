const fs = require("fs");
const generateHTML = require("./ui");
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");


const inquirer = require("inquirer");
const data = [];

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

        const special = await inquirer.prompt({
            message: "What is the office number?",
            name: "special"
        });
        const mang = new Manager(name.name, id.id, email.Email, special.special);
        data.push(mang);
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
            choices: ['Engineer', "Intern", 'I am done adding team members'],
        },
    ])
    console.log(choice.role);
    let title = choice.role;

    getEmployeeinfo(title);
};



async function getEmployeeinfo(title) {
    const emInfo = [];
    console.log(title);
    if (title === "Intern") {
        console.log("intern" + title);

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

            const special = await inquirer.prompt({
                message: "What is the School?",
                name: "special"
            });

            const emp = new Intern(name.name, id.id, email.Email, special.special);
            data.push(emp);
            // pushtoArray(emp);
            specifics();


        }
        catch (err) {
            console.log(err);
        };

    }

    else if (title === 'Engineer') {
        console.log("enginerr" + title);

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

            const special = await inquirer.prompt({
                message: "What is the Github username?",
                name: "special"
            });

            const emp = new Engineer(name.name, id.id, email.Email, special.special);
            data.push(emp);
            console.log(emp);
            specifics();



        }
        catch (err) {
            console.log(err);
        };

    }
    else if (title === "I am done adding team members") {
        console.log("done" + title);

        console.log("finished adding")
        createPage();
    }
    else {
        console.log("fail" + title);

        console.log("failed to add member");
        specifics();
    };
};

function newMang(data) {
    console.log(data.mang);
    data.appendFile('index.html', employeeHTML(data[0]),(err)=>{
        if (err) throw err;
    });
    addEmployees(data);
    
};
   
function createPage() {
    console.log(data);
    fs.writeFile('index.html', generateHTML(), (err) => {
        if (err) throw err;

        console.log("file created")
        newMang(data);
    });;
}

function addEmployees(data) {
    data.forEach('Intern' && 'Engineer', (err)=>{
        if (err) throw err;
        fs.appendFile('index.html' , employeeHTML(data));
    })
    // run the employeeHTML function for each engineer and intern and append each to the page created
}



getManagerInfo();

