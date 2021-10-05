import React from 'react';
import './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuButton} from "./MenuButton";
import {MenuItemsList} from "./MenuItemsList";
import {EColors, Text} from "../../../Text";

export function Menu() {
    return (
        <div className="menu">
            <Dropdown
                top={-13}
                right={5}
                button={<MenuButton />}>
                <div className="dropdown">
                    <MenuItemsList postId={"3"} />
                    <button className="closeButton">
                        <Text mobileSize={12} size={14} color={EColors.grey66}>Закрыть</Text>
                    </button>
                </div>
            </Dropdown>
        </div>
    );
}
