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
