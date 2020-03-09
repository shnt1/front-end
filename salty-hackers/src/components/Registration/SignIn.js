import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

function SignIn({ touched, errors }) {
  return (
    <Container>
      <MainBox>
        <Onboard>
          <div>
            <p>
              <Link to={"/"}>Sign-In</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to={"/register"}>Register</Link>
            </p>
          </div>
        </Onboard>
        <Form>
          <InputBox>
            <label>
              <Field type="text" name="username" placeholder="name" />
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
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
      </MainBox>
    </Container>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3)
      .required(),
    password: Yup.string()
      .min(3)
      .required()
  }),

  handleSubmit(values, formikBag) {
    const url = "https://saltyhacker.herokuapp.com/api/auth/login";

    console.log(values);

    axiosWithAuth()
      .post(url, values)
      .then(response => {
        console.log(response.data.payload);
        sessionStorage.setItem("token", response.data.payload);
        formikBag.props.history.push("/app");
      })
      .catch(e => {
        console.log(e);
      });
  }
})(SignIn);

// const SignIn = ({ touched, errors, status }) => {
//   const [user, setUser] = useState([]);

//   console.log("user", user);
//   useEffect(() => {
//     status && setUser(users => [...users, status]);
//   }, [status]);

//   return (
//     <Container>
//       <MainBox>
//         <Onboard>
//             <div><p><Link to={'/'}>Sign-In</Link></p></div>
//             <div><p><Link to={'/register'}>Register</Link></p></div>
//         </Onboard>
//         <Form>
//           <InputBox>
//             <label>
//               <Field type="text" name="name" placeholder="name" />
//               {touched.name && errors.name && (
//                 <p className="errors">{errors.name}</p>
//               )}
//             </label>
//           </InputBox>

//           <InputBox>
//             <label>
//               <Field type="password" name="password" placeholder="password" />
//               {touched.password && errors.password && (
//                 <p className="errors">{errors.password}</p>
//               )}
//             </label>
//           </InputBox>

//           <button type="submit">Sign In</button>
//         </Form>
//       </MainBox>
//     </Container>
//   );
// };

// export default withFormik({
//   mapPropsToValues: props => ({
//     id: Date.now(),
//     name: "",
//     password: "",
//     terms: false
//   }),
//   validationSchema: yup.object().shape({
//     name: yup.string().required("Your name is required!"),
//     password: yup.string().required("Password is required!"),
//     checkbox: yup.bool().oneOf([true], "You must accept the terms of service")
//   }),
//   handleSubmit: (values, formikBag) => {
//     // console.log("Submitting!", formikBag)
//     // POST body === {}
//     axiosWithAuth()
//       .post("https://saltyhacker.herokuapp.com/api/auth/register", values)
//       .then(response => {
//         //server team needs to implement jwt endpoint
//         console.log(response, 'this is the response');
//         sessionStorage.setItem('token', response.data);

//         formikBag.props.history.push('/app')
//       })
//       .catch(err => console.log(err.response));
//   }
// })(SignIn);

const Container = styled.div`
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 55%;
  font-weight: 200;
  @media (max-width: 900px) {
    max-width: 70%;
  }
`;

const MainBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-items: center;
  background: #f5f6ee;
  border: 1px solid #fd6600;
  border-radius: 5px;
  background-image: linear-gradient(120deg, #f5f6ee, #e2e4d8);
`;

const InputBox = styled.div`
  padding: 15px 0;
  width: 400px;
  @media (max-width: 768px) {
    width: 300px;
  }
  & input {
    height: 34px;
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 24px;
    font-weight: 200;
    width: 100%;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.09), 0 2px 2px rgba(0, 0, 0, 0.03);
    :focus {
      outline: none;
      border-color: #fd6600;
    }
  }
`;

// const CheckContainer = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: center;
//   font-size: 18px;

//   & input {
//     position: relative;
//     top: 1px;
//     height: 18px;
//     width: 18px;
//     align-self: flex-end;
//     margin: 30px 15px 30px 0;
//   }
// `;

const SubmitButton = styled.button`
  margin-top: 15px;
  padding: 5px 10px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.09), 0 2px 2px rgba(0, 0, 0, 0.03);
  border: 1px solid #fff;
  font-weight: 200;
  margin-bottom: 10px;
  transition: 0.5s;
  color: ##3a3a3a;
  &:hover {
    border: 1px solid #fd6600;
    background: #f5f6ee;
    color: black;
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
    font-size: 22px;
    font-weight: 200;
    text-align: center;
  }
  & div:first-child {
    border-right: 1px solid black;
    margin-left: 80px;
  }
  & div:last-child {
    margin-right: 80px;
  }
  & a {
    text-decoration: none;
    color: black;
    &:hover {
      border-bottom: 1px solid #fd6600;
    }
  }
`;
