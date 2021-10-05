import React from 'react';
import styles from './textcontent.module.css';
import {dateFormat} from "../../../../utils/js/dateFormat";
import {Link} from "react-router-dom";

interface ITextContentProps {
    author?: string,
    title: string,
    created_utc: number
    url: string
    id: string
}

export function TextContent({author, created_utc, title, id}: ITextContentProps) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        src="https://www.redditstatic.com/avatars/avatar_default_12_D4E815.png"
                        alt="avatar" className={styles.avatar}/>
                    <a href={`https://www.reddit.com/user/${author}`} className={styles.username}>{author}</a>
                </div>
                <span className={styles.createdAt}>
                  <span className={styles.publishedLabel}>опубликовано </span>
                    {dateFormat(created_utc)}
                </span>
            </div>
            <h2 className={styles.title}>
                <Link className={styles.postLink} to={`/posts/${id}`}>{title}</Link>
            </h2>
        </div>
    );
}

