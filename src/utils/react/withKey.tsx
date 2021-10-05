import React from "react";

export function withKey(key?: string) {
    return <E, T extends React.ComponentType<E>>(component: T) =>
        (props: E, index: number) =>
            React.createElement(
                component,
                {...props, key: index},
                []
            )
}

export function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return [isMounted]
}

