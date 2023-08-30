import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyComponent = () => {
  const handleShowToast = () => {
    toast.success('This is a success message!', {
      position: 'top-right', // Position of the toast container
      autoClose: 3000,       // Duration to auto-close the toast (in milliseconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>
      <ToastContainer /> {/* This component renders the toast notifications */}
    </div>
  );
};

export default MyComponent;