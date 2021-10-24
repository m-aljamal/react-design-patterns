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

<Button size="large" color="red" />;

// compostion is create deferent virsion of button

// danger and secess button

const DangerButton = (props) => {
  return <Button {...props} color="red" />;
};
const BigDangerButton = (props) => {
  return <Button {...props} color="red" size="large" />;
};


<DangerButton/>
<BigDangerButton/>