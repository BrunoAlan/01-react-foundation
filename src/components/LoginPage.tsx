import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === "checking") {
    return <p>Checking authentication...</p>;
  }

  return (
    <>
      <h3>Login Page</h3>

      {authStatus === "authenticated" ? (
        <div>Authenticated as: {JSON.stringify(user)}</div>
      ) : (
        <div>Unauthenticated</div>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login("alan.bruno@gmail.com", "123456")}>
          Login
        </button>
      )}
    </>
  );
};
