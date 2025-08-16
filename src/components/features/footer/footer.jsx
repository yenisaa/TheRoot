import logo from "@/assets/images/Logo-main.png";
import bgFooter from "@/assets/images/footer-bg.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${bgFooter})`,
      }}
      className="w-full py-[52px] mt-auto h-[264px] bg-no-repeat bg-center bg-cover"
    >
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="size-20 p-[5px] inline-flex items-center justify-center bg-background border-4 border-[#FFFFFF0A] rounded-3xl">
            <img src={logo} alt="logo" className="h-[41px]" />
          </div>
        </div>

        <div className="mt-[60px] pb-[55px] sm:pb-0 flex flex-col sm:flex-row items-center justify-between text-lg font-eudoxus400 ">
          <p>Made by Africans, for Africans</p>
          <p>© 2025 The Roots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
