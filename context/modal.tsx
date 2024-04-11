"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface ModalType {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalType>({
  modalActive: false,
  setModalActive: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalActive, setModalActive }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
