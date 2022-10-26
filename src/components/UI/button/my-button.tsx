import React from 'react';
import styles from "./my-button.module.scss"

interface Props {
    title?: string,
    onClick?: any
    style?:any
}

export const MyButton = ({title, ...props}: Props) => {
    return (
        <button {...props} className={styles.myBtn}>
            {title}
        </button>
    );
};
