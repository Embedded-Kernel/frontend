import { useState, createContext } from "react";

const ModalContext = createContext({});
export function ContextProvider({children}: any) {
  const [modalState, setModalState] = useState<boolean>(false);
console.log(modalState);
  return (
    <ModalContext.Provider
      value={{
        modalState,
        setModalState,
      }}
    >
        {children}
    </ModalContext.Provider>
  );
}
export {ModalContext}