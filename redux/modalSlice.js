import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loginModalOpen: false,
    signupModalOpen: false,
    passwordModalOpen: false,
};

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        openLoginModal: (state) => {
            state.loginModalOpen = true;
            state.signupModalOpen = false;
        },
        closeLoginModal: (state) => {
            state.loginModalOpen = false;
        },
        openSignupModal: (state) => {
            state.signupModalOpen = true;
            state.loginModalOpen = false;
        },
        closesignupModal: (state) => {
            state.signupModalOpen = false;
        },
        openPasswordModal: (state) => {
            state.passwordModalOpen = true;
        },
        closePasswordModal: (state) => {
            state.passwordModalOpen = false;
        },
        signIn(state) {
            state.loggedIn = true;
        },
        signOut(state) {
            state.loggedIn = false;
        },
    },
});

export const {
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
    openPasswordModal,
    closePasswordModal,
    signIn,
    signOut,
} = modalSlice.actions;

export default modalSlice.reducer;