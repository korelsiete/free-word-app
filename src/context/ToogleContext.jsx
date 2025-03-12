import { createContext, useContext, useState } from "react";

const ToogleContext = createContext();

export function ToogleProvider({ children }) {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openAdd = () => setIsOpenAdd(true);
  const closeAdd = () => setIsOpenAdd(false);

  const openEdit = () => setIsOpenEdit(true);
  const closeEdit = () => setIsOpenEdit(false);

  return (
    <ToogleContext.Provider
      value={{
        isOpenAdd,
        isOpenEdit,
        openAdd,
        closeAdd,
        openEdit,
        closeEdit,
      }}
    >
      {children}
    </ToogleContext.Provider>
  );
}

export function useToogle() {
  return useContext(ToogleContext);
}
