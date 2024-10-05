import React from "react";
import back from "../../assets/icons/back.svg";
import Table from "../../components/Table/Table";
import CustomDatePicker from "../../components/partial/DatePicker";
import CustomDropdown from "../../components/partial/Select";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function FileHistory() {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/pdf-details");
  };

  const handleDownloadClick = () => {
    // Logic to download the file
  };

  const columns = [
    {
      title: "Document name",
      dataIndex: "doc_name",
      key: "doc_name",
    },
    {
      title: "Document Type",
      dataIndex: "doc_type",
      key: "doc_type",
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Date of extraction",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Summary & Preview",
      dataIndex: "summary",
      key: "summary",
      render: () => (
        <div className="flex gap-4">
          <button
            onClick={handleViewClick}
            className="flex items-center gap-1 text-[#73BDBD] border border-[#70D2C2] px-2 rounded"
          >
            <FaEye size={18} /> View
          </button>
          <button
            onClick={handleDownloadClick}
            className="bg-[#70D2C2] p-2 rounded text-white"
          >
            <FiDownload size={20} />
          </button>
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "2",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "3",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "4",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "5",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "6",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "7",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "8",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "9",
      doc_name: "2015 - 2016 Financial details.pdf",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
  ];

  return (
    <div className="bg-[#fff] min-h-screen rounded-[12px] shadow p-[30px]">
      <div className="flex items-center justify-end ">
        <div className="flex gap-4">
          <CustomDropdown />
          <CustomDatePicker />
        </div>
      </div>
      <div className="mt-5">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

export default FileHistory;
