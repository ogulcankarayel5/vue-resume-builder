import firebase, { auth } from "@/plugins";
const registerWithEmailAndPassword = async (email, password) => {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    return response;
};
const loginWithEmailAndPassword = async (email, password) => {
    const response = await auth.signInWithEmailAndPassword(email, password);
    return response;
};
const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await auth.signInWithPopup(provider);
    return response;
};
const logout = async () => {
    await auth.signOut();
};
export const AuthService = {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    logout,
};
//# sourceMappingURL=services.js.map