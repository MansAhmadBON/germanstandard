import React from "react";
import styles from './Table.module.css'
import {THeader, TBody} from './components';

function Table({playlistForShow}) {
    return (
        <table className={styles.table}>
            <THeader />
            <TBody
                playlistForShow={playlistForShow}
            />
        </table>
    )
}

export default Table