'use client'


import { Button } from "@/components/ui/button";
import { WebsiteManage } from "@/components/ui/website";
import { useRouter } from "next/navigation";
import { Metadata } from "next"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import KababMenu from "../charts/components/kbab";
import { Anybody } from "next/font/google";
import { useQuery } from "react-query";

export default function AddWebsite() {
    let isloading: boolean = false
    const router = useRouter();
    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationDate");
        router.push('/login')

    }
    function goTo() {
        router.push('/')
    }


    const [websites, setWebsites] = useState(['']);

    const handleEdit = (id: any) => {
        console.log("Edit");

    }

    const fetchData = async (itemurl :any) => {
        const response = await  fetch(`http://localhost:8000/delete-website/${itemurl}`);
        return response.json();
    }
     function handleDelete(itemurl: string) {
        fetchData(itemurl)
        setWebsites(websites.filter((item :any) => item.url != itemurl))
       
       
}

    if (websites[0] === '') {
        // Fetch websites when the component mounts
        axios
            .get('/api/website')
            .then((response) => {
                // Update the state with the fetched websites
                setWebsites(response.data);
            })
            .catch((error) => {
                console.error('Error fetching websites:', error);
            });
    }


    let listItems =
        websites?.map((item :any, index: number) => (
            <TableRow key={index}>

                <TableCell className="font-medium">{index}</TableCell>
                <TableCell>{item.url}</TableCell>

                <TableCell className="text-right"><KababMenu
                    onEdit={() => handleEdit(item._id)}
                    onDelete={() => handleDelete(item.url)}
                /></TableCell>

            </TableRow>
        ));



    // let listItems =
    //      websites?.map((item, index: number) => (
    //     <tr key={index}>
    //       <td>{index}</td>
    //       <td>{item.url}</td>
    //       <td>

    //       <KababMenu
    //                 onEdit={() => handleEdit(item._id)}
    //                 onDelete={() => handleDelete(item.url)}
    //             />
    //       </td>
        
    //     </tr>
    //   ))


    return <>

        <div className=" flex-col md:flex">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className=" flex-col md:flex">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Add Website</h2>
                        <div className="flex items-center space-x-2">
                            <Button onClick={goTo}>Web Analyzer</Button>
                            <Button onClick={logout}>Logout</Button>
                        </div>

                    </div>

                </div>
               
                <WebsiteManage  setWebsites={setWebsites} />
            </div>
            

     
            
        </div>


        <Table>
          <TableCaption>A list of your Search.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Article</TableHead>
              <TableHead>Name</TableHead>
             
              

              <TableCell>
              <TableHead>
          </TableHead>
          </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>{listItems}</TableBody>
        </Table>



        {/* <table>
      <thead>
        <tr>
          <th>NUM</th>
          <th>Website</th>
          
        </tr>
      </thead>
      <tbody>
      {listItems}
      </tbody>
    </table> */}
        

        
    </>
}

