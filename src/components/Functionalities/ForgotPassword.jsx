import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { PageWrapper, Button } from "../../globalStyles";
import password from "../../images/password.svg";
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

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
  }

  return (
    <PageWrapper>
      <Container>
        <Logo src={password} alt="logo" />
      </Container>
      <CardContainer>
        <Card>
          <Title>Reset Password</Title>
          {error && <MessageBlock type="bad">{error}</MessageBlock>}
          {message && <MessageBlock type="good">{message}</MessageBlock>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <GroupTitle>Email</GroupTitle>
              <GroupInput type="email" ref={emailRef} required />
            </FormGroup>
            <Button
              buttoncolor="dodgerblue"
              buttonmargin="40px"
              buttonwidth="50%"
              type="submit"
              disabled={loading}
            >
              Reset Password
            </Button>
          </Form>
          <Extra>
            <Link to="/LogIn">Log In</Link>
            <p>
              Need a new account? <Link to="/SignUp">Sign Up</Link> here
            </p>
          </Extra>
        </Card>
      </CardContainer>
    </PageWrapper>
  );
}
