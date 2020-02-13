import React from "react";
import {Option} from './components';
import styles from './Select.module.css'

function Select({valueOptions}) {
    return (
        <select className={styles.selectFilter}>
            <Option
                valueOptions={valueOptions}
            />
        </select>
    )
}

export default Select;