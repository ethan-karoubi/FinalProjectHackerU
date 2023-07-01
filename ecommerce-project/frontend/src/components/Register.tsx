import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { addUser } from "../services/usersService";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { createCart } from "../services/cartService";
interface RegisterProps {
  setIsLoggedIn: Function;
}

const Register: FunctionComponent<RegisterProps> = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(5),
    }),
    onSubmit: (values) => {
      addUser(values)
        .then(async(res) => {
          
            sessionStorage.setItem("userEmail", values.email);
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("token", res.data);

            setIsLoggedIn(true);
            successMsg("registered  successfully");
            debugger
            await createCart();
            navigate("/home");
          
        })
        .catch((err) => {
          console.log(err)
         errorMsg("Wrong email or password");
        });
    },
  });

  // let createUserCart= () => {
  //   createCart().catch((err)=>console.log(err));
  // };

  // let cart = new cart({userId: user._id, products: [], active: true});
  return (
    <>
      <div className="container col-md-3">
        <form className="mb-3" onSubmit={formik.handleSubmit}>
          <h3 className="display-3">REGISTER</h3>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button
            disabled={!formik.isValid || !formik.dirty}
            type="submit"
            className="btn btn-success w-100 mt-3"
          >
            Register
          </button>
        </form>
        <Link to="/">Already have user? Login here</Link>
      </div>
    </>
  );
};

export default Register;

