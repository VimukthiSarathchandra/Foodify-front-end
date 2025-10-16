import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Send } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white py-8 px-4 md:px-10 lg:px-30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto">
        <div className="flex flex-col items-start space-y-4 mb-6 md:mb-0">
          <div className="flex space-x-4">
            <Twitter className="w-6 h-6 text-[#59423C] hover:text-[#FE724C] cursor-pointer" />
            <Facebook className="w-6 h-6 text-[#59423C] hover:text-[#FE724C] cursor-pointer" />
            <Send className="w-6 h-6 text-[#59423C] hover:text-[#FE724C] cursor-pointer" />
            <Instagram className="w-6 h-6 text-[#59423C] hover:text-[#FE724C] cursor-pointer" />
          </div>

          <p className="text-sm mt-5 md:mt-10 text-[#59423C] ">
            © 2020 Foodify. All rights reserved
          </p>
        </div>

        <div className="flex space-x-20  md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-2">
            <h3 className=" font-bold text-lg text-[#59423C]">Foods</h3>
            <div className="flex flex-col space-y-1">
              <Link
                to="/pricing"
                className="text-[#59423C] hover:text-[#FE724C] text-sm"
              >
                Pricing
              </Link>
              <Link
                to="/foods"
                className="text-[#59423C] hover:text-[#FE724C] text-sm"
              >
                Menus
              </Link>
            </div>
            <Link
              to="/privacy"
              className="text-[#59423C] hover:text-[#FE724C] text-sm mt-4"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className=" font-bold text-lg text-[#59423C]">Help</h3>
            <div className="flex flex-col space-y-1">
              <Link
                to="/about"
                className="text-[#59423C] hover:text-[#FE724C] text-sm"
              >
                About
              </Link>
            </div>
            <Link
              to="/terms"
              className="text-[#59423C] hover:text-[#FE724C]  text-sm mt-10 "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
