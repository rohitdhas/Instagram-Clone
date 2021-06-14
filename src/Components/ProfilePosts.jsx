import styled from "styled-components";
import PostPreviewer from "./PostPreviewer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

const ProfilePosts = () => {
  const { id } = useParams();
  const postDataState = useSelector((state) => state.postData);

  let filteredPosts = postDataState.filter((post) => {
    return post.userID === id;
  });

  return (
    <Router>
      <Route path="/profile/:id/:postID">
        <PostPreviewer />
      </Route>
      <PostGrid>
        {filteredPosts.length === 0 ? (
          <h2 id="empty-post-section">No Posts Yet!🔎</h2>
        ) : (
          filteredPosts.map((post) => {
            return (
              <Link key={post.postID} to={`/profile/${id}/${post.postID}`}>
                <div>
                  <div className="overlay"></div>
                  <img src={post.postLink} alt="post" />
                </div>
              </Link>
            );
          })
        )}
      </PostGrid>
    </Router>
  );
};

const PostGrid = styled.div`
  padding: 20px 10px;
  border-top: 1px solid #b5b3b3;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 7px;

  #empty-post-section {
    position: absolute;
    left: 45%;
    color: gray;
  }

  div {
    width: 100%;
    height: 80%;
    position: relative;
    cursor: pointer;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      object-fit: cover;
    }

    .overlay {
      background: linear-gradient(50deg, #d6249f, #285aeb);
      height: 100%;
      width: 100%;
      opacity: 0;
      position: absolute;
      transition: all 0.2s;
    }

    &:hover {
      .overlay {
        opacity: 0.4;
      }
    }
  }

  @media (max-width: 500px) {
    grid-gap: 2px;
  }
`;

export default ProfilePosts;
