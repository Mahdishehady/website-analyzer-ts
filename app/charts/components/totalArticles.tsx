"use client"

import React from 'react';



import { useQuery } from 'react-query';

let found: boolean = false
let totaldata : JSON[] = []

async function fetchData(found: boolean,totaldata:JSON) {

    if (!found) {
        const response = await fetch('http://localhost:8000/totalcount');
        return response.json();
    }
    else
     return totaldata
};




export function TotalArticles() {
    const { data, isLoading, isError } = useQuery(['datatotal'], () => fetchData(found,totaldata));
    totaldata=data
    if (isLoading) {
        return <p>Loading...</p>;
    }
    else {
        found = true
    }

    if (isError) {
        return <p>Error fetching data</p>;
    }


    return <>
        {data}


    </>



}