
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export const SocialIcon = () => {
  return (
    <div className="flex gap-3 mt-6">
      <span className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md">
        <FaLinkedin />
      </span>
      <span className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md">
        <FaFacebookF />
      </span>
      <span className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md">
        <FaInstagram />
      </span>
      <span className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md">
        <FaTwitter />
      </span>
    </div>
  );
}
