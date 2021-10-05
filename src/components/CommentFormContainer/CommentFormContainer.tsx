import React, {ChangeEvent, FormEvent} from 'react';
import {CommentForm} from "../CommentForm";
import {atom, useRecoilState} from "recoil";

const commentState = atom({
    key: 'commentState',
    default: 'Привет из Recoil',
});

export function CommentFormContainer() {
    const [value, setValue] = useRecoilState(commentState);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        alert("Форма отправлена")
    }

    return (
        <CommentForm
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}