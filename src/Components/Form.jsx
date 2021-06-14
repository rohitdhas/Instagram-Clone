import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sharePost } from "../Redux/PostData";
import TelegramIcon from "@material-ui/icons/Telegram";
import CancelIcon from "@material-ui/icons/Cancel";

const Form = () => {
  const [caption, setCaption] = useState(() => "");
  const [location, setLocation] = useState(() => "");
  const [src, setSrc] = useState(() => "");

  const dispatch = useDispatch();

  const readURL = (input) => {
    const [file] = input.files;

    if (file) {
      let src = URL.createObjectURL(file);
      setSrc(src);
    }
  };

  const share = () => {
    if (!caption | !location | !src) return;

    let form = document.querySelector(".new-img");
    dispatch(sharePost([caption, location, src]));

    setCaption("");
    setLocation("");
    form.classList.remove("active");
    window.scrollTo(0, document.body.scrollHeight);
  };

  const cancelPost = () => {
    let form = document.querySelector(".new-img");
    form.classList.remove("active");
  };

  return (
    <Container className="new-img">
      <CancelIcon onClick={cancelPost} id="cancel-post" />
      <FormBox>
        <form>
          <header>
            <h4>New Post</h4>
          </header>
          <input
            type="file"
            id="new-post"
            onChange={(e) => readURL(e.target)}
          />
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            placeholder="Write a caption..."
          />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Your Location"
          />
          <div onClick={share}>
            Share <TelegramIcon />
          </div>
        </form>
      </FormBox>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.3);

  #cancel-post {
    position: absolute;
    top: 70px;
    right: 30px;
    font-size: 40px;
    color: white;
  }

  &.active {
    transform: scale(1);
    opacity: 1;
    pointer-events: auto;
  }
`;

const FormBox = styled.div`
  z-index: 1;
  h4 {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 230px;
    padding: 20px;
    box-shadow: 1px 3px 10px -5px black;
    border: 1px solid hsl(147, 7%, 75%);

    input {
      border: none;
      width: 100%;
      outline: none;
      height: 30px;
      margin: 5px 0;
      border-bottom: 1px solid hsl(147, 7%, 75%);
    }

    /* a {
      text-decoration: none;
      width: 80%;
    } */

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      padding: 5px 10px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background-color: royalblue;
      border-radius: 5px;
      color: white;
      transition: all 0.2s;

      svg {
        color: white;
      }
      &:hover {
        background-color: #1d4bd7;
        transform: scale(1.06);
      }
    }
  }
`;

export default Form;
