import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";


interface IProps{
    children:ReactNode;
}

const CommonLayOut = ({children}:IProps) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    ); 
 };

export default CommonLayOut;