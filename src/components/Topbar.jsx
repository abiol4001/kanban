/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

// Icons import
import searchIcon from "../icons/search-normal.svg"
import calender from "../icons/calendar-2.svg"
import message from "../icons/message-question.svg"
import notification from "../icons/notification.svg"
import arrowDown from "../icons/arrow-down.svg"

// Image import
import profilePic from "../images/profilepic.png"


const Topbar = () => {
  const [search, setSearch] = useState("")
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row h-[110px] lg:h-[88px] max-w-[1000] items-center justify-center px-[20px] md:px-[50px] ">
        <div className="relative w-full">
          <img
            src={searchIcon}
            alt="search-icon"
            className={`${
              search.length > 0 ? "hidden" : "visible"
            } absolute w-[18px] h-[18px] md:w-[22px] md:h-[22px] translate-y-2 md:translate-y-2.5 translate-x-3`}
          />
          <input
            type="text"
            className="bg-[#F5F5F5] text-[12px] md:text-[14px] placeholder:text-[#787486] placeholder:pl-10 h-9 md:h-11 w-[100%] md:w-[417px] pl-3.5 outline-none rounded-[6px]"
            placeholder="Search for anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-10  w-full justify-end md:justify-between lg:justify-end">
          <div className="flex gap-3 md:gap-6 items-center">
            <img
              src={calender}
              alt=""
              className="h-[24px] w-[24px] cursor-pointer hover:scale-[1.1] transition-all duration-200 ease-in-out"
            />
            <img
              src={message}
              alt=""
              className="h-[24px] w-[24px] cursor-pointer hover:scale-[1.1] transition-all duration-200 ease-in-out"
            />
            <img
              src={notification}
              alt=""
              className="h-[24px] w-[24px] cursor-pointer hover:scale-[1.1] transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="flex gap-5">
            <div className="text-end invisible md:visible">
              <p className="text-[12px] md:text-[16px] font-[400] text-[#0D062D]">
                Anima Agrawal
              </p>
              <p className=" md:text-[14px] font-[400] text-[#787486]">
                U.P, India
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="rounded-full h-[38px] w-[38px] overflow-hidden">
                <img
                  src={profilePic}
                  alt="profile-picture"
                  className="h-full w-full object-contain"
                />
              </div>
              <button>
                <img
                  src={arrowDown}
                  alt="arrow-icon"
                  className="h-[18px] w-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#DBDBDB]"></div>
    </div>
  );
}

export default Topbar