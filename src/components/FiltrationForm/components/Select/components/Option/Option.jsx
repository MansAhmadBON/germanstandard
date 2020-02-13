import React from "react";

function Option({valueOptions}) {
    return (
        <>
            <option>All</option>
            {
                valueOptions.map((item, i) => {
                    return (
                        <option key={i}>{item}</option>
                    )
                })
            }
        </>
    )
}

export default Option;