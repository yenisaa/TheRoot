import { useNavigate } from "react-router-dom";
import back from "../../assets/icons/back-arrow.svg";

function OnboardingNav() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center">
      <button
        onClick={() => navigate(-1)}
        className="w-9 h-9 py-3 rounded-[11px] my-2 bg-card text-secondary text-xl flex flex-col items-center justify-center cursor-pointer"
      >
        <img src={back} alt="Back icon" />
      </button>
    </div>
  );
}

export default OnboardingNav;
