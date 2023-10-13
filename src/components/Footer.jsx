import React from "react";

function Foot(){
    const currYear = new Date().getFullYear();
    return<footer> <p>
        Copyright ©{currYear}
    </p></footer>
}

export default Foot;