
import { useState, useEffect } from 'react';
import qs from 'qs';
import axiosService from '../config/AxiosServive';


let arr = []
export default function useFetchDataCate({user_id}) {

    // const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    // const user_id = '1cadcee';
    const [arrListCategory, setArrListCategory] = useState([]);
    const [totalPage, setTotalPage] = useState(null)
    const [totalD, setTotalD] = useState(0)


    useEffect(() => {
        const getData = async () => {
            setIsError(false);
            setIsLoading(true);

            const param = {
                user_id: user_id,
                page: page,
            };

            try {
                const response = await axiosService.post(
                    'order_init/get_orders',
                    qs.stringify(param),
                );

                if (response.data.type == 1) {
                    arr = arr.concat(response.data.orders)
                    await arr
                    setTotalPage(response.data.total_page)
                    setArrListCategory(arr);
                    // setData(response.data);
                    setTotalD(arr.length);

                } else {
                    console.log('failed');
                }
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        getData();
    }, [page]);

    useEffect(() => {
        return () => {
            setArrListCategory([]);
            arr = []
        }
    }, [])

    return { isLoading, isError, arrListCategory, page, totalPage, totalD, setTotalD, setArrListCategory, setPage }
}