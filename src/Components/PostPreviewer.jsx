import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CancelIcon from "@material-ui/icons/Cancel";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { handleLike, likePost } from "../Redux/PostData";

const PostPreviewer = () => {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const postDataState = useSelector((state) => state.postData);

  const post = postDataState.filter((post) => {
    return post.postID === parseInt(postID);
  });

  const removeOverlay = () => {
    let node = document.querySelector(".overlayBg");
    node.classList.remove("active");

    history.push(`/profile/${post[0].userID}`);
  };

  useEffect(() => {
    let node = document.querySelector(".overlayBg");
    node.classList.add("active");
  });

  return (
    <Container>
      <div className="overlayBg">
        <CancelIcon id="close" onClick={removeOverlay} />
        <Box className="preview-box">
          <div className="pc">
            <div
              className="post-img"
              onDoubleClick={() => dispatch(likePost(post[0].postID))}
            >
              <img src={post[0].postLink} alt="profilePic" />
              <FavoriteIcon className={`like-post-${post[0].postID}`} />
            </div>
            <PostInfo>
              <div className="top">
                <div className="post-info">
                  <div className="icon">
                    <img src={post[0].profilePic} alt="icon" />
                  </div>
                  <div className="id-location">
                    <p className="user owner-id">
                      <a href="#">{post[0].userID}</a>
                    </p>
                    <p className="location">{post[0].location}</p>
                  </div>
                </div>
                <MoreHorizIcon />
              </div>
              <div className="middle">{post[0].caption}</div>
              <div className="bottom">
                <FavoriteIcon
                  className={`like-icon ${post[0].isLiked ? "liked" : ""}`}
                  onClick={() => dispatch(handleLike(post[0].postID))}
                />
                {post[0].likes} Likes
              </div>
            </PostInfo>
          </div>
        </Box>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .overlayBg {
    transform: scale(0);
    display: none;
    transition: all 0.3s;
  }

  .overlayBg.active {
    transform: scale(1);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;

    #close {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 40px;
      color: tomato;
    }
    @media (max-width: 700px) {
      justify-content: center;
      align-items: flex-start;
      position: absolute;
      height: 100vh;
      background-color: white;
      #close {
        z-index: 10;
        right: 10px;
        top: 20px;
      }
    }
  }
`;

const Box = styled.div`
  .pc {
    position: relative;
    width: 600px;
    height: 400px;
    background-color: white;
    display: flex;

    .post-img {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        position: absolute;
        font-size: 80px;
        color: tomato;
        transform: scale(0);
        opacity: 0;
        transition: all 0.2s ease-in;
      }
      svg.active {
        transform: scale(1);
        opacity: 1;
      }

      img {
        height: 100%;
      }
    }

    @media (max-width: 700px) {
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      background-color: transparent;

      img {
        width: 100%;
      }
      .post-img svg {
        font-size: 60px;
        top: 30%;
        left: 40%;
      }
    }
  }
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #b5b3b3;

    svg {
      margin-right: 20px;
    }
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: black;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    .icon img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 20px;
    }
  }

  .middle {
    margin: 0 10px;

    @media (max-width: 700px) {
      margin: 20px 10px;
    }
  }

  .bottom {
    width: 100%;
    height: 60px;
    border-top: 1px solid #b5b3b3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 15px;

    svg {
      margin: 0 20px;
      font-size: 40px;
    }

    .like-icon.liked {
      color: tomato;
    }
  }
`;

export default PostPreviewer;
