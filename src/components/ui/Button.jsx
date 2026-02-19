const Button = ({ onClick, children, className, color }) => {
  return (
    <button
      style={{ background: color }}
      onClick={onClick}
      className={`bg-neutral-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
