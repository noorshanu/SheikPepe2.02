import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" py-1 bg-[]  ">
      <div className="container-wrapper relative">
        <div className=" flex items-center justify-between gap-2">
        <div className=" flex items-center">
        <img src="/images/logo.png" className="max-w-[5rem] w-full " alt="" />
        <p className=" text-2xl font-groot-two mt-2 text-white">SheikPepee</p>
        </div>

       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
