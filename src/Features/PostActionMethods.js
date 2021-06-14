export const handleCommentLike = (event) => {
  let color = event.target.style.color;
  event.target.style.color = color === "tomato" ? "#2f2d2d" : "tomato";
};

export const focusOnComment = (postID) => {
  document.querySelector(".comment-input-" + postID).focus();
};

export const likePost = (postID) => {
  let icon = document.querySelector(`.like-post-${postID}`);
  icon.classList.add("active");

  setTimeout(() => {
    icon.classList.remove("active");
  }, 600);
};

export const handleShowMore = (event, postID) => {
  event.preventDefault();
  let node = document.querySelector(`.content-${postID}`);

  if (node.classList[1] === "hideContent") {
    node.classList.replace("hideContent", "showContent");
    event.target.innerHTML = `<a href="#">...less</a>`;
  } else {
    node.classList.replace("showContent", "hideContent");
    event.target.innerHTML = `<a href="#">...more</a>`;
  }
};
