import React from "react";
import { DatePicker } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";

const CustomDatePicker = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full">
      <FaCalendarAlt className="text-gray-600 mr-2" />
      <DatePicker
        defaultValue={dayjs("2024-09-23")}
        format="DD MMM YYYY"
        suffixIcon={<DownOutlined className="text-gray-400" />}
        className="w-full border-none focus:ring-0"
        inputReadOnly
        bordered={false}
      />
    </div>
  );
};

export default CustomDatePicker;
