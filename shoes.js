document.getElementById('plus-icon').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const container = document.createElement('div');
            container.className = 'image-container';

            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.style.width = '240px';
            newImage.style.height = '150px';
            newImage.style.marginLeft = '43px';
            newImage.style.marginTop = '5px';
            newImage.style.position = 'absolute';
            container.appendChild(newImage);

            const textInput = document.createElement('textarea');
            textInput.placeholder = '제품명, 후기를 작성해주세요';
            textInput.style.position = 'absolute';
            textInput.style.marginTop = '200px';
            textInput.style.marginLeft = '43px';
            textInput.style.width = '228px';
            textInput.style.border = 'none';
            textInput.style.outline = 'none';
            container.appendChild(textInput);

            document.querySelector('.Rectangle').appendChild(container);

            saveToLocalStorage();
        };
        reader.readAsDataURL(file);
    }
});

function saveToLocalStorage() {
    const containers = document.querySelectorAll('.image-container');
    const data = [];

    containers.forEach(container => {
        const img = container.querySelector('img').src;
        const text = container.querySelector('textarea').value;
        data.push({ img, text });
    });

    localStorage.setItem('imageData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('imageData'));
    if (data) {
        data.forEach(item => {
            const container = document.createElement('div');
            container.className = 'image-container';

            const newImage = document.createElement('img');
            newImage.src = item.img;
            newImage.style.width = '240px';
            newImage.style.height = '150px';
            newImage.style.marginLeft = '43px';
            newImage.style.marginTop = '5px';
            newImage.style.position = 'absolute';
            container.appendChild(newImage);

            const textInput = document.createElement('textarea');
            textInput.placeholder = '제품명, 후기를 작성해주세요';
            textInput.style.position = 'absolute';
            textInput.style.marginTop = '200px';
            textInput.style.marginLeft = '43px';
            textInput.style.width = '228px';
            textInput.style.border = 'none';
            textInput.style.outline = 'none';
            textInput.value = item.text;
            container.appendChild(textInput);

            document.querySelector('.Rectangle').appendChild(container);
        });
    }
}




