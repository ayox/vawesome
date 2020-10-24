import React, { useState } from 'react'
import { useRouter } from 'next/router'

const animateBgClass = 'bg-gradient-to-r from-blue-400  to-orange-500 via-purple-500 animate-gradient-x'

export default function HeroCmp() {
  const [value, setValue] = useState('')

  const router = useRouter()

  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <span className="text-red-500">View</span> your
            <span className={`bg-clip-text text-transparent ${animateBgClass}`}> Awesome </span>
            lists
          </h1>
          <p className="mb-8 leading-relaxed">
            A new to view awesome repositories, you can type your github link below to view the list of awesome things 😎.
          </p>
          <div className="flex w-full md:justify-start justify-center">
            <input
              className="bg-gray-100 rounded mr-4 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 lg:w-full  md:w-full"
              placeholder="e.g. https://github.com/aniftyco/awesome-tailwindcss"
              type="text"
              value={value}
              onChange={(event) => {
                setValue(event.target.value)
              }}
            />
            <button
              onClick={() => {
                router.push(`/view/${value.replace('https://github.com/', '')}`)
              }}
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              View
            </button>
          </div>
          <p className="mt-4 text-gray-500 text-sm">* things still under construction so expect bugs 🐛 around. </p>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://repository-images.githubusercontent.com/21737465/46445f80-a5ae-11ea-921f-c39aefbcdcac"
          />
        </div>
      </div>
    </section>
  )
}
