import React from "react";
import Hero from "../../assets/dashboard/home.png";
import upload from "../../assets/icons/upload.svg";
import data from "../../assets/icons/data.svg";
import download from "../../assets/icons/download.svg";
import pdf from "../../assets/icons/pdf.svg";
import jpg from "../../assets/icons/jpg.svg";
import png from "../../assets/icons/png.svg";
import doc from "../../assets/icons/doc.svg";
import powerpoint from "../../assets/icons/powerpoint.svg";
import xml from "../../assets/icons/xml.svg";
import last from "../../assets/icons/last.svg";
import bg from "../../assets/icons/BG.svg";
import wave from "../../assets/icons/wave.png";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 px-[36px] pt-[34px] items-center justify-center gap-[32px]">
        <div className="col-span-1">
          <h1 className="heading font-semibold text-[50px] leading-[64px] text-[#151515]">
            Extract Structured Data from PDFs in Seconds with Doc Assistant
          </h1>
          <p className="text-[#585858] leading-[30px] text-[16px] font-normal mt-[20px]">
            Simplify document processing with automated data extraction. Save
            time and improve accuracy with just a few clicks.
          </p>
          <button className="bg-[#70D2C2] hover:bg-[#5FB8AE] text-[#fff] text-sm mt-[30px] font-medium px-[18px] py-[12px] rounded-[10px] transition-all duration-300 ease-in-out">
            Start Extracting Now
          </button>
        </div>
        <div className="col-span-1">
          <img className="object-cover w-full" src={Hero} alt="" />
        </div>
      </div>
      <div className="mt-[142px] text-center">
        <h1 className="heading text-[44px] text-[#151515] leading-[54px] font-semibold">
          How it works
        </h1>
        <div className="flex justify-center gap-[58px] mt-[60px] px-[36px]">
          <div>
            <img className="w-[56px] object-cover" src={upload} alt="" />
            <div className="text-start mt-[24px]">
              <h3 className="text-[#151515] text-[24px] leading-[40px] font-semibold heading">
                Upload your document.
              </h3>
              <p className="text-[#585858] font-normal mt-[10px]">
                Simplify document processing with automated data extraction.
                Save time and improve accuracy with just a few clicks.
              </p>
            </div>
          </div>
          <div>
            <img className="w-[56px] object-cover" src={data} alt="" />
            <div className="text-start mt-[24px]">
              <h3 className="text-[#151515] text-[24px] leading-[40px] font-semibold heading">
                Get instant data extraction.
              </h3>
              <p className="text-[#585858] font-normal mt-[10px]">
                Simplify document processing with automated data extraction.
                Save time and improve accuracy with just a few clicks.
              </p>
            </div>
          </div>
          <div>
            <img className="w-[56px] object-cover" src={download} alt="" />
            <div className="text-start mt-[24px]">
              <h3 className="text-[#151515] text-[24px] leading-[40px] font-semibold heading">
                Download and review results.
              </h3>
              <p className="text-[#585858] font-normal mt-[10px]">
                Simplify document processing with automated data extraction.
                Save time and improve accuracy with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[142px]">
        <h1 className="heading text-[44px] text-[#151515] leading-[54px] font-semibold text-center">
          Pre-defined Document Support
        </h1>
        <div className="flex gap-[40px] justify-center items-center mt-[60px]">
          <img className="w-[140px] object-cover" src={pdf} alt="" />
          <img className="w-[140px] object-cover" src={jpg} alt="" />
          <img className="w-[140px] object-cover" src={doc} alt="" />
          <img className="w-[140px] object-cover" src={png} alt="" />
          <img className="w-[140px] object-cover" src={powerpoint} alt="" />
          <img className="w-[140px] object-cover" src={xml} alt="" />
        </div>
      </div>
      <div className="my-[142px] grid grid-cols-2 items-center justify-center px-[36px] gap-[32px]">
        <div>
          <img src={last} alt="" />
        </div>
        <div className="col-span-1">
          <h1 className="heading font-semibold text-[44px] leading-[54px] text-[#151515]">
            Scalable to Your Needs
          </h1>
          <p className="text-[18px] text-[#566075] font-semibold leading-[30px] mt-[20px]">
            Our AI-driven extraction pipeline is fully customizable and extends
            to support any document type.
          </p>
          <p className="text-[#585858] leading-[30px] text-[16px] font-normal">
            Your business documents are as unique as your business. Our AI
            pipeline is built to grow with your needs, extending support for new
            document types as they arise. Whether it’s a standard form or a
            unique format, we’ve got the tools to help.
          </p>
          <button className="bg-[#70D2C2] hover:bg-[#5FB8AE] text-[#fff] text-sm mt-[30px] font-medium px-[18px] py-[12px] rounded-[10px] transition-all duration-300 ease-in-out">
            Start Extracting Now
          </button>
        </div>
      </div>
      <div className="relative px-[36px] mb-[60px]">
        <div>
          <img className="object-cover w-full" src={bg} alt="" />
        </div>
        <div className="flex justify-between items-center absolute inset-0 px-[72px]">
          <div className="flex items-start space-x-4">
            <img src={wave} alt="" />
            <h3 className="text-[44px] leading-[54px] font-semibold text-black heading">
              Start extract your <br /> documents now!
            </h3>
          </div>
          <div>
            <button className="bg-[#FC8043] text-white px-4 py-2 rounded-[10px]">
              Try Doc Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
