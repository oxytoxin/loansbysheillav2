import {ReactNode} from "react";
import Header from "@/partials/welcome/header";
import Navbar from "@/partials/welcome/navbar";

export default ({children}: { children: ReactNode }) => (
    <div>
        <Header/>
        <Navbar/>
        {children}
    </div>
);
