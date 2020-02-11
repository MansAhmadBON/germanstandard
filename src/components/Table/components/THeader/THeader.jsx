import React from "react";
import styles from './THeader.module.css'

function THeader() {
    return (
        <thead className={styles.wrapperTableHeader}>
            <tr className={styles.tableHeader}>
                <td>Singer</td>
                <td>Song</td>
                <td>Ganre</td>
                <td>Year</td>
            </tr>
        </thead>
    )
}

export default THeader;