import React from "react";

// import { useServiceContext } from "shell/Service";

const Microfront = () => {
    // const { setTitle, title } = useServiceContext();
    // const onChangeTitle = (evt) => {
    //     setTitle(evt.currentTarget.value)
    // }
    return (
        <div className="flex flex-col">
            <input
              type="text"
              value={"temporary"}
              onChange={() => {}}
              className="border-2 border-gray-700 rounded-sm p-2 mb-2"
            />
            <div className="text-center">
                temporary    
            </div>
        </div>        
    )
};

export default Microfront;
