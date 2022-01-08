document.getElementById("image").src = "img/landscape.jpg";


var userName = "";
var bioTextVar = "";
var genero = "";
function updateProfileName (){
    userName = document.getElementById('name').value;
     document.getElementById('nome').innerHTML = userName;
     document.getElementById("nome1").innerHTML = userName;
     document.getElementById('nome2').innerHTML = userName;
     document.getElementById('nome3').innerHTML = userName;
     document.getElementById('nome4').innerHTML = userName;
     document.getElementById('nome5').innerHTML = userName;
     document.getElementById('post').innerHTML = userName;

}


function updateProfileGenero (){
    genero = document.getElementById('generoValor').value;
    document.getElementById('genero').innerHTML = genero;
}

function updateProfileBio (){
    bioTextVar = document.getElementById('bioText').value;
    document.getElementById('bio').innerHTML = bioTextVar;
}

let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
})

file.addEventListener('change',()=>{

    let reader = new FileReader();

    reader.onload = () => {
        photo.src=reader.result;
    }
    reader.readAsDataURL(file.files[0]);
})


