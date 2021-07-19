import React from "react";

import { useServiceContext } from "shell/Service";

const Microfront = () => {
    const { setTitle, title } = useServiceContext();
    const onChangeTitle = (evt) => {
        setTitle(evt.currentTarget.value)
    }
    return (
        <div className="flex flex-col">
            <input
              type="text"
              value={title}
              onChange={onChangeTitle}
              className="border-2 border-gray-700 rounded-sm p-2 mb-2"
            />
            <div className="text-center">
                { title }    
            </div>
        </div>        
    )
};

export default Microfront;
