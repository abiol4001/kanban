import React from 'react'

// Icons import
import write from '../icons/arrow-square-up.svg'
import link from '../icons/link.svg'
import add from '../icons/add-fill.svg'
import options from '../icons/options.svg'
import menu from '../icons/menu.svg'
import filter from '../icons/filter.svg'
import calender from '../icons/calendar.svg'
import arrowDown from '../icons/arrow-down.svg'
import member from '../icons/profile-2user.svg'

// Images import
import user1 from "../images/user1.png"
import user2 from "../images/user2.png"
import user3 from "../images/user3.png"
import user4 from "../images/user4.png"


const Displaybar = () => {

    const users =[
        user1, user2, user3, user4
    ]
  return (
    <div className="md:px-[50px] py-[41px]">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
        <div className="flex gap-5 items-center">
          <h2 className="text-[32px] md:text-[42px] text-[#0D062D] font-[600]">Mobile App</h2>

          <div className="flex">
            <button>
              <img src={write} alt="" className="h-[25px] w-[25px]" />
            </button>
            <button>
              <img src={link} alt="" className="h-[25px] w-[25px]" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2 cursor-pointer">
            <button>
              <img src={add} alt="" />
            </button>
            <p className="text-[16px] font-[500] text-[#5030E5]">invite</p>
          </div>
          <div className="flex">
            {users.map((user, index) => (
              <div
                key={index}
                className={`h-[38px] w-[38px] ${
                  index > 0 ? "-ml-2" : ""
                } cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out`}
              >
                <img
                  src={user}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            <div className="flex justify-center items-center bg-[#F4D7DA] h-[38px] w-[38px] rounded-full text-[15px] font-[500] text-[#D25B68] border border-white -ml-2 cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
              +2
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap items-center justify-center lg:justify-between mt-[50px]">
        <div className="flex gap-2">
          <button className="border border-[#787486] h-[40px] w-[122px] rounded-[6px] flex items-center gap-2 px-4 hover:border-[#5030E5]">
            <img src={filter} alt="" />
            <span>Filter</span>
            <img src={arrowDown} alt="" />
          </button>
          <button className="border border-[#787486] h-[40px] w-[122px] rounded-[6px] flex items-center gap-2 px-4 hover:border-[#5030E5]">
            <img src={calender} alt="" />
            <span>Today</span>
            <img src={arrowDown} alt="" />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button className="border border-[#787486] h-[40px] w-[122px] rounded-[6px] flex items-center gap-2 px-4 hover:border-[#5030E5]">
            <img src={member} alt="" className="h-4 w-4" />
            <span>Share</span>
          </button>
          <div className="h-[28px] bg-[#787486] w-[1px]"></div>
          <button>
            <img src={options} alt="" className="h-10 w-10" />
          </button>
          <button className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
            <img src={menu} alt="" className="h-[21px] w-[21px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Displaybar