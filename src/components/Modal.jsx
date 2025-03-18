import { useToogle } from "../context/ToogleContext";
import { AddForm, EditForm, EditTimeForm } from "./Form";
import { CloseIcon } from "./Icon";

export default function Modal() {
  const {
    closeAdd,
    closeEdit,
    closeTimeEdit,
    isOpenAdd,
    isOpenEdit,
    isOpenTimeEdit,
  } = useToogle();
  const isAnyOpen = isOpenAdd || isOpenEdit || isOpenTimeEdit;

  function handleClose(e) {
    e.stopPropagation();
    closeAdd();
    closeEdit();
    closeTimeEdit();
  }

  return (
    <>
      {isAnyOpen && (
        <div
          onClick={handleClose}
          className="w-full h-screen top-0 left-0 right-0 bottom-0 fixed bg-[#313131cc]"
        >
          <div
            className="absolute top-[32%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#f1f1f1] px-[28px] pb-[14px] pt-[40px] rounded-[3px] max-w-[400px] min-w-[290px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-[8px] right-[8px] w-6 h-6"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
            {isOpenAdd && <AddForm />}
            {isOpenEdit && <EditForm />}
            {isOpenTimeEdit && <EditTimeForm />}
          </div>
        </div>
      )}
    </>
  );
}
