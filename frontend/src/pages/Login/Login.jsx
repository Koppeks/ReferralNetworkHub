import {
  loginStyles as styles,
  useState,
  useEffect,
  Link,
  useNavigate,
  LinearProgress,
  LuAtSign,
  GoLock,
  FcGoogle,
  FaLinkedinIn,
  handleChange,
  loginUser,
  getCookie,
  validateUserData,
} from "./imports";

/**
 * Login component representing the Login page.
 * @returns {JSX.Element} Login JSX element
 */
const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState({});
  // const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  /**
   * useEffect hook to initialize the login form with remembered credentials.
   * Retrieves stored email and password from cookies and sets them in the
   * component's state if available.
   */
  useEffect(() => {
    // Retrieve stored email and password from cookies
    const storedEmail = getCookie("email");
    const storedPassword = getCookie("password");

    // If email and password are found in cookies, set them in state
    if (storedEmail && storedPassword) {
      setUserData({ email: storedEmail, password: storedPassword });
    }
  }, []);

  /**
   * Handles the form submission for logging in the user.
   * Calls the 'loginUser' function to authenticate the user with provided credentials.
   *
   * @param {Object} e - The event object from the form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = validateUserData(userData);
    loginUser(userData, setIsLoading, setUserData, navigate);

    //Clean the list of errors
    setHasErrors({});

    //Loop through the list of errors and set the state
    if(response !== true){
      response.forEach(error => {
        setHasErrors(prevState => ({ ...prevState, [error.field]: error.errMsg }));
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginFormContainer}>
        <h1 className={styles.formTitle}>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.flexColumn}>
            <label>Email</label>
          </div>
          <div
            className={`${styles.inputForm} ${
              hasErrors.email && styles.inputError
            }`}
          >
            <LuAtSign className={styles.mailIcon} />
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your Email"
              name="email"
              value={userData.email}
              onChange={(event) => handleChange(event, setUserData)}
            />
          </div>
          {hasErrors.email && <small className={styles.errorMessage}>{hasErrors.email}</small>}

          <div className={styles.flexColumn}>
            <label>Password</label>
          </div>
          <div
            className={`${styles.inputForm} ${
              hasErrors.password && styles.inputError
            }`}
            title={hasErrors.password}
          >
            <GoLock className={styles.icon} />
            <input
              type="password"
              className={styles.input}
              placeholder="Enter your Password"
              name="password"
              value={userData.password}
              onChange={(event) => handleChange(event, setUserData)}
            />
          </div>
          {hasErrors.password && <small className={styles.errorMessage}>{hasErrors.password}</small>}
          <div className={styles.flexRow}>
            {/* <div>
              <input
                type="checkbox"
                id="rememberMe"
                // checked={rememberMe}
                // onChange={handleRememberMe}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div> */}
            <Link to="/forgotpassword" className={styles.span}>
              Forgot password?
            </Link>
          </div>
          {isLoading && (
            <div style={{ marginTop: "10px" }}>
              <LinearProgress color="success" />
            </div>
          )}
          <button className={styles.buttonSubmit}>Log In</button>
          <p className={styles.p}>
            Don't have an account?{" "}
            <Link to="/signup" className={styles.link}>
              Sign Up
            </Link>
          </p>
          <p className={`${styles.p} ${styles.line}`}>Or With</p>
          <div className={styles.flexRow}>
            <button className={styles.btn} disabled>
              <FcGoogle className={styles.GoogleIcon} />
            </button>
            <button className={styles.btn} disabled>
              <FaLinkedinIn className={styles.linkedInIcon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
