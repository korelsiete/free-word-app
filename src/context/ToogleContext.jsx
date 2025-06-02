import { createContext, useContext, useState } from "react";

const ToogleContext = createContext();

export function ToogleProvider({ children }) {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenTimer, setIsOpenTimer] = useState(false);
  const [isOpenTimeEdit, setIsOpenTimeEdit] = useState(false);
  const [isOpenGroup, setIsOpenGroup] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);

  const openAdd = () => setIsOpenAdd(true);
  const closeAdd = () => setIsOpenAdd(false);

  const openEdit = () => setIsOpenEdit(true);
  const closeEdit = () => setIsOpenEdit(false);

  const openTimer = () => setIsOpenTimer(true);
  const closeTimer = () => setIsOpenTimer(false);

  const openTimeEdit = () => setIsOpenTimeEdit(true);
  const closeTimeEdit = () => setIsOpenTimeEdit(false);

  const openGroup = () => setIsOpenGroup(true);
  const closeGroup = () => setIsOpenGroup(false);

  const openInput = () => setIsOpenInput(true);
  const closeInput = () => setIsOpenInput(false);
  const toogleInput = () => setIsOpenInput((prev) => !prev);

  return (
    <ToogleContext.Provider
      value={{
        isOpenAdd,
        isOpenEdit,
        isOpenTimer,
        isOpenTimeEdit,
        isOpenGroup,
        openAdd,
        closeAdd,
        openEdit,
        closeEdit,
        openTimer,
        closeTimer,
        openTimeEdit,
        closeTimeEdit,
        openGroup,
        closeGroup,
        isOpenInput,
        openInput,
        closeInput,
        toogleInput,
      }}
    >
      {children}
    </ToogleContext.Provider>
  );
}

export function useToogle() {
  return useContext(ToogleContext);
}
