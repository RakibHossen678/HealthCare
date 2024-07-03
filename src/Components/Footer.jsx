import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import logo from "../assets/logolight.png";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#020043] text-[#FFFFF5] flex justify-between py-24 px-44 items-center">
      <div>
        <img className="w-20 lg:w-28" src={logo} alt="" />
        <p className="text-[#FFFFF5] text-sm py-7">
          123 Main Street Anytown, USA <br /> Postal Code: 12345
        </p>
        <p>
          Support: support@oyolloo.com <br />
          (Available : 10:00am to 07:00pm)
        </p>
      </div>
      <div>
        <ul className="space-y-4">
          <li>Home</li>
          <li>About us</li>
          <li>Success Page</li>
          <li>Terms and condition</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-4">
          <li>Services</li>
          <li>Scheduling</li>
          <li>Contact Us</li>
          <li>Patient Portal</li>
        </ul>
      </div>
      <div className="text-sm">
        <p>Follow Us</p>
        <div className="flex space-x-6 pt-2">
          <span>
            <FaFacebook size={25}/>
          </span>
          <span>
            <IoLogoInstagram size={25}/>
          </span>
          <span>
            <FaLinkedin size={25}/>
          </span>
          <span>
            <FaYoutube size={25}/>
          </span>
        </div>
        <p className="pt-8">@docplus 2024</p>
      </div>
    </div>
  );
};

export default Footer;
