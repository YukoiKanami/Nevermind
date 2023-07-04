function showImage(element){
    var selectedImage = document.getElementById('selected-image');
    selectedImage.src = element.src;

}

function hideImage(){
    var zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.src = '';
  
}