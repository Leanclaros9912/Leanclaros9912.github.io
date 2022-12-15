const imgGrandeBox = document.getElementById("imgGrandeBox");
imgGrande = document.getElementById("imgGrd");

function abrirImgGrande(referencia){
    imgGrandeBox.style.display = "flex";
    imgGrd.src = referencia;
}
function cerrarImg(){
    imgGrandeBox.style.display = "none";
}