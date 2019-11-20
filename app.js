const fs = require("fs");

// Use npm i puppeteer-core for install, much smaller file
const puppeteer = require('puppeteer')
const axios = require("axios")
const inquirer = require("inquirer");
const info = [];

async function getInfo() {
    try {
        const name = await inquirer.prompt({
            message: "What is the name you wish to search?",
            name: "name"
        });

        const id = await inquirer.prompt({
            message: "What is the ID?",
            name: "id"
        });

        const role = await inquirer.prompt({
            message: "What is the role?",
            name: "role"
        });
        info.push(name);
        info.push(id);
        info.push(role); 
        
        specifics(info.role);

    }
    catch (err) {
        console.log(err);
    }
};

function specifics(){
    if(role === "intern" || "engineer" || "manager"){
        if(role === "intern"){
            const school = await inquirer.prompt({
                message: "Where did you go to school?",
                name: "school"
            });
        }
        else if (role === "engineer"){
            const github = await inquirer.prompt({
                message: "What is your GitHub ID?",
                name: "github"
            });
        } 
        else {
            const phone = await inquirer.prompt({
                message: "What is your office number?",
                name: "office"
            });
        }
}
else {
    console.log("please define your role")
}
}


function getUser(user, color) {
    // Get profile data of the user
    try {

        const queryURL = `https://api.github.com/users/${user}`;
        axios.get(queryURL).then(function (res) {
            res.data.color = color;
            details = {
                name: res.data.name,
                company: res.data.company,
                bio: res.data.bio,
                blog: res.data.blog,
                url: res.data.url,
                location: res.data.location,
                html_url: res.data.html_url,
                avatar: res.data.avatar_url,
                public: res.data.public_repos,
                followers: res.data.followers,
                following: res.data.following,
                color: res.data.color,
            }
            console.log(details);
           let html = generateHTML(details);
           printPDF(html);
        })


    }

    
    

catch(err) {
    console.log(err);
}
}


 
async function printPDF(html) {
    try {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  await page.emulateMedia('screen');
  await page.pdf ({
 path: 'profile.pdf',
 format: 'A4',
 printBackground: true,
  });
  console.log('done');
 
  await browser.close();
  process.exit();
}

catch(e){
    console.log('our error', e)
}
}




getInfo();

