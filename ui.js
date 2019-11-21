function generateHTML(data){
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
    <div class="container">
        <div class="row" id="members">
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="mName">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Role: <span id="mRole">${data.role}</span></h6>
                    <p class="card-text">
                        <ul class="list-group">
                            <li class="list-group-item">ID #: <span id="mIdent">${data.id}</span></li>
                            <li class="list-group-item">Email:<span id="mEmail">${data.email}</span> </li>
                            <li class="list-group-item"><span id="mSpecial">${data.officenumber}</span></li>
                        </ul>
                    </p>

                </div>
            </div>

            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="name"></h5>
                    <h6 class="card-subtitle mb-2 text-muted">Role: <span id="role"></span></h6>
                    <p class="card-text">
                        <ul class="list-group">
                            <li class="list-group-item">ID #: <span id="ident"></span></li>
                            <li class="list-group-item">Email:<span id="email"></span> </li>
                            <li class="list-group-item"><span id="special"></span></li>
                        </ul>
                    </p>

                </div>
            </div>
        </div>
    </div>
</body>

</html>`
}

function employeeHTML(res){
return ` <div class="card m-2" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title" id="name">${res.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: <span id="role">${res.role}</span></h6>
    <p class="card-text">
        <ul class="list-group">
            <li class="list-group-item">ID #: <span id="ident">${res.id}</span></li>
            <li class="list-group-item">Email:<span id="email">${res.email}</span> </li>
            <li class="list-group-item"><span id="special">${res.special}</span></li>
        </ul>
    </p>

</div>
</div>`
}