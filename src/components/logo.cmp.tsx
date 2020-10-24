import React from 'react'

export default function LogoCmp(props) {
  return (
    <a href="/" className="flex title-font font-medium items-center text-gray-900 px-4 py-2 rounded-full mb-4 md:mb-0 item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 23-5-10-5zM2 17l10 5 23-5M2 12l10 5" />
      </svg>
      <div className="ml-3 text-xl uppercase">
        <span className="text-red-500">V</span>Awesome
      </div>
    </a>
  )
}
