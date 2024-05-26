document.getElementById('plus-icon').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.style.width = '240px';
            newImage.style.height = '150px';
            newImage.style.marginLeft = '65px';
            newImage.style.marginTop = '20px';
            newImage.style.position = 'absolute';
            document.querySelector('.Rectangle').appendChild(newImage);
        };
        reader.readAsDataURL(file);
    }
});
