import React from "react";
import styles from './ToolsBar.module.css'

function ToolsBar({firstItemShow, lastItemShow}) {

    const onChangeHandler = e => {
        console.log(e.target.value)
    };

    return (
        <div className={styles.boxToolBar}>
            <div>
                controls
            </div>
            <div className={styles.boxSelect}>
                <p>Table size</p>
                <select onChange={e => onChangeHandler(e)} className={styles.sizeTableSelect}>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                </select>
            </div>
            <div>
                <span>{firstItemShow} - {lastItemShow}</span>
            </div>
        </div>
    )
}

export default ToolsBar;