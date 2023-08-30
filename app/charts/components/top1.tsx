"use client"
import { CardContent } from '@/components/ui/card';
import React from 'react';



import { useQuery } from 'react-query';

let found: boolean = false
let datafound : JSON[] = []



async function fetchData(found : boolean,datafound : JSON[]){
    if (!found) {
    const response = await fetch('http://localhost:8000/top1');
    return response.json();}
    else
    return datafound
};




export  function Top1() {
    const { data, isLoading, isError } = useQuery('datatop',()=> fetchData(found,datafound));
    datafound=data
    let max: Number = 0
    let value: string = ""
    for (const key in data) {
        if (data[key] > max)
            max = data[key]
        value = key

    }
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
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">
                {max}
            </p>
        </CardContent>


    </>
}

