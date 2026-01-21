import { JSX } from 'react';
import { ImageUI } from 'shared/ui/image';
import styles from './smileys.module.scss';

const emojis = ['1', '2', '3', '4', '5']; // Ваши эмодзи

export const Smileys = ({ handleEmojiSelect }: { handleEmojiSelect: (emoji: string) => void }): JSX.Element => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.text}>Эмоции</div>
      </div>
      <div className={styles.smileysContainer}>
        {emojis.map((emoji) => (
          <button key={emoji} onClick={() => handleEmojiSelect(`/images/messages-chats/smileysIcons/${emoji}.svg`)}>
            <ImageUI
              src={`/images/messages-chats/smileysIcons/${emoji}.svg`}
              alt="смаил"
              loading="eager"
              width={32}
              height={32}
            />
          </button>
        ))}
      </div>
    </>
  );
};
