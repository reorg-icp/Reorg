import { createContext, useContext, useState, ReactNode } from "react";

export type authDrawerAuthType = "signin" | "signup";

interface authdrawerctxType {
  authDrawerOpen: boolean;
  authType: authDrawerAuthType;
  openAuthDrawer: (authType: authDrawerAuthType) => void;
  closeAuthdrawer: () => void;
}

const authdrawercontext = createContext<authdrawerctxType>(
  {} as authdrawerctxType
);

interface providerProps {
  children: ReactNode;
}

export const AuthDrawerProvider = ({
  children,
}: providerProps): JSX.Element => {
  const [authDrawerOpen, setauthDrawerOpen] = useState<boolean>(false);
  const [authType, setauthType] = useState<authDrawerAuthType>("signin");

  const openAuthDrawer = (authType: authDrawerAuthType): void => {
    setauthDrawerOpen(true);
    setauthType(authType);
  };

  const closeAuthdrawer = () => {
    setauthDrawerOpen(false);
  };

  return (
    <authdrawercontext.Provider
      value={{ authDrawerOpen, authType, openAuthDrawer, closeAuthdrawer }}
    >
      {children}
    </authdrawercontext.Provider>
  );
};

export const useAuthDrawer = () =>
  useContext<authdrawerctxType>(authdrawercontext);
