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

const logout = async (): Promise<any> => {
  await auth.signOut();
};
export const AuthService = {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
};
