import React, { useRef, useState } from "react";
import { PageWrapper, Button } from "../../globalStyles";
import bibliophile from "../../images/bibliophile.svg";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
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

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
  }

  return (
    <PageWrapper>
      <Container>
        <Logo src={bibliophile} alt="logo" />
      </Container>
      <CardContainer>
        <Card>
          <Title>Log In</Title>
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
            <Button
              buttoncolor="dodgerblue"
              buttonmargin="40px"
              buttonwidth="50%"
              type="submit"
              disabled={loading}
            >
              Log In
            </Button>
          </Form>
          <Extra>
            <Link to="/ForgotPassword">Forgot Password?</Link>
            <p>
              Doesn't have an account yet? <Link to="/SignUp">Sign Up</Link>{" "}
              instead
            </p>
          </Extra>
        </Card>
      </CardContainer>
    </PageWrapper>
  );
}

export default LogIn;
