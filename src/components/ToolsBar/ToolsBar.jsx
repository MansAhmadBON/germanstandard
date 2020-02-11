import React from "react";
import styles from './ToolsBar.module.css'

function ToolsBar({firstItemShow, lastItemShow, setPageSize, pages, addCurrentPage, currentPage}) {

    const onChangeHandler = e => {
        setPageSize(Number(e.target.value));
    };

    const clickOnPaginationBox = item => {
        //let pageNum = Number(e.target.className);
        addCurrentPage(item);
    };

    return (
        <div className={styles.boxToolBar}>
            <div className={styles.paginationBox}>
                {
                    pages.map(item => {
                        return (
                            <span key={item} className={(currentPage === item) ? styles.paginationItemActive : styles.paginationItem} onClick={e => clickOnPaginationBox(item)}>{item}</span>
                        )
                    })
                }
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