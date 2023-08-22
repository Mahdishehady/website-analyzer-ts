"use client"
import { CardContent } from '@/components/ui/card';
import React from 'react';



import { useQuery } from 'react-query';




const fetchData = async () => {
    const response = await fetch('http://localhost:8000/top1');
    return response.json();
};




export  function Top1() {
    const { data, isLoading, isError } = useQuery('data', fetchData);
    let max: Number = 0
    let value: string = ""
    for (const key in data) {
        if (data[key] > max)
            max = data[key]
        value = key

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

