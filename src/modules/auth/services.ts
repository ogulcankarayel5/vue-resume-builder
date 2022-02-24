import firebase, { auth } from "@/plugins";

const registerWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  const response = await auth.createUserWithEmailAndPassword(email, password);

  return response;
};

const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  const response = await auth.signInWithEmailAndPassword(email, password);

  return response;
};

const loginWithGoogle = async (): Promise<any> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const response = await auth.signInWithPopup(provider);
  return response;
};

const logout = async (): Promise<any> => {
  await auth.signOut();
};
export const AuthService = {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  loginWithGoogle,
  logout,
};
