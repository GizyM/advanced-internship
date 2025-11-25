import React from "react";
import { auth } from "../../firebase";
import { closePasswordModal, openLoginModal } from "../../redux/modalSlice";
import { Alert, Modal, Snackbar } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

export default function PasswordModal() {
  const isOpen = useSelector((state) => state.modals.passwordModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleResetPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(`A Password Reset Link has been sent to ${email}`);
        dispatch(closePasswordModal());
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
        return;
    }
    setError(null);
  };

  function toggleModal() {
    dispatch(closePasswordModal());
    dispatch(openLoginModal());
    setError("");
  }

  return (
    <>
      <Modal open={isOpen} className="modal">
        <div className="modal__block">
          <div className="close__modal--btn">
            <BiX onClick={() => dispatch(closePasswordModal())} />
          </div>
          <div className="modal__auth">
            <h1 className="modal__title">Reset Your Password</h1>

            <form className="modal__input--wrapper">
              <input
                className="modal__input"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <button
                onClick={handleResetPassword}
                className="btn modal__btn--password"
              >
                Send Reset Password Link
              </button>
            </form>
          </div>
          <button 
          onClick={toggleModal}
          className="btn modal__btn"
          >
            Go to Login
          </button>
        </div>
      </Modal>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
        <Alert>
            {error}
        </Alert>
      </Snackbar>
    </>
  );
}
