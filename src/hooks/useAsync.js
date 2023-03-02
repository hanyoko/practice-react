import { useEffect, useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            return state;
    }
}
function useAsync(callback){
    const [state, dispatch] = useReducer(reducer,{
        loading: false,
        data: null,
        error: null
    })
    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await callback
            console.log(response);
            dispatch({ type: 'SUCCESS', data: response.data })
        }
        catch(e) {
            dispatch({ type: 'ERROR', error: e })
        }
    }
    useEffect(() => {
        fetchData();
    },[])
    return [ state, fetchData ]
}
export default useAsync;