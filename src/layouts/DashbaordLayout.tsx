import { Menu } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "../components/partial/Topbar";
import { ICONS } from "../assets/icons";
import { IMAGES } from "../assets/images";
import type { MenuProps } from "antd";
import { ROUTES } from "../router/RouteConfig";
import phoneLogo from "../assets/icons/sidebarlogo.svg";
import upload from "../assets/icons/menuItem1.svg";
import files from "../assets/icons/files.svg";
import ChatPopup from "../components/ChatPopup/ChatPopup";

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
      icon: <img className="w-[28px] object-cover" src={upload} alt="" />,
      label: ROUTES.PDF_EXTRACTOR.label,
      path: ROUTES.PDF_EXTRACTOR.path,
    },
    {
      key: ROUTES.FILE_HISTORY.key,
      icon: <img className="w-[28px] object-cover" src={files} alt="" />,
      label: ROUTES.FILE_HISTORY.label,
      path: ROUTES.FILE_HISTORY.path,
    }
  ];

  const onClickMenuItem = (e: any) => {
    setSelectedKey(e.key);
    navigate(e.path);
  };

  const showChatPopup = location.pathname === "/pdf-details";

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
            className={`flex h-[60px] justify-center mt-2 items-center gap-3 mb-5 cursor-pointer  ${collapsed ? "" : ""}`}
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
        <div>
          <div>
            {showChatPopup && <ChatPopup />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
