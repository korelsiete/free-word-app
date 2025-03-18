import { createContext, useContext, useState } from "react";

const ToogleContext = createContext();

export function ToogleProvider({ children }) {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenTimer, setIsOpenTimer] = useState(false);
  const [isOpenTimeEdit, setIsOpenTimeEdit] = useState(false);

  const openAdd = () => setIsOpenAdd(true);
  const closeAdd = () => setIsOpenAdd(false);

  const openEdit = () => setIsOpenEdit(true);
  const closeEdit = () => setIsOpenEdit(false);

  const openTimer = () => setIsOpenTimer(true);
  const closeTimer = () => setIsOpenTimer(false);

  const openTimeEdit = () => setIsOpenTimeEdit(true);
  const closeTimeEdit = () => setIsOpenTimeEdit(false);

  return (
    <ToogleContext.Provider
      value={{
        isOpenAdd,
        isOpenEdit,
        isOpenTimer,
        isOpenTimeEdit,
        openAdd,
        closeAdd,
        openEdit,
        closeEdit,
        openTimer,
        closeTimer,
        openTimeEdit,
        closeTimeEdit,
      }}
    >
      {children}
    </ToogleContext.Provider>
  );
}

export function useToogle() {
  return useContext(ToogleContext);
}
