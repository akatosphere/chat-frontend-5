import { JSX } from 'react';
import styles from './smileys.module.scss';
export const Smileys = (): JSX.Element => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.text}>Эмоции</div>
      </div>
      <div className={styles.smileysContainer}>
        aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaa aaaa a aaaaaaaa aaaaaaa
        aaaaaaaa a aaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa a
        aaaaaaaa aaaaaaaa aaa aaaaaaaaaa aaaaaaaaaa a
      </div>
    </>
  );
};
