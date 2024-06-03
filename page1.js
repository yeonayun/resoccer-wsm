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

// 좋아요 증가 및 로컬 스토리지 기능 추가
document.addEventListener('DOMContentLoaded', () => {
    const likeElements = document.querySelectorAll('.likes');

    // 로컬 스토리지에서 좋아요 수 불러오기
    likeElements.forEach(likeElement => {
        const containerId = likeElement.closest('.image-container').dataset.id;
        const storedLikes = localStorage.getItem(`likes_${containerId}`);
        if (storedLikes !== null) {
            likeElement.textContent = `${storedLikes} ❤`;
        }
    });

    likeElements.forEach(likeElement => {
        likeElement.addEventListener('click', () => {
            const containerId = likeElement.closest('.image-container').dataset.id;
            const currentLikes = parseInt(likeElement.textContent);
            const newLikes = currentLikes + 1;
            likeElement.textContent = `${newLikes} ❤`;
            localStorage.setItem(`likes_${containerId}`, newLikes);
        });
    });
});
