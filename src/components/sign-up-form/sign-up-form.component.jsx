import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
const initialFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

import "./sign-up-form.styles.scss";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFields);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (confirmPassword !== password) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );
      console.log(user);

      await createUserDocumentFromAuth(user, displayName);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email is already in use");
      } else {
        console.log("user creation encountered an eror", error);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields(fields => {
      return {
        ...fields,
        [name]: value,
      };
    });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
