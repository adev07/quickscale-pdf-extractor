import { Menu } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "../components/partial/Topbar";
import { ICONS } from "../assets/icons";
import { IMAGES } from "../assets/images";
import type { MenuProps } from "antd";
import { ROUTES } from "../router/RouteConfig";
import phoneLogo from "../assets/dashboard/phonelogo.png";
import { GoFileDirectoryFill } from "react-icons/go";
import { AiOutlineFileSearch } from "react-icons/ai";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = (props: Props) => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(true);
  const [authState, setAuthState] = useState(true);

  const location = useLocation();
  const fileName = location.state?.fileName || "";
  const navigate = useNavigate();

  const items = [
    {
      key: ROUTES.PDF_EXTRACTOR.key,
      icon: <GoFileDirectoryFill className="text-[#73BDBD] text-[28px]" />,
      label: ROUTES.PDF_EXTRACTOR.label,
      path: ROUTES.PDF_EXTRACTOR.path,
    },
    {
      key: ROUTES.PDF_DETAILS.key,
      icon: <AiOutlineFileSearch className="text-[#73BDBD] text-[28px]" />,
      label: ROUTES.PDF_DETAILS.label,
      path: ROUTES.PDF_DETAILS.path,
    }
  ];

  const onClickMenuItem = (e: any) => {
    setSelectedKey(e.key);
    navigate(e.path);
  };

  return (
    <div>
      <div className="flex">
        <Menu
          onClick={onClickMenuItem}
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{
            width: !collapsed ? "260px" : "82px",
            minWidth: !collapsed ? "260px" : "82px",
            backgroundColor: "#000031",
            minHeight: "100vh",
            border: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
          selectedKeys={[selectedKey]}
          inlineCollapsed={collapsed}
        >
          <div
            onClick={() => navigate("/")}
            className={`flex h-[60px] justify-start mt-2 items-center gap-3 mb-5 cursor-pointer  ${collapsed ? "pl-[14px]" : "pl-[20px]"}`}
          >
            {collapsed ? (
              <img src={phoneLogo} className=" w-[38px]" />
            ) : (
              <img src={IMAGES.FULL_LOGO} className="w-[200px]" />
            )}
          </div>

          {items.map((item) => (
            <div
              key={item.key}
              onClick={() => navigate(item.path)}
              className={`m-3 flex py-3 cursor-pointer rounded-[12px] justify-center items-center ${location.pathname === item.path ? "bg-[#FFFFFF1A] border-2 border-white border-opacity-30 rounded-[12px]" : "bg-[#FFFFFF1A]"}`}
            >
              <div className="flex gap-2">
                {item.icon}
                {!collapsed && <div className="text-sm truncate">{item.label}</div>}
              </div>
            </div>
          ))}
        </Menu>
        <div className={`grow bg-[#F8F4F1] relative`}>
          <div>
            <Topbar fileName={fileName} />
          </div>
          <div className="p-6">
            {authState && props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
