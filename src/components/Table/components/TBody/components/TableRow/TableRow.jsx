import React from "react";
import styles from './TableRow.module.css';
import TableCell from "./components"

function TableRow({playlistForShow}) {
    return (
        <>
            {
                playlistForShow.map((item, i) => {
                    return (
                        <tr key={item.id} className={(i % 2 === 0) ? styles.tableRowEven : styles.tableRowOdd}>
                            <TableCell
                                singer={item.singer}
                                song={item.song}
                                ganre={item.ganre}
                                year={item.year}
                            />
                        </tr>
                    )
                })
            }
        </>
    )
}

export default TableRow;