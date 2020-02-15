import React from "react";

function Option({valueOptions}) {
    if(valueOptions){
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
    } else {
        return null
    }
}

export default Option;