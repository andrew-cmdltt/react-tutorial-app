import React from 'react';
import styles from './comment.module.css';
import {LineWrapper} from "./LineWrapper/LineWrapper";
import {ContentWrapper} from "./ContentWrapper/ContentWrapper";


interface ICommentProps {
    name: string,
}

export function Comment({name}: ICommentProps) {
    return (
        <div className={styles.comment}>
            <LineWrapper />
            <ContentWrapper name={name} />
        </div>
    );
}
