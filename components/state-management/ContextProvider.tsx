import { useState, createContext, ReactNode, Dispatch } from "react";
export interface IModalProps {
  children?: ReactNode;
}
export interface IModalContext {
  modalState?: boolean;
  setModalState?: Dispatch<React.SetStateAction<boolean>>;
  showSignUp?: boolean;
  setShowSignUp?: Dispatch<React.SetStateAction<boolean>>;
  showSignIn?: boolean;
  setShowSignIn?: Dispatch<React.SetStateAction<boolean>>;
}
const ModalContext = createContext<IModalContext>({});
export function ContextProvider({ children }: IModalProps) {
  const [modalState, setModalState] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(true);
  return (
    <ModalContext.Provider
      value={{
        modalState,
        setModalState,
        showSignUp,
        setShowSignUp,
        showSignIn,
        setShowSignIn,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
export { ModalContext };
