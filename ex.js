let likeCount = 0;
let isLiked = false;

function incrementLike() {
    if (!isLiked) {
        likeCount++;
        document.getElementById('like-count').textContent = likeCount;
        document.getElementById('heart').textContent = '❤️';
        document.getElementById('heart').classList.remove('empty-heart');
        document.getElementById('heart').classList.add('filled-heart');
        isLiked = true;
    } else {
        likeCount--;
        document.getElementById('like-count').textContent = likeCount;
        document.getElementById('heart').textContent = '🤍';
        document.getElementById('heart').classList.remove('filled-heart');
        document.getElementById('heart').classList.add('empty-heart');
        isLiked = false;
    }
}
