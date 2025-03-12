function PrimaryButton({ children, ...props }) {
  return (
    <button
      className="btn-main text-[#2c2c2c] border-[#2c2c2c] hover:bg-zinc-300 hover:border-zinc-300"
      {...props}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, ...props }) {
  return (
    <button
      className="btn-main text-[#2c2c2c] border-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white"
      {...props}
    >
      {children}
    </button>
  );
}

export { PrimaryButton, SecondaryButton };
