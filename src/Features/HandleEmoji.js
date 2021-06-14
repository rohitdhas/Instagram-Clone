import { EmojiButton } from "@joeattardi/emoji-button";

const picker = new EmojiButton();
let id = "";

const handleEmoji = (event, postID) => {
  picker.togglePicker(event.target);
  id += postID;
};

picker.on("emoji", (selection) => {
  const commentField = document.querySelector(`.comment-input-${id}`);
  // handle the selected emoji here
  commentField.value += selection.emoji;
  id = "";
});

export default handleEmoji;
