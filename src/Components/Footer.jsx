import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
      </ul>
      <p>© 2021 INSTAGRAM FROM FAKEBOOK</p>
    </Container>
  );
};

const Container = styled.div`
  width: 45%;
  margin: 20px 0 20px 200px;
  text-align: center;
  font-size: 14px;
  color: gray;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    margin: 10px 0;

    li a {
      text-decoration: none;
      color: gray;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 10px 0;
  }

  @media (max-width: 768px){
    display: none;
  }
`;

export default Footer;
