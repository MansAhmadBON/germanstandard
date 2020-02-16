import React from "react";
import styles from './TableRow.module.css';
import TableCell from "./components"

function TableRow({playlistForShow}) {
    return (
        <>
            {
                playlistForShow.map(item => {
                    return (
                        <tr key={item.id} className={styles.tableRow}>
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