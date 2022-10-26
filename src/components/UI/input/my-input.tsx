import React from "react";
import styles from "./my-input.module.scss";

interface Props {
  type?: string;
  placeholder?: string;
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MyInput = (props: Props) => {
  return <input  className={styles.myInput} {...props} />;
};
