const likeButton = document.querySelector(".like-button");
const likeIcon = document.querySelector(".like-icon");
const likeCount = document.querySelector(".like-count");

let count = 0;

likeButton.addEventListener("click", function() {

    count = count + 1;

    likeCount.textContent = count;
    likeIcon.src = "liked.svg";
    likeCount.classList.add("liked");

});

const replyButton = document.querySelector(".reply-button");
const replyInput = document.querySelector(".reply-input");
const comments = document.querySelector(".comments");

replyButton.addEventListener("click", function() {

    const reply = replyInput.value;

    if (reply != "") {

        const newComment = document.createElement("div");

        newComment.classList.add("comment");

        newComment.textContent = reply;

        comments.appendChild(newComment);

        replyInput.value = "";
    }

});