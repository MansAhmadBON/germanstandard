import React from "react";
import {Option} from './components';
import styles from './Select.module.css'

function Select({valueOptions, addSelectValue, setPageSize, pageSize}) {
    const selectValue = e => {
        addSelectValue(e.target.value);
        setPageSize(pageSize);
    };

    return (
        <select className={styles.selectFilter} onChange={e => selectValue(e)}>
            <Option
                valueOptions={valueOptions}
            />
        </select>
    )
}

export default Select;