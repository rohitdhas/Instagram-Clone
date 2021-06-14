import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import handleEmoji from "../Features/HandleEmoji";
import { handleLike, likePost, postComment } from "../Redux/PostData";
import { useState } from "react";
import { Link } from "react-router-dom";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TelegramIcon from "@material-ui/icons/Telegram";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";

import {
  focusOnComment,
  handleShowMore,
  handleCommentLike
} from "../Features/PostActionMethods";

const Post = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.postData);
  const [comment, setComment] = useState(() => "");

  const handleCommentPost = (event, id) => {
    event.preventDefault();
    dispatch(postComment([comment, id]));
    setComment("");
  };

  return (
    <div className="container">
      {allPosts.length !== 0 ? (
        allPosts.map((postData) => {
          return (
            <UserPost
              key={postData.postID}
              className={`post-${postData.postID}`}
            >
              <UserInfo>
                <div className="post-info">
                  <div className="icon">
                    <img src={postData.profilePic} alt="icon" />
                  </div>
                  <div className="id-location">
                    <p className="user owner-id">
                      <Link to={`/profile/${postData.userID}`}>
                        {postData.userID}
                      </Link>
                    </p>
                    <p className="location">{postData.location}</p>
                  </div>
                </div>
                <MoreHorizIcon />
              </UserInfo>
              <Media onDoubleClick={() => dispatch(likePost(postData.postID))}>
                <FavoriteIcon className={"like-post-" + postData.postID} />
                <img src={postData.postLink} alt="post" />
              </Media>
              <PostInfo>
                <PostActionIcons>
                  <div className="actions">
                    <FavoriteIcon
                      className={`like-icon ${postData.isLiked ? "liked" : ""}`}
                      onClick={() => dispatch(handleLike(postData.postID))}
                    />
                    <ChatBubbleOutlineOutlinedIcon
                      onClick={() => focusOnComment(postData.postID)}
                    />
                    <TelegramIcon />
                  </div>
                  <div className="save">
                    <BookmarkBorderIcon />
                  </div>
                </PostActionIcons>
                <Likes>{postData.likes} likes</Likes>
                <Caption>
                  <div className={`content-${postData.postID} hideContent`}>
                    <span className="user owner-id">
                      <Link to={`/profile/${postData.userID}`}>
                        {postData.userID}
                      </Link>
                    </span>
                    {postData.caption}
                  </div>
                  <span
                    onClick={(e) => handleShowMore(e, `${postData.postID}`)}
                    className="show-more"
                  >
                    <a href="#">...more</a>
                  </span>
                </Caption>
                <Comments>
                  {postData.comments.length !== 0 ? (
                    postData.comments.map((comment) => {
                      return (
                        <li key={comment[1]}>
                          <div>
                            <Link to={`/profile/${comment[0]}`}>
                              <p className="user">{comment[0]}</p>
                            </Link>
                            <p className="comment">{comment[1]}</p>
                          </div>
                          <div>
                            <FavoriteIcon
                              onClick={handleCommentLike}
                              style={{ fontSize: 11 }}
                            />
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <p className="empty-comment-box">No Comments Yet!</p>
                  )}
                </Comments>
                <CommentInput>
                  <SentimentSatisfiedOutlinedIcon
                    onClick={(event) =>
                      handleEmoji(event, `${postData.postID}`)
                    }
                  />
                  <form onSubmit={(e) => handleCommentPost(e, postData.postID)}>
                    <input
                      className={`comment-input-${postData.postID}`}
                      type="text"
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={(e) => setComment(() => e.target.value)}
                    />
                  </form>
                  <a
                    href="#"
                    onClick={(e) => handleCommentPost(e, postData.postID)}
                  >
                    Post
                  </a>
                </CommentInput>
              </PostInfo>
            </UserPost>
          );
        })
      ) : (
        <h1>No Posts Yet!</h1>
      )}
    </div>
  );
};

const UserPost = styled.div`
  width: 45%;
  margin: 20px 0 20px 200px;
  border: 1px solid hsl(147, 7%, 75%);
  font-size: 14px;

  a,
  .user {
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin-right: 5px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    cursor: pointer;
    margin-right: 7px;
    color: #2f2d2d;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    margin: 0 0 20px;
    font-size: 12px;
    width: 100%;
  }
`;

const UserInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  .post-info {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }

    .icon {
      margin-right: 10px;
    }
  }
`;

const Media = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    background: transparent;
    color: tomato;
    transform: scale(0);
    opacity: 0;
    font-size: 100px;
    transition: all 0.2s ease-in;
  }

  svg.active {
    transform: scale(1);
    opacity: 1;
  }

  img {
    width: 100%;
  }
`;

const PostInfo = styled.div`
  margin: 5px 10px;
`;

const PostActionIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .like-icon.liked {
    color: tomato;
  }
`;

const Likes = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const Caption = styled.section`
  .hideContent {
    overflow: hidden;
    height: 1.3em;
  }
  .showContent {
    line-height: auto;
    height: auto;
  }
`;

const Comments = styled.div`
  margin: 10px 0;

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
    }
  }

  .empty-comment-box {
    color: grey;
  }
`;

const CommentInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid hsl(147, 7%, 75%);
  padding: 8px 0;

  form,
  input {
    border: none;
    outline: none;
    font-size: 15px;
    width: 100%;
  }

  a {
    margin: 0 10px;
    font-size: 15px;
    font-weight: bold;
    color: royalblue;
    text-decoration: none;
  }
`;

export default Post;
