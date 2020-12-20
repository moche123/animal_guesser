var file;

function init() {
  
    var inputFile = document.getElementById('inputFile1');
    inputFile.addEventListener('change', mostrarImagen, false);
}

function mostrarImagen(event) {
    
    file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = document.getElementById('img1');
        img.src= event.target.result;
    }
   
    reader.readAsDataURL(file);
    
    setup();
}
window.addEventListener('load', init, false);

//
//DEL OTRO CODIGO
let mobilenet;
let photo;

function modelReady(){
  console.log('Model is ready');
  mobilenet.predict(photo,getResults);
}
function getResults(error,results){
  if(error){
    console.log(error);
  }else{
    console.log(results);
    let label = results[0].label;
    let conf = results[0].confidence;
    fill(0);
    textSize(30);
    //text(label,10,height-100)
    createP('<div class="container"><h1> Seems to be: '+label+'</h1><div>');
    createP('<div class="container"><h2> Confidence: '+conf*100+'%</h2><div>');
    //text("conf: "+conf+" %",10,height-50)
  }
}
function imageReady(){
  //image(photo,0,0,width,height);
}
function setup() {
  let myCanvas = createCanvas(100, 10);
  myCanvas.parent('resultados');
  document.getElementById('resultados').innerHTML = '';
  
  if(file){
    photo = createImg(file.name,imageReady);
    photo.hide();
    //background(0);  
    
    mobilenet = ml5.imageClassifier('MobileNet',modelReady);
  }
 
  
} 