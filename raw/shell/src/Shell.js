import React from "react";

import { useServiceContext } from "./Service";

// import Microfront from "microfront/Microfront"
// import Microfront2 from "microfront2/Microfront"


const Shell = () => {
    const [number, setNumber] = React.useState(0)
    const { title = '' } = useServiceContext()
    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="font-bold text-lg mb-5">{title}</h1>
            <div className="flex w-full">
                <div className="border-2 rounded-sm border-yellow-500 m-3 flex-1 p-5">
                    space 1
                </div>
                <div className="border-2 rounded-sm border-yellow-500 m-3 flex-1 p-5">
                    space 2
                    <div>
                        {number}
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Shell;
