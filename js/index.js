const toggleMenu = () => {
    // HTML 요소를 가져오기
    const navToggleDiv = document.querySelector(".nav-toggle");
    const menuUl = document.querySelector(".menu");
    const toggleI = navToggleDiv.querySelector("i");

    navToggleDiv.onclick = () => {
        // 클래스에 show-menu를 추가/제거
        menuUl.classList.toggle("show-menu");

        // 아이콘 변경
        toggleI.classList.toggle("bi-list");
        toggleI.classList.toggle("bi-x-lg");
    };
};

toggleMenu();
