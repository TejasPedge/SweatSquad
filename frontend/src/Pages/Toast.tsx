import React from 'react';
type ToastProps = {
  message: string;
  type: 'success' | 'warning' | 'error';
};

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  let backgroundColor = '';
  let textColor = '';

  switch (type) {
    case 'success':
      backgroundColor = 'bg-green-500';
      textColor = 'text-green-100';
      break;
    case 'warning':
      backgroundColor = 'bg-yellow-500';
      textColor = 'text-yellow-100';
      break;
    case 'error':
      backgroundColor = 'bg-red-500';
      textColor = 'text-red-100';
      break;
    default:
      backgroundColor = 'bg-gray-500';
      textColor = 'text-gray-100';
      break;
  }

  return (
    <div
      className={`fixed top-0 right-10 w-50 text-center m-4 p-4 rounded-md shadow-md ${backgroundColor} ${textColor}`}
    >
      <p>{message}</p>
    </div>
  );
};
export default Toast;






