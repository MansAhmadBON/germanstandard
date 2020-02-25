import React from "react";
import styles from './THeader.module.css'

function THeader({sortBySinger, sortBySong, sortByGanre, sortByYear}) {
    const sortBy = e => {
        const collectionTd = e.target.parentNode.children;
        const arrayTd = [...collectionTd];

        arrayTd.forEach((elem, arr, i) => elem.classList.remove(styles.sortActive));

        switch (e.target.className) {
            case 'Singer':
                e.target.classList.add(styles.sortActive);
                sortBySinger();
                break;
            case 'Song':
                e.target.classList.add(styles.sortActive);
                sortBySong();
                break;
            case 'Ganre':
                e.target.classList.add(styles.sortActive);
                sortByGanre();
                break;
            case 'Year':
                e.target.classList.add(styles.sortActive);
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