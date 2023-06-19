import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid";
import { tasks } from "../data/tasks";

// Icons import
import comment from "../icons/comments.svg";
import file from "../icons/files.svg";

const KanbanBoard = () => {
  const taskStatus = {
    toDo: {
      name: "To Do",
      items: [tasks[0], tasks[1], tasks[2]],
      lineColor: "#5030E5",
      total: 4,
    },
    inProgress: {
      name: "On Progress",
      items: [tasks[3], tasks[4]],
      lineColor: "#FFA500",
      total: 3,
    },
    done: {
      name: "Done",
      items: [tasks[5], tasks[6]],
      lineColor: "#8BC48A",
      total: 2,
    },
  };

  const [columns, setColumns] = useState(taskStatus);

  const handleOnDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div className="px-4 md:px-[50px] flex lg:justify-between flex-wrap justify-center w-full gap-3.5">
      <DragDropContext
        onDragEnd={(result) => handleOnDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              className="bg-[#F5F5F5] py-3 md:py-5 px-2 md:px-5 rounded-[16px]"
              key={columnId}
            >
              <div className="flex gap-2 items-center">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: column.lineColor }}
                ></div>
                <h2 className="text-[16px] text-[#0D062D] font-[500]">
                  {column.name}
                </h2>
                <div className="h-5 w-5 bg-[#E0E0E0] flex items-center justify-center text-[#625F6D] text-[12px] rounded-full">
                  {column.total}
                </div>
              </div>
              <div
                className="w-full h-[3px] my-4"
                style={{ backgroundColor: column.lineColor }}
              ></div>

              {/* Droppable Container that houses the Cards */}
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className=" w-[250px] md:w-[300px] max-w-[300px] flex-shrink-0 min-h-[500px] bg-[#F5F5F5] transition-all duration-150"
                      // style={{
                      //   background: snapshot.isDraggingOver
                      //     ? "lightblue"
                      //     : "#F5F5F5",
                      // }}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="rounded-[16px] mb-5 bg-white active:rotate-6 p-4 transition-all duration-150"
                                  style={{
                                    userSelect: "none",
                                    // backgroundColor: snapshot.isDragging
                                    //   ? "#263B4A"
                                    //   : "white",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="text-[12px] font-[500]">
                                      {item.completed ? (
                                        <p className="text-[#68B266] bg-[#83C29D33] py-1 px-1.5 rounded-sm">
                                          Completed
                                        </p>
                                      ) : (
                                        <div className=" max-w-[40px] h-[23px] overflow-hidden rounded-sm flex justify-center items-center">
                                          {item.priority === 0 && (
                                            <p className="text-[#D58D49] bg-[#DFA87433] py-1 px-1.5">
                                              Low
                                            </p>
                                          )}
                                          {item.priority === 5 && (
                                            <p className="text-[#D8727D] bg-[#D8727D1A] py-1 px-1.5">
                                              High
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8">
                                      <span className="font-extrabold pb-2">
                                        ...
                                      </span>
                                    </div>
                                  </div>
                                  <h3 className="text-[18px] text-[#0D062D] font-[600] mt-1">
                                    {item.title}
                                  </h3>
                                  {item.content && (
                                    <p className="text-[12px] text-[#787486] font-[400]">
                                      {item.content}
                                    </p>
                                  )}
                                  <div className="flex justify-between items-center mt-1 w-full overflow-hidden">
                                    {item.img.map((image, index) => (
                                      <img
                                        key={index}
                                        src={image.path}
                                        alt=""
                                        style={{
                                          maxHeight: image.height,
                                          maxWidth: image.width,
                                          objectFit: "contain",
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <div className="flex items-center justify-between mt-[28px]">
                                    <div className="flex">
                                      {item.assignees.map((user, index) => (
                                        <div
                                          key={index}
                                          className={`h-6 w-6 ${
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
                                    </div>
                                    <div className="flex gap-3 text-[#787486] text-[12px] font-[500] items-center">
                                      <div className="flex gap-1 items-center cursor-pointer">
                                        <img
                                          src={comment}
                                          alt=""
                                          className="h-4 w-4 object-contain"
                                        />
                                        <span>{item.comments}</span>
                                        <span>comments</span>
                                      </div>
                                      <div className="flex gap-1 items-center cursor-pointer">
                                        <img
                                          src={file}
                                          alt=""
                                          className="h-4 w-4 object-contain"
                                        />
                                        <span>{item.files}</span>
                                        <span>files</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
            // </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
