import { JSX } from 'react';
import styles from './recent-emodji.module.scss';

export const RecentEmodji = (): JSX.Element => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.text}>Недавние</div>
      </div>
      <div className={styles.recentEmodji}></div>
    </>
  );
};
