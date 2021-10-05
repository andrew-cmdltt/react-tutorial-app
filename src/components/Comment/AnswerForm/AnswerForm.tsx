import React, {useEffect, useRef} from 'react';
import styles from './answerform.module.css';

interface IAnswerFormInterface {
    name: string;
}

export function AnswerForm({name}: IAnswerFormInterface) {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [])

    return (
        <form className={styles.form}>
            <textarea className={styles.input} ref={ref} placeholder={name + `, оставьте ваш комментарий`}/>
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}
