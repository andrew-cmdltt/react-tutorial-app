import React from 'react';
import styles from './card.module.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

interface ICardProps {
    id: string,
    author?: string,
    thumbnail?: string,
    score?: number,
    title: string,
    created_utc: number
    url: string
}

export function Card({author, created_utc, thumbnail, title, score, url, id}: ICardProps) {
    return (
        <li className={styles.card}>
            <TextContent
                author={author}
                created_utc={created_utc}
                title={title}
                url={url}
                id={id}
            />
            <Preview thumbnail={thumbnail}/>
            <Menu/>
            <Controls score={score}/>
        </li>
    );
}
