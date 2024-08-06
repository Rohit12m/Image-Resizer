// functions to display the selected images
document.getElementById('image-input').addEventListener('change', function(){
    const imageContainer = document.getElementById('image-container');
    const uploadedImage = document.getElementById('uploaded-image');
    const file = this.files[0];
    if(file){
        const reader = new FileReader;
        reader.onload = function(e){
            uploadedImage.src = e.target.result;
            imageContainer.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }else{
        imageContainer.style.display = 'none';
    }
});
//  Function to  resize the image to specific dimentions when a button is clicked
document.getElementById('resize-button-instagram').addEventListener('click', function(){
    resizeImage(1080 , 1080)
})
document.getElementById('resize-button-facebook').addEventListener('click', function(){
    resizeImage(1200 , 630)
})
document.getElementById('resize-button-X').addEventListener('click', function(){
    resizeImage(1200 , 675)
})
document.getElementById('resize-button-website').addEventListener('click', function(){
    resizeImage(600 , 3000)
})

// Function to resize the image
function resizeImage(width, height){
    const uploadedImage = document.getElementById('uploaded-image');

    // set the width & the height
    uploadedImage.width = width;
    uploadedImage.height = height;
}