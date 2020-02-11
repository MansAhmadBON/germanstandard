import React from "react";
import styles from './TableCell.module.css'

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