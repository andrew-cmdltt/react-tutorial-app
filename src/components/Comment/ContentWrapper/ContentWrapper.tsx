import React, {useState} from 'react';
import styles from './contentwrapper.module.css';
import {AnswerForm} from "../AnswerForm";
import {HeaderWrapper} from "./HeaderWrapper/HeaderWrapper";
import {CommentText} from "./CommentText/CommentText";
import {ShareIcon} from "../../Icons/ShareIcon";
import {CommentsIcon} from "../../Icons/CommentsIcon";
import {WarningIcon} from "../../Icons/WarningIcon";

interface IContentWrapperProps {
    name: string
}

export function ContentWrapper({name}: IContentWrapperProps) {
    const [isAnswerFormOpened, setIsAnswerFormOpened] = useState(false);

    return (
        <div className={styles.contentWrapper}>
            <HeaderWrapper name={name} />
            <CommentText />
            <div className={styles.buttonSection}>
                <button className={styles.button} onClick={() => {
                    setIsAnswerFormOpened(!isAnswerFormOpened)
                }}>
                    <CommentsIcon />
                    <span className={styles.buttonDescription}>Ответить</span>
                </button>
                <button className={styles.button}>
                    <ShareIcon />
                    <span className={styles.buttonDescription}>Поделиться</span>
                </button>
                <button className={styles.button}>
                    <WarningIcon />
                    <span className={styles.buttonDescription}>Пожаловаться</span>
                </button>
            </div>
            {isAnswerFormOpened && (
                <AnswerForm name={name}/>
            )}
        </div>
    );
}
