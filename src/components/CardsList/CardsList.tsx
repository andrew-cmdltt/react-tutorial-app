import React from 'react';
import styles from './cardslist.module.css';
import {Card} from "./Card";
import {usePostsData} from "../../hooks/usePostsData";
import {isMultipleOfThree} from "../../utils/js/isMultipleOfThree";

export function CardsList() {
    const {
        posts,
        loading,
        errorLoading,
        bottomOfList,
        buttonRef,
        loadingCount} = usePostsData()

    return (
        <ul className={styles.cardsList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: "center"}}>Нет ни одного поста</div>
            )}
            {posts.map((post) => (
                <Card
                    title={post.data.title}
                    key={post.data.id}
                    created_utc={post.data.created_utc}
                    id={post.data.id} url={post.data.url}
                    author={post.data.author}
                    score={post.data.score}
                    thumbnail={post.data.thumbnail}
                />
            ))}

            <div ref={bottomOfList}/>

            {loading && (
                <div style={{textAlign: "center"}}>Загрузка...</div>
            )}

            {isMultipleOfThree(loadingCount) && !loading && (
                <button ref={buttonRef} className={styles.loadingButton}>Загрузить ещё</button>
            )}

            {errorLoading && (
                <div role="alert" style={{textAlign: "center"}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    );
}
