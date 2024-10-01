import React from "react";
import back from "../../assets/icons/back.svg";
import Table from "../../components/Table/Table";
import CustomDatePicker from "../../components/partial/DatePicker";
import CustomDropdown from "../../components/partial/Select";
import { useNavigate } from "react-router-dom";

function FileHistory() {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/extract-pdf");
  };

  const columns = [
    {
      title: "Document name",
      dataIndex: "doc_name",
      key: "doc_name",
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
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
      render: () => <button onClick={handleViewClick}>View</button>,
    },
  ];

  const dataSource = [
    {
      key: "1",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "2",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "3",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "4",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "5",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "6",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "7",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "8",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
    {
      key: "9",
      doc_name: "2015 - 2016 Financial details.pdf",
      invoice: "$44.00",
      doc_type: "PDF",
      language: "English",
      date: "23 Sep 2024",
      status: "Completed",
      summary: "View",
    },
  ];

  return (
    <div className="bg-[#fff] min-h-screen rounded-[12px] shadow p-[30px]">
      <div className="flex items-center justify-between ">
        <div className="flex gap-5 items-center">
          <img src={back} alt="" />
          <h1 className="text-[#151515] text-[26px] leading-[36px] font-semibold">
            Previous File
          </h1>
        </div>
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
