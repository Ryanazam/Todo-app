import React from "react";

const TodoList = ({ todo }) => {
  return (
    <div className=" flex gap-3 flex-wrap text-center shadow-lg shadow-red-800">
      {todo.map((element, index) => {
        return (
          <div key={index} className="w-[30%] h-[200px]  bg-gray-400">
            <div>
              <h2>{element.title}</h2>
            </div>

            <div>
              {" "}
              <p>{element.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
