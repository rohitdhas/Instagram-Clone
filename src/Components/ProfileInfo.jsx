import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ProfileInfo = () => {
  const { id } = useParams();
  const postDataState = useSelector((state) => state.postData);
  const state = useSelector((state) => state.profileData[id]);

  let filtered = postDataState.filter((post) => {
    return post.userID === id;
  });

  return !state ? (
    <Container>
      <h2>
        Sorry, User with id <span>{id}</span> Doesn't Exist!😕
      </h2>
    </Container>
  ) : (
    <Container>
      <img src={state.profilePic} alt="profilePic" />
      <Info>
        <p className="owner-ID">
          {state.userID}
          {state.verified ? <CheckCircleIcon className="verified" /> : null}
        </p>
        <Stats>
          <p>
            <strong>{filtered.length}</strong> Posts
          </p>
          <p>
            <strong>{state.followers}</strong> Followers
          </p>
          <p>
            <strong>{state.following}</strong> Following
          </p>
        </Stats>
        <Bio>
          <p className="name">
            <strong>{state.name}</strong>
          </p>
          <p className="category">{state.category}</p>
          <p>{state.bio}</p>
        </Bio>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 620px;
  margin: 30px auto;
  padding-bottom: 40px;

  span {
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: contain;
    border: 1px solid #ebdddd;
  }

  .verified {
    color: royalblue;
    margin: 0 5px;
  }

  @media (max-width: 500px) {
    img {
      width: 100px;
    }
    .verified {
      font-size: 15px;
    }
    margin: 20px auto;
    font-size: 11px;
    padding: 0;
  }
`;

const Info = styled.div`
  width: 60%;
  .owner-ID {
    font-size: 30px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
`;
const Bio = styled.div`
  p {
    margin: 2px 0;
  }
  .category {
    color: gray;
  }
`;

export default ProfileInfo;
