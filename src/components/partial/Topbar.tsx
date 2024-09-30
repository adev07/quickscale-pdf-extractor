import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/icons/log.svg";
import logo2 from "../../assets/icons/logo.svg";

interface TopBarProps {
  fileName?: string;
}

function TopBar({ fileName }: TopBarProps) {
  const location = useLocation();

  const getHeading = () => {
    if (location.pathname === "/extract-pdf") {
      return "Extract PDF";
    } else if (location.pathname === "/pdf-details") {
      return "";
    }
    return "";
  };

  return (
    <div className="w-full bg-white flex items-center justify-between py-[20px] px-4">
      <div className="flex items-center justify-center gap-4">
        {/* Display logo on all pages */}
        <div>
          {(location.pathname === "/extract-pdf" || location.pathname === "/pdf-details") && (
            <img className="object-cover" src={logo} alt="Logo 1" />
          )}
          {/* Conditionally display logo2 only on "/" */}
          {location.pathname === "/" && (
            <img className="object-cover" src={logo2} alt="Logo 2" />
          )}
        </div>

        <div className="mt-2">
          <h3 className="text-[#111111] font-semibold text-[26px] sm:ml-0 ml-4">
            {getHeading()}
          </h3>
          {fileName && (
            <p className="text-[#111111] font-semibold text-[26px]">
              {fileName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
