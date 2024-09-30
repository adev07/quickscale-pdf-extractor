import React from "react";
import back from "../../assets/icons/back.svg";
import Table from "../../components/Table/Table";
import CustomDatePicker from "../../components/partial/DatePicker";
import CustomDropdown from "../../components/partial/Select";

function FileHistory() {
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
      title: "Summery & Preview",
      dataIndex: "summary",
      key: "summary",
    },
  ];

  const dataSource = [
    {
      key: "1",
      doc_name: "Document 1",
      invoice: "123456",
      doc_type: "PDF",
      language: "English",
      date: "12/12/2021",
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
