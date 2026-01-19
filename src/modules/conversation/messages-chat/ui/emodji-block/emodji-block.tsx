import { JSX } from 'react';
import styles from './emodji-block.module.scss';
import { MessageField } from './message-field/message-field';
import { RecentEmodji } from './recent-emodji/recent-emodji';
import { Smileys } from './smileys/smileys';
export const EmodjiBlock = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerScroll}>
        <RecentEmodji />
        <Smileys />
      </div>
      <MessageField />
    </div>
  );
};
