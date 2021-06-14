import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import { handleLogin } from "../Redux/PostData";
import { getUserData } from "../Redux/ProfileData";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const ProfileData = useSelector((state) => state.profileData);

  const ExistedUsers = Object.keys(ProfileData);

  const runLogin = (e) => {
    e.preventDefault();
    if (ExistedUsers.indexOf(userID) !== -1) {
      let warn = document.querySelector(".warning");
      warn.classList.add("active");

      setTimeout(() => {
        warn.classList.remove("active");
      }, 3000);

      return;
    }
    history.push("/home");
    dispatch(handleLogin([userID, userName]));
    dispatch(getUserData([userID, userName]));
  };

  useEffect(() => {
    let btn = document.querySelector("button");
    if (!userID | !userName | !password) {
      btn.setAttribute("disabled", "true");
    } else {
      btn.removeAttribute("disabled");
    }
  }, [userID, userName, password]);

  return (
    <Container>
      <Form>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          type="text"
          placeholder="Fake Username"
        />
        <input
          type="password"
          placeholder="Fake Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={runLogin}>Log in</button>
        <footer>
          Instagram from Fakebook
          <FacebookIcon />
        </footer>
      </Form>
      <div className="warning">Username already Exist!</div>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(50deg, #d6249f, #285aeb);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .warning {
    position: absolute;
    bottom: 20px;
    opacity: 0;
    color: tomato;
    background: #1c2022;
    font-size: 15px;
    padding: 10px 5px;
    width: 260px;
    text-align: center;
    font-weight: bold;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  .warning.active {
    bottom: 60px;
    opacity: 1;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  height: 300px;
  width: 260px;
  padding: 10px 20px;
  box-shadow: 6px 8px 10px -9px black;

  img {
    width: 130px;
    margin-bottom: 10px;
  }

  input {
    margin: 7px 0;
    border: 1px solid #757676;
    border-radius: 5px;
    height: 30px;
    padding: 0 3px;
    width: 100%;
    outline: 0;

    &:focus {
      border: 2px solid rgb(65, 105, 225, 0.7);
    }
  }

  a {
    width: 100%;
  }

  button {
    margin-top: 10px;
    width: 100%;
    padding: 7px 10px;
    outline: none;
    border: none;
    background-color: royalblue;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background-color: #1c4ddf;
    }
  }

  footer {
    font-weight: bold;
    margin-top: 20px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #534e4e;

    svg {
      color: royalblue;
      margin: 0 5px;
    }
  }
`;
export default Login;
