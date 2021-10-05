import {useEffect, useRef, useState} from "react";
import axios from 'axios'
import {RootState} from '../store/reducer';
import {useSelector} from 'react-redux';
import {isMultipleOfThree} from "../utils/js/isMultipleOfThree";

export function usePostsData() {
    const token = useSelector<RootState>(state => state.saveToken.data?.token);
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [errorLoading, setErrorLoading] = useState('')
    const [nextAfter, setNextAfter] = useState('')
    const [loadingCount, setLoadingCount] = useState(1)

    const bottomOfList = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!token) return
        async function load() {
            setLoading(true)
            setErrorLoading("")

            try {
                const {
                    data: {
                        data: {
                            after,
                            children
                        }
                    }
                } = await axios.get('https://oauth.reddit.com/new/', {
                    headers: {Authorization: `bearer ${token}`},
                    params: {
                        limit: 10,
                        after: nextAfter
                    }
                })

                setNextAfter(after)
                setLoadingCount(loadingCount + 1)
                setPosts(prevChildren => prevChildren.concat(...children))
            } catch (error) {
                console.log(error)
                setErrorLoading(String(error))
            }
            setLoading(false)
        }

        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && buttonRef.current?.contains(event.target)) {
                load()
            }
        }

        document.addEventListener('click', handleClick)

        const observer = new IntersectionObserver((entries) => {

            if (entries[0].isIntersecting && !isMultipleOfThree(loadingCount)) {
                load()
            }
        }, {
            rootMargin: "10px"
        })

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
                document.removeEventListener('click', handleClick)
            }
        }
    }, [nextAfter, token, loadingCount])

    return {posts, loading, errorLoading, bottomOfList, buttonRef, loadingCount}
}