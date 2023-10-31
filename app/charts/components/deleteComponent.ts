import { useQuery } from 'react-query';

export  function deleteComponent(url: string) {
  const { isLoading, isError, data, error } = useQuery('deleteWebsite', async () => {
    const response = await fetch(`http://localhost:8000/delete-website/${url}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  });

 

  

  
}


