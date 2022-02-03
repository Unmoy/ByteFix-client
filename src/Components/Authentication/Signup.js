import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      if (location.state?.from) {
        navigate(location.state.from);
      }
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  const handlegoogle = async () => {
    setLoading(true);
    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
      if (location.state?.from) {
        navigate(location.state.from);
      }
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  return (
    <div>
      <Card className="w-50 mx-auto mt-5 page_font">
        <Card.Body>
          <h2 className="text-center mb-4">Create an account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <button className="w-100 mt-3 features_button" type="submit">
              {loading ? "Creating user.." : "Register"}
            </button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account?{" "}
        <Link to="/login" className="page_font">
          Log In
        </Link>
        <br />
        <button className="signup_google" onClick={handlegoogle}>
          SignUp with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
