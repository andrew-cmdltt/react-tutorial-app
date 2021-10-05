import React, {ChangeEvent, FormEvent} from 'react';
import {useForm} from 'react-hook-form';
import styles from "./commentform.module.css"

type Props = {
    value: string
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    onSubmit: (event: FormEvent) => void;
}

export function CommentForm({onChange, onSubmit, value}: Props) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <textarea
                {...register('value', {minLength: 4})}
                onChange={onChange} value={value} className={styles.input}
            />
            {errors.value && <p>Введите значение более 3-х символов</p>}
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}