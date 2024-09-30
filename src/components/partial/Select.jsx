import React from "react";
import { Select } from "antd";
import { FaFilePdf } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";

const { Option } = Select;

const CustomDropdown = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
      <FaFilePdf className="text-[#d6b297] mr-2" />
      <Select
        defaultValue="PDF"
        suffixIcon={<DownOutlined className="text-gray-400" />}
        className="w-full border-none focus:ring-0"
        dropdownClassName="rounded-lg"
        bordered={false}
      >
        <Option value="PDF">PDF</Option>
        <Option value="DOC">DOC</Option>
        <Option value="TXT">TXT</Option>
      </Select>
    </div>
  );
};

export default CustomDropdown;
