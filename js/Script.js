document.getElementById("image").src = "img/landscape.jpg";


var userName = "";
var bioTextVar = "";
var genero = "";
function updateProfileName (){
    userName = document.getElementById('name').value;
     document.getElementById('nome').innerHTML = userName;
     document.getElementById("nome1").innerHTML = userName;
}


function updateProfileGenero (){
    genero = document.getElementById('generoValor').value;
    document.getElementById('genero').innerHTML = genero;
}

function updateProfileBio (){
    bioTextVar = document.getElementById('bioText').value;
    document.getElementById('bio').innerHTML = bioTextVar;
}
