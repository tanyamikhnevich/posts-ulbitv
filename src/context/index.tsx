import { createContext, Dispatch } from "react";

interface AuthContextI {
  isAuth: boolean;
  setIsAuth: Dispatch<boolean>;
  isLoading: boolean;
  setIsLoading?: Dispatch<boolean>;
}

export const AuthContext = createContext<AuthContextI>({
  isAuth: false,
  isLoading: true,
  setIsAuth: () => void null,
  setIsLoading: () => void null,
});
