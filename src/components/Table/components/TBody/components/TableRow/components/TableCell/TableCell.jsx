import React from "react";

function TableCell({singer, song, ganre, year, id}) {
    return (
        <>
            <td>{singer}</td>
            <td>{song}</td>
            <td>{ganre}</td>
            <td>{year}</td>
        </>
    )
}

export default TableCell;