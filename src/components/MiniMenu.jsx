import minimize from "../icons/minimize.svg";
import message from "../icons/message.svg";
import home from "../icons/category.svg";
import task from "../icons/task-square.svg";
import settings from "../icons/setting.svg";
import member from "../icons/profile-2user.svg";

const MiniMenu = ({ setMinimizeMenu }) => {
  const menuItems = [
    {
      icon: home,
    },
    {
      icon: message,
    },
    {
      icon: task,
    },
    {
      icon: member,
    },
    {
      icon: settings,
    },
  ];
  return (
    <div className="w-[45px] h-full md:w-[250px] border-r-2 border-{#DBDBDB] flex-shrink-0">
      <div className="flex justify-center py-[32px] px-2 md:px-6 w-full h-[110px] items-center">
        <img
          src={minimize}
          alt="minimize"
          className="h-5 w-6 cursor-pointer rotate-180"
          onClick={() => setMinimizeMenu(false)}
        />
      </div>
      <div className="h-[1px] bg-[#DBDBDB]"></div>

      <div className="py-[31px] flex flex-col items-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 ${
              index > 0 ? "mt-[28px]" : ""
            } p-2 cursor-pointer`}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="text-[#787486] h-6 w-6"
            />
          </div>
        ))}
      </div>

      <div className="h-[1px] bg-[#DBDBDB] w-[90%] mx-auto"></div>

    </div>
  );
};

export default MiniMenu