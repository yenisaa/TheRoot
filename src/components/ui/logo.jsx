import logoImg from "../../assets/images/Logo-main.png";

function Logo() {
  return (
    <img
      src={logoImg}
      alt="The Root Logo"
      className="border-2 border-primary/10 rounded-2xl p-2"
    />
  );
}

export default Logo;
