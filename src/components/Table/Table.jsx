import React from "react";
import styles from './Table.module.css'
import {THeader, TBody} from './components';

function Table({playlistForShow, sortBySinger, sortBySong, sortByGanre, sortByYear}) {
    return (
        <table className={styles.table}>
            <THeader
                sortBySinger={sortBySinger}
                sortBySong={sortBySong}
                sortByGanre={sortByGanre}
                sortByYear={sortByYear}
            />
            <TBody
                playlistForShow={playlistForShow}
            />
        </table>
    )
}

export default Table