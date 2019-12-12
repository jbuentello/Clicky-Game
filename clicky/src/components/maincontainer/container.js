// Issues getting cards.json to show the images are throwing a error that doesnt allow the array to load
// cards.json does not allow spaces or commits above (good JOB JOEL TOOK YOU LONG ENOUGH!)
import React from "react";
import "./container.css";

//stateless component
const mainCont = props => <div className="mainContainer">{props.children}</div>;

export default mainCont;