import { useToogle } from "../context/ToogleContext";
import { useWord } from "../context/WordContext";
import copyToClipboard from "../utils/copyToClipboard";
import { IconButton } from "./Button";
import { AddForm, EditForm, EditTimeForm, InputForm } from "./Form";

export default function Modal() {
  const {
    closeAdd,
    closeEdit,
    closeTimeEdit,
    isOpenAdd,
    isOpenEdit,
    isOpenTimeEdit,
    isOpenInput,
    closeInput,
    openAdd,
    openInput,
  } = useToogle();
  const { formatedStorage } = useWord();

  const isAnyOpen = isOpenAdd || isOpenEdit || isOpenTimeEdit || isOpenInput;

  function handleClose() {
    closeAdd();
    closeEdit();
    closeTimeEdit();
    closeInput();
  }

  function handleInput() {
    if (isOpenInput) {
      closeInput();
      openAdd();
    } else {
      closeAdd();
      openInput();
    }
  }

  function handleCopy() {
    copyToClipboard(formatedStorage);
  }

  return (
    <>
      {isAnyOpen && (
        <div
          onClick={handleClose}
          className="w-full h-screen top-0 left-0 right-0 bottom-0 fixed bg-[#313131cc]"
        >
          <div
            className="absolute top-[32%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#f1f1f1] px-[28px] pb-[14px] pt-[50px] rounded-[3px] max-w-[400px] min-w-[290px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-[8px] right-[8px] flex gap-[6px]">
              {(isOpenAdd || isOpenInput) && (
                <>
                  <IconButton icon="copy" size="small" onClick={handleCopy} />
                  <IconButton icon="input" size="small" onClick={handleInput} />
                </>
              )}
              <span
                className="block cursor-pointer w-7 h-7"
                onClick={handleClose}
              >
                <IconButton icon="close" size="small" color="danger" />
              </span>
            </div>
            {isOpenAdd && <AddForm />}
            {isOpenEdit && <EditForm />}
            {isOpenTimeEdit && <EditTimeForm />}
            {isOpenInput && <InputForm />}
          </div>
        </div>
      )}
    </>
  );
}
