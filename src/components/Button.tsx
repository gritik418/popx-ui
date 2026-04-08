type ButtonProps = {
  children: React.ReactNode;
  color: string;
  fontColor?: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  color = "#CBCBCB",
  fontColor = "#fff",
  className = "",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-11.5 cursor-pointer text-base font-medium max-w-83.75 w-full rounded-md ${className}`}
      style={{ backgroundColor: color, color: fontColor }}
    >
      {children}
    </button>
  );
};

export default Button;
