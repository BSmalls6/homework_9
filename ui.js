function generateHTML(){
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team</title>
</head>

<body>
    <header class="nav justify-content-center bg-info mb-2">
        <h1>My Team</h1>
    </header>
   
`
}

 const employeeHTML = function(data){
return ` <div class="card m-2" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title" id="name">${data.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: <span id="role">${data.title}</span></h6>
    <p class="card-text">
        <ul class="list-group">
            <li class="list-group-item">ID #: <span id="ident">${data.id}</span></li>
            <li class="list-group-item">Email:<span id="email">${data.email}</span> </li>
            <li class="list-group-item"><span id="special">${data.special}</span></li>
        </ul>
    </p>

</div>
</div>`
}
module.exports = generateHTML;
module.exports = employeeHTML;