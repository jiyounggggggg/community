import React from "react";
import styles from "./AuthModal.module.css";
import Link from "next/link";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AuthModalProps {}

const AuthModal: React.FC<AuthModalProps> = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <h2 className="text-2xl">
          <b>Sign Up</b>
        </h2>
        <small>
          By continuing, you agree to our{" "}
          <Link href="/" className="text-blue-500">
            User Agreement
          </Link>{" "}
          and acknowledge that you understand the{" "}
          <Link href="/" className="text-blue-500">
            Privacy Policy.
          </Link>
        </small>

        <ul className={styles.socialLogin}>
          <li>
            <button className={styles.socialButton}>
              <FontAwesomeIcon
                icon={faGoogle}
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Continue with Google
            </button>
          </li>
          <li>
            <button className={styles.socialButton}>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Continue with Facebook
            </button>
          </li>
        </ul>

        <div className={styles.separator}>
          <hr className={styles.line} />
          <span>or</span>
          <hr className={styles.line} />
        </div>

        <form>
          <ul>
            <li className={styles.inputGroup}>
              <label className={`${styles.label} ${styles.focused}`}>
                Email<span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="Email"
                className={styles.input}
                // onFocus={() => handleFocus("username")}
                // onBlur={() => handleBlur("username")}
                required
              />
            </li>
            <li className={styles.inputGroup}>
              <label className={`${styles.label} ${styles.focused}`}>
                Username<span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="username"
                className={styles.input}
                // onFocus={() => handleFocus("username")}
                // onBlur={() => handleBlur("username")}
                required
              />
            </li>
            <li className={styles.inputGroup}>
              <label className={`${styles.label} ${styles.focused}`}>
                Password<span className={styles.required}>*</span>
              </label>
              <input
                type="password"
                name="password"
                className={styles.input}
                // onFocus={() => handleFocus("username")}
                // onBlur={() => handleBlur("username")}
                required
              />
            </li>
            <li className={styles.inputGroup}>
              <label className={`${styles.label} ${styles.focused}`}>
                Phone Number
              </label>
              <input
                type="digits"
                name="phoneNumber"
                className={styles.input}
                // onFocus={() => handleFocus("username")}
                // onBlur={() => handleBlur("username")}
              />
            </li>
          </ul>

          <small>
            Already have an account?{" "}
            <Link href="/" className="text-blue-500">
              Log In
            </Link>
          </small>
          <button
            type="submit"
            className={`${styles.submitButton} ${styles.active}`}
            // disabled={!isFormValid}
          >
            Sign Up
            {/* {isSignup ? 'Sign Up' : 'Sign In'} */}
          </button>
        </form>
        {/* <button>Close</button> */}
      </div>
    </div>
  );
};

export default AuthModal;
