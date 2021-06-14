import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const Contact = () => {
  return (
    <Container>
      <div className="img">
        <img
          src="https://avatars.githubusercontent.com/u/53969450?v=4"
          alt="pic"
        />
      </div>
      <div className="email">
        <h2>rohitdhas666@gmail.com</h2>
      </div>
      <div className="social-media">
        <div className="instagram handle">
          <a target="_blank" href="https://www.instagram.com/rohitdhas_11/">
            Instagram
          </a>
          <InstagramIcon />
        </div>
        <div className="linkedin handle">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rohit-dhas-26b68215a/"
          >
            LinkedIn
          </a>
          <LinkedInIcon />
        </div>
        <div className="github handle">
          <a target="_blank" href="https://github.com/rohitdhas">
            GitHub
          </a>
          <GitHubIcon />
        </div>
        <div className="Twitter handle">
          <a target="_blank" href="https://twitter.com/rohitdhas2">
            Twitter
          </a>
          <TwitterIcon />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #b5b3b3;
    margin: 10px 0;
  }

  .email {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .social-media {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
    font-size: 22px;

    .handle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;

      a {
        text-decoration: none;
        color: black;
        margin: 0 3px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
      font-size: 17px;

      .handle {
        width: 100%;
        justify-content: space-evenly;
      }
    }
  }
`;

export default Contact;
