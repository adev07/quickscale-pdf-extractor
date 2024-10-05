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
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-[36px] pt-4 md:pt-[34px] items-center justify-center gap-[20px] md:gap-[32px]">
        <div className="col-span-1">
          <h1 className="heading font-semibold text-[26px] md:text-[38px] leading-[40px] md:leading-[64px] text-[#151515]">
            EXTRACT DATA FROM YOUR PDF IN SECONDS
          </h1>
          <p className="text-[#585858] leading-[24px] md:leading-[30px] text-[14px] md:text-[16px] font-normal mt-[16px] md:mt-[20px]">
            Simplify document processing with automated data extraction. Save
            time and improve accuracy with just a few clicks.
          </p>
          <button
            onClick={() => navigate("/extract-pdf")}
            className="bg-[#70D2C2] w-full md:w-auto hover:bg-[#5FB8AE] text-white text-xs md:text-sm mt-[20px] md:mt-[30px] font-medium px-[16px] md:px-[18px] py-[10px] md:py-[12px] rounded-[8px] md:rounded-[10px] transition-all duration-300 ease-in-out"
          >
            Start Extracting Now
          </button>
        </div>
        <div className="col-span-1">
          <img className="object-cover w-full" src={Hero} alt="" />
        </div>
      </div>

      <div className="mt-[50px] md:mt-[142px] text-center">
        <h1 className="heading text-[28px] md:text-[44px] text-[#151515] leading-[40px] md:leading-[54px] font-semibold">
          How it works
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-[40px] md:gap-[58px] mt-[40px] md:mt-[60px] px-[20px] md:px-[36px]">
          <div className="flex flex-col items-center md:items-start">
            <img className="w-[56px] object-cover" src={upload} alt="" />
            <div className="text-center md:text-start mt-[24px]">
              <h3 className="text-[#151515] text-[20px] md:text-[24px] font-semibold heading">
                Upload your document.
              </h3>
              <p className="text-[#585858] text-[14px] md:text-[16px] font-normal mt-[10px]">
                Simplify document processing with automated data extraction.
                Save time and improve accuracy with just a few clicks.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img className="w-[56px] object-cover" src={data} alt="" />
            <div className="text-center md:text-start mt-[24px]">
              <h3 className="text-[#151515] text-[20px] md:text-[24px] font-semibold heading">
                Get instant data extraction.
              </h3>
              <p className="text-[#585858] text-[14px] md:text-[16px] font-normal mt-[10px]">
                Simplify document processing with automated data extraction.
                Save time and improve accuracy with just a few clicks.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img className="w-[56px] object-cover" src={download} alt="" />
            <div className="text-center md:text-start mt-[24px]">
              <h3 className="text-[#151515] text-[20px] md:text-[24px] font-semibold heading">
                Download and review results.
              </h3>
              <p className="text-[#585858] text-[14px] md:text-[16px] font-normal mt-[10px]">
                Simplify document processing with automated data extraction.
                Save time and improve accuracy with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] md:mt-[142px]">
        <h1 className="heading text-[32px] md:text-[44px] text-[#151515] leading-[40px] md:leading-[54px] font-semibold text-center">
          Pre-defined Document Support
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[40px] mt-[40px] md:mt-[60px] px-[20px]">
          <img
            className="w-[80px] md:w-[140px] object-cover"
            src={pdf}
            alt="PDF"
          />
          <img
            className="w-[80px] md:w-[140px] object-cover"
            src={jpg}
            alt="JPG"
          />
          <img
            className="w-[80px] md:w-[140px] object-cover"
            src={doc}
            alt="DOC"
          />
          <img
            className="w-[80px] md:w-[140px] object-cover"
            src={png}
            alt="PNG"
          />
          <img
            className="w-[80px] md:w-[140px] object-cover"
            src={powerpoint}
            alt="PowerPoint"
          />
          <img
            className="w-[80px] md:w-[140px] object-cover"
            src={xml}
            alt="XML"
          />
        </div>
      </div>
      <div className="my-[50px] md:my-[142px] grid grid-cols-1 md:grid-cols-2 items-center justify-center px-[20px] md:px-[36px] gap-[20px] md:gap-[32px]">
        <div className="mb-[20px] md:mb-0">
          <img
            src={last}
            alt="Scalable Needs"
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-1">
          <h1 className="heading font-semibold text-[28px] md:text-[44px] leading-[34px] md:leading-[54px] text-[#151515]">
            Scalable to Your Needs
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#566075] font-semibold leading-[26px] md:leading-[30px] mt-[16px] md:mt-[20px]">
            Our AI-driven extraction pipeline is fully customizable and extends
            to support any document type.
          </p>
          <p className="text-[14px] md:text-[16px] text-[#585858] leading-[24px] md:leading-[30px] font-normal mt-[10px]">
            Your business documents are as unique as your business. Our AI
            pipeline is built to grow with your needs, extending support for new
            document types as they arise. Whether it’s a standard form or a
            unique format, we’ve got the tools to help.
          </p>
          <button
            onClick={() => navigate("/extract-pdf")}
            className="bg-[#70D2C2] hover:bg-[#5FB8AE] text-white text-sm mt-[20px] md:mt-[30px] font-medium px-[14px] md:px-[18px] py-[10px] md:py-[12px] rounded-[10px] transition-all duration-300 ease-in-out"
          >
            Start Extracting Now
          </button>
        </div>
      </div>

      <div className="relative px-[10px] md:px-[36px] mb-[40px] md:mb-[60px]">
        <div>
          <img
            className="object-cover md:w-full w-[240px] md:rounded-none rounded-[18px] h-[250px] md:h-auto"
            src={bg}
            alt="Background"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center absolute inset-0 px-[20px] md:px-[72px] py-[30px]">
          <div className="flex items-start space-x-2 md:space-x-4 mb-[20px] md:mb-0">
            <img className="w-[40px] md:w-auto" src={wave} alt="Wave" />
            <h3 className="text-[24px] md:text-[44px] leading-[30px] md:leading-[54px] font-semibold text-black heading">
              Start extracting your <br className="hidden md:block" /> documents
              now!
            </h3>
          </div>
          <div>
            <button
              onClick={() => navigate("/extract-pdf")}
              className="bg-[#FC8043] text-white px-4 py-2 rounded-[10px] text-sm md:text-base"
            >
              Try Doc Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
