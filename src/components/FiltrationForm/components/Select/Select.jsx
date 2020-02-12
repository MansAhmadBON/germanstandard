import React from "react";
import {Option} from './components';
import styles from './Select.module.css'

function Select(props) {
    return (
        <select className={styles.selectFilter}>
            <Option />
        </select>
    )
}

export default Select;