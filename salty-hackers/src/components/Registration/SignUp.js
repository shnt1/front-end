import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";

const SignUp = ({ touched, errors, status }) => {
  const [user, setUser] = useState([]);

  console.log("user", user);
  useEffect(() => {
    status && setUser(users => [...users, status]);
  }, [status]);

  return (
    <Container>
      <MainBox>
        <Onboard>
            <div><h2>Sign-In</h2></div>
            <div><h2>Register</h2></div>
        </Onboard>
        <Form>
          <InputBox>
            <label>
              <Field type="text" name="name" placeholder="name" />
              {touched.name && errors.name && (
                <p className="errors">{errors.name}</p>
              )}
            </label>
          </InputBox>

          <InputBox>
            <label>
              <Field type="password" name="password" placeholder="password" />
              {touched.password && errors.password && (
                <p className="errors">{errors.password}</p>
              )}
            </label>
          </InputBox>

          <InputBox>
            <label>
              <Field
                type="password"
                name="confirm"
                placeholder="confirm password"
              />
              {touched.confirm && errors.confirm && (
                <p className="errors">{errors.confirm}</p>
              )}
            </label>
          </InputBox>

          <CheckContainer>
            <label>
              
              <Field type="checkbox" name="terms" />
              {touched.checkbox && errors.checkbox && (
                <p className="errors">{errors.checkbox}</p>
              )}
              By clicking here, you accept our terms of service.
            </label>
          </CheckContainer>

          <SubmitButton>Submit</SubmitButton>
        </Form>
      </MainBox>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    id: Date.now(),
    name: "",
    password: "",
    confirm: "",
    terms: false
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required("Your name is required!"),
    email: yup.string().required("Please enter a valid email address!"),
    password: yup.string().required("Password is required!"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    checkbox: yup.bool().oneOf([true], "You must accept the terms of service")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    // console.log("Submitting!", formikBag)
    // POST body === {}
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SignUp);

const Container = styled.div`
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  min-width: 350px;
`;

const MainBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: #f5f6ee;
  border: 1px solid #fd6600;
  border-radius: 5px;
`;

const InputBox = styled.div`
  
  padding: 15px 0;
  width: 100%;
  & input {
    height: 34px;
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 24px;
    width: 100%;
    :focus {
        outline: none;
        border-color: #fd6600;
    }
  }
`;

const CheckContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 18px;
  & input {
    position: relative;
    top: 1px;
    height: 18px;
    width: 18px;
    align-self: flex-end;
    margin: 30px 15px 30px 0;
    
  }
`;

const SubmitButton = styled.button`
    width: 80px;
    padding: 5px 0;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #fff;
    transition: 0.5s;
    &:hover {
        border: 1px solid #fd6600;
        background: #f5f6ee;
    }
    &:focus {
        outline: none;
    }

`;

const Onboard = styled.div`
    display: flex;
    text-align: center;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
    & div {
        width: 50%;
        font-size: 20px;
        font-weight: 200;
    }

`;