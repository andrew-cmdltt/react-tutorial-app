import React from 'react';
import styles from './headerwrapper.module.css';

interface IHeaderWrapperProps {
    name: string
}

export function HeaderWrapper({name}: IHeaderWrapperProps) {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.userLink}>
                <img className={styles.avatar}
                     src='https://www.redditstatic.com/avatars/avatar_default_12_D4E815.png'
                     alt="avatar"
                />
                <a href="https://www.reddit.com/user/Massive_Cucumber8444" className={styles.username}>{name}</a>
            </div>
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано 12.12.2021</span>
              </span>
        </div>
    );
}
