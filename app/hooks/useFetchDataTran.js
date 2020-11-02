
import { useState, useEffect, useReducer } from 'react';
import qs from 'qs';
import axiosService from '../config/AxiosServive';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                param,
                isLoading: true,
                isError: false
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};


export default function useFetchDataTran(initialUrl, initialData, user_id, keyword, transaction_type, to_time, page) {
    const [url, setUrl] = useState(initialUrl);
    const user_id = '1cadcee'

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    const param = {
        user_id: action.user_id,
        keyword: action.keyword,
        transaction_type: action.transaction_type,
        from_time: action.from_time,
        to_time: action.to_time,
        page: action.page
    };

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });

            try {
                const result = await axiosService.post('user_transaction/get_info',
                    qs.stringify(param))

                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [url]);

    return [state, setUrl];
};


// export default function useFetchDataTran() {


//     const dataFetchReducer = (state, action) => {
//         switch (action.type) {
//             case 'FETCH_INIT':
//                 return {
//                     ...state,
//                     isLoading: false,
//                     isError: false,
//                 };
//             case 'FETCH_SUCCESS':
//                 return {
//                     ...state,
//                     isLoading: false,
//                     isError: false,
//                     data: action.payload,
//                 };
//             case 'FETCH_FAILURE':
//                 return {
//                     ...state,
//                     isLoading: false,
//                     isError: true
//                 };
//             default:
//                 console.log('DEFAULT');
//         }
//     }

//     const useDataApi = (initialUrl, initialData) => {
//         const [url, setUrl] = useState(initialUrl);

//         const [state, dispatch] = useReducer(dataFetchReducer, {
//             isLoading: false,
//             isError: false,
//             data: initialData,
//         });

//         useEffect(() => {
//             const fetchData = async () => {
//                 // setIsError(false);
//                 // setIsLoading(true);

//                 // const param = {
//                 //     user_id: user_id,
//                 //     page: page,
//                 // };
//                 dispatch({ type: 'FETCH_INIT' });
//                 try {
//                     const result = await axios(url);
//                     dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
//                 } catch (error) {
//                     dispatch({ type: 'FETCH_FAILURE' });
//                 }
//                 //     const response = await axiosService.post(
//                 //         'order_init/get_orders',
//                 //         qs.stringify(param),
//                 //     );

//                 //     if (response.data.type == 1) {
//                 //         arr = arr.concat(response.data.orders)
//                 //         await arr
//                 //         setTotalPage(response.data.total_page)
//                 //         setArrListCategory(arr);
//                 //         // setData(response.data);
//                 //         setTotalD(arr.length);

//                 //     } else {
//                 //         console.log('failed');
//                 //     }
//                 // } catch (error) {
//                 //     setIsError(true);
//                 // }
//             };
//             fetchData();
//         }, [url]);

//         useEffect(() => {
//             return () => {
//                 setArrListCategory([]);
//                 arr = []
//             }
//         }, [])

//         return { state, setUrl }
//     }