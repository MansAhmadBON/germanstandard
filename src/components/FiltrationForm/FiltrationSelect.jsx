import React from 'react';
import {Select} from './components';
import styles from './FiltrationSelect.module.css'

function FiltrationSelect({title, valueOptions}) {
    return (
        <div className={styles.selectBox}>
            <p className={styles.selectTitle}>{title}</p>
            <Select
                valueOptions={valueOptions}
            />
        </div>
    )
}

export default FiltrationSelect;