const toggleMenu = () => {
    const navToggleDiv = document.querySelector(".nav-toggle");
    const menuUl = document.querySelector(".menu");
    const toggleI = navToggleDiv.querySelector("i");

    navToggleDiv.onclick = () => {
        menuUl.classList.toggle("show-menu");
        toggleI.classList.toggle("bi-list");
        toggleI.classList.toggle("bi-x-lg");
    };
};

toggleMenu();

const fileInput = document.getElementById("fileInput");
const uploadedImage = document.getElementById("uploadedImage");

fileInput.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block'; // 업로드된 이미지 보이기
        };
        reader.readAsDataURL(file);
    }
});
