import {useEffect} from "react";
import {RootState} from "../store/reducer";
import {useSelector, useDispatch} from 'react-redux';
import {IUserData, meRequestAsync} from "../store/me/actions";

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const token = useSelector<RootState>(state => state.saveToken.data?.token);
    const loading = useSelector<RootState, boolean>(state => state.me.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!token) return;
        dispatch(meRequestAsync())
    }, [token])

    return {
        data,
        loading,
    }
}
