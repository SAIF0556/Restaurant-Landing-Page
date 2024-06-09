// src/components/ErrorComponent.jsx
import React from 'react'

const ErrorComponent = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-red-100 text-center rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-red-600">Error</h1>
      <p className="text-xl mt-4 text-red-800">{message}</p>
      <p className="mt-2 text-green-800">
        Please try again or contact support if the issue persists.
      </p>
    </div>
  )
}

export default ErrorComponent
