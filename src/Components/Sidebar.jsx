import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Form from "./Form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const usersData = useSelector((state) => state.profileData);
  const usersList = Object.keys(usersData);
  const currentUser = usersData[usersList[usersList.length - 1]];

  const bringForm = () => {
    let form = document.querySelector(".new-img");
    form.classList.toggle("active");
  };

  return (
    <div>
      <Container className="new-post">
        <div className="profile-gateway">
          <img src={currentUser.profilePic} alt="profilePic" />
          <div>
            <Link to={`/profile/${currentUser.userID}`}>
              <p>{currentUser.userID}</p>
            </Link>
            <p className="name">{currentUser.name}</p>
          </div>
        </div>
        <div className="btn" onClick={bringForm}>
          <AddCircleIcon />
          <p>Add a Post</p>
          <div className="box"></div>
        </div>
      </Container>
      <Form />
    </div>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 20%;

  .profile-gateway {
    position: absolute;
    bottom: 60px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    border: 1px solid hsl(147, 7%, 75%);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 13px;
    min-width: 150px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    a {
      font-weight: bold;
      text-decoration: none;
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid hsl(147, 7%, 75%);
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s;

    .box {
      position: absolute;
      z-index: 0;
      height: 100%;
      width: 100%;
      transform: scale(0);
      opacity: 0;
      background: linear-gradient(70deg, #962fbf, #4f5bd5);
      transition: all 0.3s;
    }

    svg,
    p {
      z-index: 1;
      background: transparent;
      font-weight: bold;
    }

    svg {
      font-size: 30px;
      margin-right: 5px;
    }

    &:hover {
      transform: scale(1.1);
      svg,
      p {
        color: white;
      }

      .box {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
