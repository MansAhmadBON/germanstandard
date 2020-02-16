import React from 'react';
import {Select} from './components';
import styles from './FiltrationSelect.module.css'

function FiltrationSelect({title, valueOptions, addSelectValue, setPageSize, pageSize}) {
    return (
        <div className={styles.selectBox}>
            <p className={styles.selectTitle}>{title}</p>
            <Select
                valueOptions={valueOptions}
                addSelectValue={addSelectValue}
                setPageSize={setPageSize}
                pageSize={pageSize}
            />
        </div>
    )
}

export default FiltrationSelect;