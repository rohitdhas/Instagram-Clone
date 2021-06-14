import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const searchValue = useRef("");
  const history = useHistory();

  // Selecting Current user
  const usersData = useSelector((state) => state.profileData);
  const userNames = Object.keys(usersData);
  const currentUser = usersData[userNames[userNames.length - 1]];

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = searchValue.current.value;
    if (!input) return;
    history.push(`/profile/${input}`);
  };

  const getLogoutBtn = () => {
    const btn = document.querySelector(".tooltip");
    btn.classList.toggle("active");
  };

  const likeBtn = (event) => {
    let color = event.target.style.color;

    if (color === "tomato") {
      color = "black";
    } else {
      color = "tomato";
    }
    event.target.style.color = color;
  };

  return (
    <NavBar>
      <div id="nav-items">
        <Link to="/home">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt="logo"
          />
        </Link>
        <div className="inputField">
          <SearchIcon style={{ color: "gray", fontSize: 20 }} />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" ref={searchValue} />
          </form>
        </div>
        <div className="otherIcons">
          <div className="home">
            <Link to="/home">
              <HomeIcon />
            </Link>
          </div>
          <div className="chat">
            <Link to="/contact">
              <ChatBubbleOutlineOutlinedIcon />
            </Link>
          </div>
          <div className="heart">
            <FavoriteIcon onClick={likeBtn} />
          </div>
          <div className="logout">
            <img
              src={currentUser.profilePic}
              alt="profile-pic"
              onClick={getLogoutBtn}
            />
            <div className="tooltip">
              <a href="/">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: white;
  height: 55px;
  border-bottom: 1px solid hsl(147, 7%, 75%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  #nav-items {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    background-color: white;

    .logout {
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;

        &:hover {
          border: 2px solid violet;
        }
      }

      .tooltip.active {
        display: block;
      }

      .tooltip {
        display: none;
        position: absolute;
        top: 60px;
        right: 160px;
        border: 1px solid hsl(147, 7%, 75%);
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;

        a {
          text-decoration: none;
          color: black;
          background: transparent;
        }

        &:hover {
          background: #1c2022;
          a {
            color: white;
          }
        }
        @media (max-width: 768px) {
          right: 5px;
          top: 60px;
        }
      }
    }

    img {
      max-width: 100px;
      margin: 0 20px 0;
    }

    .inputField {
      border: 1px solid hsl(147, 7%, 75%);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        margin: 0 10px;
        color: #2f2d2d;
      }

      input {
        border: none;
        height: 25px;
        width: 100%;
        outline: none;
      }
    }

    .otherIcons {
      margin-right: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        color: #2f2d2d;
        margin: 0 5px;
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    @media (max-width: 768px) {
      width: 100%;

      .inputField {
        display: none;
      }

      .otherIcons {
        margin: 0;
      }
    }
  }
`;

export default Navbar;
