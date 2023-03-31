import React from "react";

function Navigation(props) {
    const tabs = ["About","portfolio", "Contact", "Resume"];
    return (
        <div className="tabs">
            <ul className="nav">
                {tabs.map((tab) => ( <li className = { props.currentPage === tab ? "nav-item is-active" : "nav-item"}
                key={tab}> <a href= {"#" + tab.toLowerCase()} onClick = {() => props.handlePageChange(tab)}
                classname = { props.currentPage ===tab ? "nav-link active" : "nav-link"}></a>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default Navigation;