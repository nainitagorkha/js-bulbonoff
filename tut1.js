function bulbon(){
    document.getElementById('myImg').src="./on.jpg";
}

function bulboff(){
    document.getElementById('myImg').src="./off.jpg";
}

function toggleBulb(state){
    var currentImage = document.getElementById('myImg');
    if(state === "on") {
        currentImage.src = "./on.jpg";
    } 
    else if(state === "off"){
        currentImage.src = "./off.jpg";
    }
    
}