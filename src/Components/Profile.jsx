import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

const Profile = () => {
  return (
    <Container>
      <ProfileInfo />
      <ProfilePosts />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 700px;
`;
export default Profile;
