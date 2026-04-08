type ButtonProps = {
  children: React.ReactNode;
  color: string;
  fontColor?: string;
  className?: string;
};

const Button = ({
  children,
  color = "#CBCBCB",
  fontColor = "#fff",
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`h-11.5 cursor-pointer text-base font-medium max-w-83.75 w-full rounded-md ${className}`}
      style={{ backgroundColor: color, color: fontColor }}
    >
      {children}
    </button>
  );
};

export default Button;
