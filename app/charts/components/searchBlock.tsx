import React from "react";
import { useQuery } from "react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";




interface Item {
  postID: number;
  description: string;
  wordCount: number;
}

const fetchData = async (valueinput: string): Promise<Item[]> => {
  console.log(valueinput);
  if (!valueinput.trim()) return [];
  const response = await fetch(`http://127.0.0.1:8000/articles/${valueinput}`);
  return response.json();
};

interface SerchDisplayProps {
  valueinput: string;
}

export function SerchDisplay({ valueinput }: SerchDisplayProps): JSX.Element {
  const { data, isLoading, isError } = useQuery<Item[]>(
    ["searchblock", valueinput],
    () => fetchData(valueinput),
    {
      enabled: !!valueinput,
      refetchOnWindowFocus: false,
    }
  );
function handleEdit()
{
return
}
function handleDelete()
{
return
}
  const listItems = !isLoading
    ? data?.map((item, index: number) => (
      <TableRow key={index}>
        <TableCell className="font-medium">{index}</TableCell>
        <TableCell>{item.postID}</TableCell>
        <TableCell>{item.description}</TableCell>
        <TableCell className="text-right">{item.wordCount}</TableCell>
      </TableRow>
    ))
    : [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }
  if (data) {
    return (
      <>
        <Table>
          <TableCaption>A list of your Search.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Article</TableHead>
              <TableHead>PostID</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right" >WordCount</TableHead>

              <TableCell>
              <TableHead>
          </TableHead>
          </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>{listItems}</TableBody>
        </Table>
      </>
    );
  }
  else
    return <>
    </>

}
