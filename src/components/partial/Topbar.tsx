import React from "react";
import { useLocation } from "react-router-dom";

interface TopBarProps {
  fileName?: string;
}

function TopBar({ fileName }: TopBarProps) {
  const location = useLocation();

  const getHeading = () => {
    if (location.pathname === "/") {
      return "Extract PDF";
    } else if (location.pathname === "/pdf-details") {
      return "";
    }
    return "";
  };


  return (
    <div className="w-full bg-white flex items-center justify-between py-3 px-4">
      <div className="flex items-center">
        <div className="mb-2">
          <h3 className="text-[#111111] font-semibold text-[26px] sm:ml-0 ml-4">{getHeading()}</h3>
          {fileName && (
            <p className="text-[#111111] font-semibold text-[26px]">{fileName}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
