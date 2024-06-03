const toggleMenu = () => {
    // HTML 요소를 가져옵니다
    const navToggleDiv = document.querySelector(".nav-toggle");
    const menuUl = document.querySelector(".menu");
    const toggleI = navToggleDiv.querySelector("i");

    navToggleDiv.onclick = () => {
        // 클래스에 show-menu를 추가하거나 제거합니다
        menuUl.classList.toggle("show-menu");

        // 아이콘 클래스를 변경합니다
        toggleI.classList.toggle("bi-list");
        toggleI.classList.toggle("bi-x-lg");
    };
};

toggleMenu();

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
