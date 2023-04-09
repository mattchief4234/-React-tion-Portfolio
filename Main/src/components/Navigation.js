import React from "react";

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div classname="tabs is-centered" >
            <ul classname="nav nav-tabs">
                {tabs.map((tab) => (
                    <li
                    classname={
                        props.currentPage === tab ? "nav-item is-active" : "nav-item"
                    }
                    key={tab}
                    >
                        <a 
                        href={"#" + tab.toLowerCase()}
                        onClick={() => props.handPageChange(tab)}
                        classname={
                            props.currentPage === tab ? "nav-link active" : "nav-Link"
                        }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation;