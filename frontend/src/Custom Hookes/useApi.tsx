import React, { useState } from 'react'
import axios, {AxiosResponse} from 'axios';

import { useEffect } from 'react';

export interface Queryopt {

    target? : string;

}

export interface RequestedData {
    "bodyPart" : string,
    "equipment": string,
    "gifUrl"   : string,
    "id"       : string,
    "name"     : string,
    "target"   : string 
} 



const useApi = (url : string,query : Queryopt) => {

    const [data, setData] = useState<RequestedData[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [isErr, setisErr] = useState(false);

    const fetchData = async (url : string) => {

        try{
            setLoading(true);

            const data = await axios.get<RequestedData[]>(url,{params : query});

            setLoading(false);

            setData(data.data);
        }
        catch(error) {
            setLoading(false);
            setisErr(true);
            console.log(error);
        }

    }

    useEffect (() => {

        fetchData(url);

    },[url]);


return [data,isLoading,isErr]

}

export default useApi