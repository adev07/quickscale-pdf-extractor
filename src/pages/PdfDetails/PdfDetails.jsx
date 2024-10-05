import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Logo from "../../assets/dashboard/phonelogo.png";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { Checkbox } from "antd";
import { pdfjs } from "react-pdf";
import { AiOutlineEdit } from "react-icons/ai";
import examplePDF from "../../assets/Strata_Downloads_EPC.pdf";

import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { highlightPlugin, Trigger } from "@react-pdf-viewer/highlight";
import "@react-pdf-viewer/highlight/lib/styles/index.css";

import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

// Import styles
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker.toString();

const PdfDetails = () => {
  const location = useLocation();
  const file = location.state?.file || null;
  const [pdfUrl, setPdfUrl] = useState(null);
  const [language, setLanguage] = useState("GB");
  const [focusedIndex, setFocusedIndex] = useState(null);

  const [highlightArea, setHighlightArea] = useState([]);

  const renderHighlights = (props) => (
    <div>
      {highlightArea
        .filter((area) => area.pageIndex === props.pageIndex)
        .map((area, idx) => (
          <div
            key={idx}
            className="highlight-area"
            style={Object.assign(
              {},
              {
                background: "yellow",
                opacity: 0.2,
                border: "1px solid red",
              },
              props.getCssProperties(area, props.rotation)
            )}
          />
        ))}
    </div>
  );

  const extractedData = [
    {
      section: "Asset Characteristics",
      items: [
        {
          label: "Certificate Reference Number",
          value: "0930-1933-0364-0080-1060",
          pageNumber: 1,
          // highlight: true,
          area: {
            pageIndex: 0,
            height: 2,
            width: 29,
            left: 66,
            top: 13.5,
          },
        },
        {
          label: "Building Address",
          value: "Strata House, 1 Bridge Street, STAINES UPON THAMES, TW18 4TP",
          pageNumber: 1,
          area: {
            pageIndex: 0,
            height: 8,
            width: 24,
            left: 6,
            top: 11.5,
          },
        },
        {
          label: "Main Heating Fuel",
          value: "Natural Gas",
          pageNumber: 1,
          area: {
            pageIndex: 0,
            height: 2,
            width: 11,
            left: 27,
            top: 77.5,
          },
        },
        {
          label: "Building Environment",
          value: "Air Conditioning",
          pageNumber: 1,
          area: {
            pageIndex: 0,
            height: 2,
            width: 15,
            left: 27,
            top: 79.5,
          },
        },
        {
          label: "Total Useful Floor Area",
          value: "9675 m2",
          pageNumber: 1,
          area: {
            pageIndex: 0,
            height: 2,
            width: 6,
            left: 37,
            top: 81.5,
          },
        },
        {
          label: "Building Complexity (NOS Level)",
          value: "5",
          pageNumber: 1,
          area: {
            pageIndex: 0,
            height: 2,
            width: 2,
            left: 37.5,
            top: 83.5,
          },
        },
        {
          label: "Building Emission Rate",
          value: "22.66 kgCO2/m2",
          pageNumber: 1,
          area: {
            pageIndex: 0,
            height: 2,
            width: 6,
            left: 37.5,
            top: 85.5,
          },
        },
        {
          label: "Assessment Software",
          value:
            "Virtual Environment v6.4.0 using calculation engine ApacheSim v6.4.0",
          pageNumber: 1,
          area: {
            pageIndex: 1,
            height: 2,
            width: 50,
            left: 34.5,
            top: 9,
          },
        },
        {
          label: "Property Reference",
          value: "166331800000",
          pageNumber: 1,
          area: {
            pageIndex: 1,
            height: 2,
            width: 11,
            left: 34.5,
            top: 11,
          },
        },
      ],
    },
    {
      section: "EPC Characteristics",
      items: [
        {
          label: "Assessor Number",
          value: "LCEA128019",
          pageNumber: 2,
          area: {
            pageIndex: 1,
            height: 2,
            width: 10,
            left: 34.5,
            top: 15,
          },
        },
        {
          label: "Accreditation Scheme",
          value: "CIBSE Certification Ltd",
          pageNumber: 2,
          area: {
            pageIndex: 1,
            height: 2,
            width: 17,
            left: 34.5,
            top: 17.5,
          },
        },
        {
          label: "Employer/Trading Name",
          value: "Miltons House Miltons Yard Godalming GU8 5LH",
          pageNumber: 2,
          area: {
            pageIndex: 1,
            height: 2,
            width: 35,
            left: 34.5,
            top: 19.5,
          },
        },
        {
          label: "Issue Date",
          value: "21 Jul 2014",
          pageNumber: 2,
          area: {
            pageIndex: 1,
            height: 2,
            width: 10,
            left: 34.5,
            top: 23.8,
          },
        },
        {
          label: "Valid Until",
          value: "20 Jul 2024",
          pageNumber: 2,
          area: {
            pageIndex: 1,
            height: 2,
            width: 8.5,
            left: 34.5,
            top: 26,
          },
        },
        {
          label: "Related Party Disclosure",
          value: "Not related to the owner",
          pageNumber: 2,
          area: {
            pageIndex: 1,
            height: 2,
            width: 18,
            left: 34.5,
            top: 28.3,
          },
        },
      ],
    },
  ];

  const [expandedSections, setExpandedSections] = useState(
    extractedData.map((item) => item.section)
  );

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  useEffect(() => {
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
    }
  }, [file]);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const languages = {
    US: "English",
    GB: "English",
    FR: "Français",
    DE: "Deutsch",
    IT: "Italiano",
    ES: "Español",
    CN: "中文",
    IN: "हिन्दी",
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const highlightPluginInstance = highlightPlugin({
    renderHighlights,
    trigger: Trigger.None,
  });

  const [page, setPage] = useState(1);

  const pageNavigationPluginInstance = pageNavigationPlugin();

  /// remove to remove pdf
  useEffect(() => {
    setPdfUrl(examplePDF);
  }, []);

  return (
    <div className="mt-4">
      <div className="grid min-h-screen grid-cols-6 gap-4 rounded-md bg-white p-4 shadow-md md:grid-cols-7 md:p-6">
        <div className="col-span-6 rounded-md xl:col-span-4">
          <div className="mb-4 flex flex-col items-start justify-between">
            <div className="mb-4 ml-4 flex items-center justify-start gap-4 sm:ml-0 md:mb-0">
              <FaArrowLeft className="text-[#70D2C2]" size={20} />
              <h2 className="text-xl font-semibold md:text-2xl">
                Editable Data
              </h2>
            </div>
            <div className="flex w-full flex-wrap gap-3">
              <div className="w-fit">
                <p className="mt-3 w-full rounded border border-gray-300 bg-[#eaeaea] px-4 py-[10px] sm:mt-2">
                  Energy Performance Certificate
                </p>
              </div>
              <div className="w-fit">
                <p className="mt-3 w-full rounded border border-gray-300 bg-[#eaeaea] px-4 py-[10px] sm:mt-2">
                  {languages[`${language}`]}
                </p>
              </div>
              <div className="w-fit">
                <button className="mt-3 flex w-full items-center gap-2 rounded-md bg-[#70D2C2] px-4 py-[10px] text-sm text-white transition sm:mt-2 md:text-base">
                  Ask AI
                  <img className="w-[18px]" src={Logo} alt="" />
                </button>
              </div>
              <div className="w-fit">
                <button className="mt-3 flex w-full items-center gap-2 rounded-md bg-[#70D2C2] px-4 py-[10px] text-sm text-white transition sm:mt-2 md:text-base">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="max-h-[calc(100vh)] w-full overflow-auto">
            <div className="w-full min-w-[40rem] rounded-md border">
              {extractedData.map((sectionData, sectionIndex) => (
                <div key={sectionIndex}>
                  <div
                    className="flex cursor-pointer items-center gap-4 border-l-4 border-[#70D2C2] bg-gray-200 px-4 py-3"
                    onClick={() => toggleSection(sectionData.section)}
                  >
                    <FaChevronDown />
                    <span className="font-semibold text-[#101828]">
                      {sectionData.section}
                    </span>
                  </div>
                  {expandedSections.includes(sectionData.section) && (
                    <div className="bg-white">
                      {sectionData.items.map((item, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-6 items-center gap-4 px-4 py-3 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <div className="col-span-2 flex items-center space-x-2">
                            <Checkbox
                              className="rounded-full"
                              onChange={onChange}
                            />
                            <span>{item.label}</span>
                          </div>
                          <div className="relative col-span-3 mt-0 flex w-full items-center">
                            <div className="relative sm:w-[220px]">
                              <AiOutlineEdit
                                className={`absolute left-2 top-1/2 -translate-y-1/2 transform ${
                                  focusedIndex === index
                                    ? "text-white"
                                    : "text-gray-500"
                                }`}
                              />
                              <input
                                className={`w-full rounded-md pl-10 text-start ${
                                  item.highlight
                                    ? "bg-orange-100"
                                    : "bg-transparent"
                                } py-2 focus:bg-[#fc8043] focus:text-white focus:outline-none`}
                                type="text"
                                defaultValue={item.value}
                                onFocus={() => {
                                  setFocusedIndex(index);
                                  if (item.area) {
                                    setHighlightArea([item.area]);
                                    pageNavigationPluginInstance.jumpToPage(
                                      item.area.pageIndex
                                    );
                                  }
                                }}
                                onBlur={() => setFocusedIndex(null)}
                              />
                            </div>
                          </div>
                          <div className="col-span-1 mt-0 text-right">
                            Page {item.pageNumber}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-6 rounded-md xl:col-span-3 xl:py-1">
          <div className="text-start">
            <h2 className="mb-2 ml-4 text-xl font-semibold sm:ml-0 md:text-2xl">
              Original PDF
            </h2>
            <div className="mt-[64px] w-full overflow-auto">
              <div
                className="aspect-[3/4] w-full rounded-md border shadow-sm"
                key={page}
              >
                {pdfUrl ? (
                  <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
                  >
                    <Viewer
                      fileUrl={pdfUrl}
                      defaultScale={0.75}
                      plugins={[
                        defaultLayoutPluginInstance,
                        highlightPluginInstance,
                        pageNavigationPluginInstance,
                      ]}
                    />
                  </Worker>
                ) : (
                  <p>Loading PDF...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfDetails;
