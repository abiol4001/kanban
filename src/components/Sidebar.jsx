import React, { useState } from "react";

// Icons import
import logo from "../logo.svg";
import minimize from "../icons/minimize.svg";
import message from "../icons/message.svg";
import home from "../icons/category.svg";
import task from "../icons/task-square.svg";
import settings from "../icons/setting.svg";
import member from "../icons/profile-2user.svg";
import addProject from "../icons/add-square.svg";
import lamp from "../icons/lamp-on.svg";
import MiniMenu from "./MiniMenu";

const Sidebar = () => {
  const [minimizeMenu, setMinimizeMenu] = useState(false)
  const [activeIcon, setActiveIcon] = useState("Mobile App");

  const menuItems = [
    {
      name: "Home",
      icon: home,
    },
    {
      name: "Messages",
      icon: message,
    },
    {
      name: "Tasks",
      icon: task,
    },
    {
      name: "Members",
      icon: member,
    },
    {
      name: "Settings",
      icon: settings,
    },
  ];

  const projects = [
    { name: "Mobile App", color: "#7AC555" },
    { name: "Website Redesign", color: "#FFA500" },
    { name: "Design System", color: "#E4CCFD" },
    { name: "Wireframes", color: "#76A5EA" },
  ];

  return (
    <div className="transition-all duration-200 ease-in-out">
      {minimizeMenu ? (
        <MiniMenu setMinimizeMenu={setMinimizeMenu} />
      ) : (
        <div className="w-[145px] md:w-[250px] border-r-2 border-{#DBDBDB] flex-shrink-0">
          <div className="flex justify-between py-[32px] px-2 md:px-6 w-full h-[88px] items-center">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="logo" className="h-6 w-6" />
              <h3 className="text-[14px] md:text-[18px] font-[600] text-[#0D062D]">
                Project M.
              </h3>
            </div>
            <img
              src={minimize}
              alt="minimize"
              className="h-5 w-6 cursor-pointer"
              onClick={() => setMinimizeMenu(!minimizeMenu)}
            />
          </div>
          <div className="h-[1px] bg-[#DBDBDB]"></div>

          <div className="py-[31px]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 ${
                  index > 0 ? "mt-[28px]" : ""
                } pl-[22px] cursor-pointer`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="text-[#787486] h-4 w-4 md:h-6 md:w-6"
                />
                <p className="text-[#787486] font-[500] text-[12px] md:text-[16px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="h-[1px] bg-[#DBDBDB] w-[90%] mx-auto"></div>

          <div className="py-[31px]">
            <div className="flex justify-between items-center px-4 md:px-[22px]">
              <h3 className="text-[12px] font-[700] text-[#787486]">
                MY PROJECTS
              </h3>
              <img
                src={addProject}
                alt="Add icon"
                className="h-4 w-4 cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center">
              {projects.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    activeIcon === item.name ? "bg-[#5030E514] font-[600]" : ""
                  } flex gap-3 items-center mt-[30px] px-4 md:px-6 cursor-pointer w-[225px] h-[39px]`}
                  onClick={() => setActiveIcon(item.name)}
                >
                  <div
                    className={`h-2 w-2 rounded-full`}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <p className="text-[11px] md:text-[16px] text-[#0D062D]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center mt-[80px] relative px-2">
              <div className=" h-[40px] md:h-[66px] w-[40px] md:w-[66px] rounded-full bg-[#F5F5F5] flex items-center justify-center  absolute -translate-y-8">
                <div
                  className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(252, 214, 74, 0.7)",
                    filter: "blur(10px)",
                  }}
                ></div>
                <img src={lamp} alt="lamp" className="h-6 w-6 z-30 absolute" />
              </div>
              <div className="rounded-[16px] w-full md:w-[206px] md:h-[200px] bg-[#F5F5F5] text-center px-2 md:px-5 py-4">
                <h3 className="text-[12px] md:text-[14px] mt-4">
                  Thoughts Time
                </h3>
                <p className="text-[10px] md:text-[12px] text-[#787486] font-[400] mt-[10px]">
                  We don’t have any notice for you, till then you can share your
                  thoughts with your peers.
                </p>
                <button className="bg-white h-8 md:h-10 w-[90%] md:w-[166px] text-[10px] md:text-[14px] rounded-[4px] mt-[10px] hover:scale-[1.05] transition-all duration-150 ease-in-out">
                  Write a message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
