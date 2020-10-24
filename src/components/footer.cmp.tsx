import React from 'react'
import LogoCmp from './logo.cmp'
import FooterLinksCmp from './footer-links.cmp'

export default function FooterCmp() {
  return (
    <footer className="fixed w-full bottom-0 bg-gray-100 text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <LogoCmp />
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} VAWESOME —
          <a href="https://twitter.com/lashuel" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
            @lashuel
          </a>
        </p>
      </div>
    </footer>
  )
}
