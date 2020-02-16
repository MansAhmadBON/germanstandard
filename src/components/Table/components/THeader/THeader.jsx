import React from "react";
import styles from './THeader.module.css'

function THeader({sortBySinger, sortBySong, sortByGanre, sortByYear}) {
    const sortBy = e => {
        switch (e.target.className) {
            case 'Singer':
                sortBySinger();
                break;
            case 'Song':
                sortBySong();
                break;
            case 'Ganre':
                sortByGanre();
                break;
            case 'Year':
                sortByYear();
                break;
            default: break;
        }
    };
    return (
        <thead className={styles.wrapperTableHeader}>
            <tr className={styles.tableHeader} onClick={sortBy}>
                <td className="Singer" style={{cursor: 'pointer'}}>Singer</td>
                <td className="Song" style={{cursor: 'pointer'}}>Song</td>
                <td className="Ganre" style={{cursor: 'pointer'}}>Ganre</td>
                <td className="Year" style={{cursor: 'pointer'}}>Year</td>
            </tr>
        </thead>
    )
}

export default THeader;