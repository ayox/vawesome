import React from 'react'

export default function IconLinkCmp({ href, children }) {
  return (
    <a className="block flex items-center text-gray-500 hover:text-gray-700 mr-5" href={href}>
      {children}
    </a>
  )
}
