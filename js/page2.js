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

const images = document.querySelectorAll('.empty1, .empty2, .empty3, .empty4, .empty5');

// 각 이미지에 클릭 이벤트 리스너를 추가합니다.
images.forEach(image => {
    image.addEventListener('click', () => {
        // 이미지를 클릭하면 src 속성을 Vector.png로 변경합니다.
        image.src = 'images/Vector (3).png';
    });
});

const fileInput = document.getElementById("fileInput");
const uploadedImage = document.getElementById("uploadedImage");
const formContainer = document.getElementById("formContainer");

fileInput.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block'; // 업로드된 이미지 보이기
            formContainer.style.display = 'flex'; // 폼 보이기
        };
        reader.readAsDataURL(file);
    }
});

const reviewButton = document.querySelector(".form-container button");

reviewButton.addEventListener("click", function() {
    // 여기에 리뷰가 성공적으로 등록되었다는 알림을 보여주는 코드를 추가합니다.
    alert("리뷰가 성공적으로 등록되었습니다.");
});



