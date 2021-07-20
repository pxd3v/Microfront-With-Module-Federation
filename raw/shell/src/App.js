import React from "react";

import { ServiceProvider } from "./Service";
import Shell from './Shell'
const App = () => {
    return (
        <ServiceProvider>
            <Shell />
        </ServiceProvider>
    )
}

export default App;
