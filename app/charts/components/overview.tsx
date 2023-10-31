"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import React, { useEffect, useState } from 'react';


import { useQuery } from 'react-query';
import { format } from "date-fns";



const fetchData = async (dateFromTo :{ from: Date; to: Date  }) => {
  const response = await fetch(`http://localhost:8000/getNewsByDate/${format(dateFromTo.from, "dd, MM, yyyy")}-${format(dateFromTo.to, "dd, MM, yyyy")}`);
  return response.json();
};



interface DataItem {
  keyword: string;
  total: number;
}

export function Overview({ dateFromTo: { from, to } }: { dateFromTo: { from: Date ; to: Date} }) {

  const { data, isLoading, isError } = useQuery(['datachart', String(from), String(to)], () => fetchData({ from, to }));
 
  const formattedData: DataItem[] = [];
  for (let key in data ) {
    //if (jsonData.hasOwnProperty(key)) {
    const item: DataItem = { keyword: key, total: data[key] * 100 + 1000 };
    formattedData.push(item); 
    //}
  }

  
  //}
  if (isLoading) {
    return <p className="flex justify-center items-center m-0 h-[50vh]">Loading...</p>;
  }

  if (isError) {
    return 
    <p className="">Error fetching data</p>;
  }



  return (
    <>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={formattedData}>
          <XAxis
            dataKey="keyword"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
