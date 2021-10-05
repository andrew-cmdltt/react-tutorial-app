import React from 'react';
import styles from './break.module.css';
import classNames from 'classnames'

type TBreakSize = 4 | 8 | 12 | 14 | 16 | 20
// type TDisplays = 'mobile' | 'tablet' | 'desktops'

interface IBreakProps {
    size: TBreakSize,
    mobileSize?: TBreakSize,
    tabletSize?: TBreakSize,
    desktopSize?: TBreakSize,
    inline?: boolean,
    top?: boolean
}

export function Break(props: IBreakProps) {
    const {
        inline = false,
        top = false,
        size,
        mobileSize,
        tabletSize,
        desktopSize
    } = props

    const classes = classNames(
        styles[`s${size}`],
        {[styles[`mobile_s${mobileSize}`]]: mobileSize},
        {[styles[`desktop_s${desktopSize}`]]: desktopSize},
        {[styles[`tablet_s${tabletSize}`]]: tabletSize},
        {[styles.inline]: inline},
        {[styles.top]: top}
    )

    return (
        <div className={classes}/>
    );
}
