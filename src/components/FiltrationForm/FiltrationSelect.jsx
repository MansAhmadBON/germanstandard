import React from 'react';
import {Select} from './components';
import styles from './FiltrationSelect.module.css'

function FiltrationSelect(props) {
    return (
        <div className={styles.selectBox}>
            <p className={styles.selectTitle}>Title:{props.title}</p>
            <Select />
        </div>
    )
}

export default FiltrationSelect;