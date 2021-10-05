import React from 'react';
import './menuitemslist.css';
import {BlockIcon, WarningIcon, CommentsIcon, ShareIcon, SaveIcon} from "../../../../Icons";
import {EColors, Text} from "../../../../Text";

interface IMenuItemsListProps {
    postId: string
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
    return (
        <ul className="menuItemsList">
            <li className="menuItem">
                <CommentsIcon/>
                <Text size={12} color={EColors.grey99}>Комментарии</Text>
            </li>
            <div className="divider"/>
            <li className="menuItem">
                <ShareIcon/>
                <Text size={12} color={EColors.grey99}>Поделиться</Text>
            </li>
            <div className="divider"/>
            <li className="menuItem">
                <BlockIcon/>
                <Text size={12} color={EColors.grey99}>Скрыть</Text>
            </li>
            <div className="divider"/>
            <li className="menuItem">
                <SaveIcon/>
                <Text size={12} color={EColors.grey99}>Сохранить</Text>
            </li>
            <div className="divider"/>
            <li className="menuItem">
                <WarningIcon/>
                <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
            </li>
        </ul>
    );
}
