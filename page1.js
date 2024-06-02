function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');

    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        menuIcon.innerHTML = '&#10005;'; // 'X' 모양
    } else {
        menuIcon.innerHTML = '&#9776;'; // 원래 아이콘
    }
}

function toggleHeart(image) {
    const container = image.parentElement; // image-container를 선택
    const likes = container.querySelector('.likes'); // image-container 내에서 .likes 요소 선택
    let count = parseInt(likes.innerHTML);

    if (image.src.includes("emheart.png")) {
        image.src = "fuheart.png";
        count += 1;
    } else {
        image.src = "emheart.png";
        count -= 1;
    }

    likes.innerHTML = count;
}
