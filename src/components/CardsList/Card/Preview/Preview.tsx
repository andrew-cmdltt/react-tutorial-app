import React from 'react';
import styles from './preview.module.css';

interface IPreviewProps {
    thumbnail?: string
}

export function Preview({thumbnail}: IPreviewProps) {
    return (
        <div className={styles.preview}>
            <img
                src={thumbnail === "self" || thumbnail === "default"
                    ? "https://preview.redd.it/fs12v3j0z1b51.png?width=512&format=png&auto=webp&s=d636dcb2029782ddd7084e2628582379c817a985"
                    : thumbnail}
                alt="" className={styles.previewImg}/>
        </div>
    );
}
