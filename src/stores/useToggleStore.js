import { create } from "zustand";

const useToggleStore = create((set) => ({
  isOpenAdd: false,
  isOpenEdit: false,
  isOpenTimer: false,
  isOpenTimeEdit: false,
  isOpenGroup: false,
  isOpenInput: false,

  openAdd: () => set({ isOpenAdd: true }),
  closeAdd: () => set({ isOpenAdd: false }),

  openEdit: () => set({ isOpenEdit: true }),
  closeEdit: () => set({ isOpenEdit: false }),

  openTimer: () => set({ isOpenTimer: true }),
  closeTimer: () => set({ isOpenTimer: false }),

  openTimeEdit: () => set({ isOpenTimeEdit: true }),
  closeTimeEdit: () => set({ isOpenTimeEdit: false }),

  openGroup: () => set({ isOpenGroup: true }),
  closeGroup: () => set({ isOpenGroup: false }),

  openInput: () => set({ isOpenInput: true }),
  closeInput: () => set({ isOpenInput: false }),
}));

export default useToggleStore;
