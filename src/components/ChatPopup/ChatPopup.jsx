import React, { useState, useEffect, useRef } from "react";
import {
  FaUser,
  FaInfoCircle,
  FaExpandAlt,
  FaCompressAlt,
} from "react-icons/fa";
import { MdClose, MdSend } from "react-icons/md";
import logo from "../../assets/dashboard/phonelogo.png";
import HoverTable from "../HoverTable/HoverTable";
import ReactMarkdown from "react-markdown";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Ask me anything...",
      info: "",
      showTable: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [typingMessage, setTypingMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      simulateBotResponse(updatedMessages);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent creating a new line on Enter
      handleSend(); // Call the function to send the message
    } else if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault(); // Prevent default behavior of Shift+Enter
      setInput((prevInput) => prevInput + "\n"); // Add new line manually
    }
  };

  const simulateBotResponse = (currentMessages) => {
    const botMessage =
      "Sure! The total revenue extracted from the document is xxxyxx. You can find it in the xyz field in the extracted data panel. Would you like to make any changes?";
    setTypingMessage("");
    let index = -1;

    const interval = setInterval(() => {
      if (index < botMessage.length - 1) {
        index++;
        setTypingMessage((prev) => prev + botMessage[index]);
      } else {
        clearInterval(interval);
        setTypingMessage("");
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: botMessage,
            info: botMessage,
            showTable: false,
          },
        ]);
      }
    }, 50);
  };

  const toggleTableVisibility = (index) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, idx) =>
        idx === index ? { ...msg, showTable: !msg.showTable } : msg
      )
    );
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typingMessage]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div
          className={`${
            isExpanded
              ? "h-[96vh] lg:w-[85.7rem]"
              : "h-[96vh] md:w-[28rem] lg:w-[26rem]"
          } w-96 overflow-hidden rounded-[20px] bg-white text-[#202a4f] shadow-lg md:w-[28rem] lg:w-[26rem] py-2`}
        >
          <div className="flex justify-between border-b border-[#E2E9EF] p-4">
            <h2 className="gap flex items-center text-lg font-bold">
              Doc Assistant
            </h2>
            <div className="flex items-center space-x-2">
              {/* Expand/Compress button */}
              <button
                onClick={toggleExpand}
                className="flex items-center justify-center p-2 rounded-full bg-[#E0E6E5]"
              >
                {isExpanded ? (
                  <FaCompressAlt size={18} className="text-white" />
                ) : (
                  <FaExpandAlt size={18} className="text-white" />
                )}
              </button>

              <button
                className="flex items-center justify-center rounded-full bg-[#E0E6E5] p-2"
                onClick={togglePopup}
              >
                <MdClose className="font-bold text-white" size={18} />
              </button>
            </div>
          </div>
          <div className="custom-scrollbar h-[calc(100%-8.5rem)] overflow-y-auto bg-white p-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="mr-2 flex h-8 min-w-8 items-center justify-center rounded-full bg-[#70D2C2]">
                    <img
                      src={logo}
                      className="h-[18px] max-h-full max-w-full"
                      alt=""
                    />
                  </div>
                )}
                <span
                  className={`inline-block ${
                    isExpanded ? "max-w-[520px]" : "max-w-[340px]"
                  } rounded-xl px-2 py-1 ${
                    msg.sender === "user"
                      ? "bg-[#70D2C2] text-white"
                      : "text-black bg-gray-200"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </span>
                {msg.sender === "bot" &&
                  msg.info ===
                    "Sure! The total revenue extracted from the document is **xxxyxx**. You can find it in the **xyz** field in the extracted data panel. Would you like to make any changes?" && (
                    <div className="relative ml-2 mt-[65px] flex h-[30px] min-w-[30px] cursor-pointer items-center justify-center rounded-full border border-[#A7C9C9]">
                      <FaInfoCircle
                        className="text-[#A7C9C9]"
                        size={16}
                        onClick={toggleTooltip}
                      />
                    </div>
                  )}
                {msg.sender === "user" && (
                  <div className="ml-2 flex h-8 min-w-8 items-center justify-center rounded-full bg-[#70D2C2]">
                    <FaUser className="text-white" size={16} />
                  </div>
                )}
              </div>
            ))}
            {showTooltip && (
              <div
                className={`absolute top-[50%] z-[100] mt-[60px] w-[330px] -translate-y-1/2 transform rounded-lg bg-white p-2 text-sm shadow-lg ${
                  isExpanded ? "right-[30%]" : "right-[100%]"
                }`}
              >
                <p>
                  <HoverTable />
                </p>
              </div>
            )}
            {typingMessage && (
              <div className="mb-2 flex justify-start text-left">
                <div className="mr-2 flex h-8 min-w-8 items-center justify-center rounded-full bg-[#70D2C2]">
                  <img src={logo} className="w-[18px]" alt="" />
                </div>
                <span
                  className={`text-black inline-block ${
                    isExpanded ? "max-w-[520px]" : "max-w-[340px]"
                  } rounded-xl bg-gray-200 px-2 py-1`}
                >
                  <ReactMarkdown>{typingMessage}</ReactMarkdown>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t border-[#E2E9E5] p-4">
            <div className="relative flex items-center">
              <textarea
                className="text-black h-12 w-full rounded-full bg-[#E0E6E5] px-4 py-2 pr-12 placeholder-gray-500 focus:outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                className="absolute right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#70D2C2]"
                onClick={handleSend}
              >
                <MdSend className="text-white" size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="absolute z-[-10] mt-[60px] flex">
        <div className="fixed bottom-[25px] right-[90px] z-50 rounded border bg-white px-[10px] py-[4px] font-medium shadow">
          Need Help 👋
        </div>
        <button
          className="fixed bottom-4 right-4 z-50 rounded-full bg-[#70D2C2] p-4 text-white shadow-lg focus:outline-none"
          onClick={togglePopup}
        >
          {isOpen ? (
            <MdClose size={24} />
          ) : (
            <img src={logo} className="w-[24px]" alt="" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
