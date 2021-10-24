const paritallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...props} {...partialProps} />;
  };
};

const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "larg" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
      }}
      {...props}
    >
      {text}
    </button>
  );
};

const DangerButton = paritallyApply(Button, { color: "red" });
const BigDangerButton = paritallyApply(Button, {
  color: "green",
  siz: "large",
});
