import React, { Dispatch, ReactNode } from "react";
import styles from "./my-modal.module.scss";

interface Props {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<boolean>;
}

export const MyModal = ({ children, visible, setVisible }: Props) => {
  
  const rootClasses = [styles.myModal]
  if (visible) {
    rootClasses.push(styles.active)
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};