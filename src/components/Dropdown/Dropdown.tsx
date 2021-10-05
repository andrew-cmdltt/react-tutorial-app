import React from 'react';
import RelativePortal from 'react-relative-portal';

interface IDropdownProps {
    button: React.ReactNode,
    children: React.ReactNode,
    isOpen?: boolean,
    onOpen?: () => void,
    onClose?: () => void,
    top?: number,
    right?: number
}

const NOOP = () => {}

export function Dropdown({children, button, isOpen, onOpen = NOOP, onClose = NOOP, top=0, right=0}: IDropdownProps) {
    const [isDropdownOpen, setTsDropdownOpen] = React.useState(isOpen)

    React.useEffect(() => setTsDropdownOpen(isOpen), [isOpen])
    // React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setTsDropdownOpen(!isDropdownOpen)
        }
    }

    return (
        <RelativePortal
            component="div"
            className="container"
            top={top}
            right={right}
        >
                <div onClick={handleOpen}>
                    {button}
                </div>
                {isDropdownOpen && (
                    <div className="listContainer">
                        <div className="list" onClick={() => setTsDropdownOpen(false)}>
                            {children}
                        </div>
                    </div>
                )}
        </RelativePortal>
    );
}
