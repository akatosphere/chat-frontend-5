import { JSX } from 'react';
import Icon1 from './icons/icon1.svg';
import Icon2 from './icons/icon2.svg';
import Icon3 from './icons/icon3.svg';
import Icon4 from './icons/icon4.svg';
import Icon5 from './icons/icon5.svg';
import Icon6 from './icons/icon6.svg';
import Icon7 from './icons/icon7.svg';
import Icon8 from './icons/icon8.svg';
import Icon9 from './icons/icon9.svg';
import styles from './message-field.module.scss';

export const MessageField = (): JSX.Element => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.viletIconContainer}>
          <Icon1 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon2 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon3 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon4 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon5 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon6 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon7 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon8 />
        </div>
        <div className={styles.grayIconContainer}>
          <Icon9 />
        </div>
      </div>
    </>
  );
};
