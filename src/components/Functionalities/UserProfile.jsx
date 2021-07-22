import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";
import { PageWrapper, Button, Input } from "../../globalStyles";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import profile from "../../images/profile.svg";
import loadingImage from "../../images/loading.svg";
import { Container } from "../../globalStyles";
import { db, storage } from "../../firebase";
import ViewProfile from "./ViewProfile";
import UpdateProfile from "./UpdateProfile";

export const RightPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding-left: 25px;
  background-color: lightblue;
`;

const LeftPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const BackButtonContainer = styled.div`
  height: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 0 20px;
  background-color: lightblue;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 75%;
`;

const ProfilePhoto = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export default function UserProfile() {
  const [image, setImage] = useState();
  const [imageChosen, setImageChosen] = useState(false);
  const { currentUser } = useAuth();
  const [waitingForImageUpload, setWaitingForImageUpload] = useState(false);
  const imageRef = useRef();
  const [imageURL, setImageURL] = useState();
  const [isViewingProfile, setIsViewingProfile] = useState(true);
  const [uploadImageURL, setUploadImageURL] = useState();
  const [gender, setGender] = useState();
  const [major, setMajor] = useState();
  const [age, setAge] = useState();
  const userRef = db.collection("UserProfile").doc(currentUser.uid);
  const moreUserInfo = { gender: gender, major: major, age: age };

  const getUser = () => {
    userRef.get().then((doc) => {
      const data = doc.data();
      if (data) {
        setUploadImageURL(data.uploadImageURL ? data.uploadImageURL : profile);
        setGender(data.gender ? data.gender : "");
        setAge(data.age ? data.age : "");
        setMajor(data.major ? data.major : "");
      }
    });
  };

  useEffect(() => getUser(), [moreUserInfo]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageURL(e.target.files[0]);
      setImageChosen(true);
    }
  };

  const handleUploadImage = () => {
    if (!waitingForImageUpload) {
      setWaitingForImageUpload(true);
    } else {
      const uploadTask = storage.ref(`${imageURL.name}`).put(imageURL);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(imageURL.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("UserProfile")
                .doc(currentUser.uid)
                .update({ uploadImageURL: url })
                .then(() => {
                  setUploadImageURL(image);
                  alert("Updated successfully!");
                  setWaitingForImageUpload(false);
                  setImageChosen(false);
                });
            });
        }
      );
    }
  };

  return (
    <PageWrapper>
      <LeftPage>
        <BackButtonContainer>
          <Link to="/">
            <Button buttonwidth="180px" buttoncolor="green">
              Back to Homepage
            </Button>
          </Link>
        </BackButtonContainer>
        <Container height="95%">
          <Wrapper>
            <ProfilePhoto
              src={
                waitingForImageUpload
                  ? imageChosen
                    ? image
                    : loadingImage
                  : uploadImageURL
              }
              alt="photo"
            />
            {waitingForImageUpload ? (
              <Input
                type="file"
                name="photo"
                ref={imageRef}
                onChange={handleImageChange}
                noBorder="true"
              />
            ) : null}
            <Button
              buttonwidth="180px"
              onClick={handleUploadImage}
              disabled={waitingForImageUpload && !imageChosen}
            >
              {waitingForImageUpload ? "Upload" : "Change"} Profile Photo
            </Button>
          </Wrapper>
        </Container>
      </LeftPage>
      <RightPage>
        <Wrapper>
          {isViewingProfile ? (
            <ViewProfile moreUserInfo={moreUserInfo} />
          ) : (
            <UpdateProfile moreUserInfo={moreUserInfo} />
          )}
          <Button
            onClick={() => setIsViewingProfile(!isViewingProfile)}
            buttonwidth="130px"
            buttonmargin="20px"
          >
            {isViewingProfile ? "Update" : "View"} Profile
          </Button>
        </Wrapper>
      </RightPage>
    </PageWrapper>
  );
}
