import React, { useRef, useState } from "react";
import { PageWrapper, Button } from "../../globalStyles";
import knowledge from "../../images/knowledge.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Logo,
  CardContainer,
  Card,
  Title,
  Form,
  FormGroup,
  GroupTitle,
  GroupInput,
  MessageBlock,
  Extra,
} from "../../globalStyles";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }

  return (
    <PageWrapper>
      <Container>
        <Logo src={knowledge} alt="logo" />
      </Container>
      <CardContainer>
        <Card>
          <Title>Sign Up</Title>
          {error && <MessageBlock type="bad">{error}</MessageBlock>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <GroupTitle>Email</GroupTitle>
              <GroupInput type="email" ref={emailRef} required />
            </FormGroup>
            <FormGroup>
              <GroupTitle>Password</GroupTitle>
              <GroupInput type="password" ref={passwordRef} required />
            </FormGroup>
            <FormGroup>
              <GroupTitle>Password Confirmation</GroupTitle>
              <GroupInput type="password" ref={passwordConfirmRef} required />
            </FormGroup>
            <Button
              buttoncolor="dodgerblue"
              buttonmargin="40px"
              buttonwidth="50%"
              type="submit"
              disabled={loading}
            >
              Sign Up
            </Button>
          </Form>
          <Extra>
            <p>
              Already have an account? <Link to="/LogIn">Log In</Link> instead
            </p>
          </Extra>
        </Card>
      </CardContainer>
    </PageWrapper>
  );
}

export default SignUp;
