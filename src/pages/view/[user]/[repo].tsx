import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../../components/Layout'

export async function getStaticProps({ params }) {
  const { user, repo } = params
  const res = await fetch(getReadMe(user, repo))
  const md = await res.text()
  return {
    props: {
      awesomeList: convertMDtoJSON(md),
    },
  }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

function convertMDtoJSON(md) {
  const titles = []

  let temp = md

  do {
    let item = temp.indexOf('##')
    const name = temp.substring(item + 3, temp.indexOf('\n', item))
    temp = temp.replace('##', '')

    let items = temp
      .substring(item, temp.indexOf('##'))
      .split('\n')
      .filter((x) => x.indexOf('-') === 0)
      .map((item) => {
        const url = item.substring(item.indexOf('(') + 1, item.indexOf(')'))
        const name = item.replace('[', '').replace(']', '').replace('-', '').replace(`(${url})`, '').trim()
        return {
          url,
          name,
        }
      })
    titles.push({ name, items })
  } while (temp.indexOf('##') !== -1)

  return titles
}

function getReadMe(user, repo) {
  return `https://raw.githubusercontent.com/${user}/${repo}/master/README.md`
}

export default function Repo({ awesomeList }: any) {
  const router = useRouter()
  const { user, repo } = router.query
  return (
    <Layout>
      <div className="px-24 w-full flex justify-center flex-col">
        <code className="bg-gray-200 text-center p-2 ml-2">
          {user}/{repo}
        </code>
        <AwesomeList list={awesomeList} />
      </div>
    </Layout>
  )
}
const classNameHover = `bg-gradient-to-r from-blue-400  to-orange-500 via-purple-500 animate-gradient-x`

function AwesomeList({ list }) {
  if (!list) return <div />
  return (
    <div className="mt-4">
      {list.map((title) => (
        <div className="mb-4" key={title.name}>
          <div className="mb-4" id={title.name.toLowerCase().trim().split(' ').join('-')}>
            <h1 className="font-extrabold uppercase text-3xl text-gray-900">{title.name}</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {title.items.map(({ name, url }) => (
              <Item name={name} url={url} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Item({ name, url }) {
  return (
    <a href={url}>
      <div
        className={`text-center border border-gray-200  hover:text-white text-gray-900 hover:shadow p-5 bg-gray-100 rounded-lg item`}
        key={name}
      >
        <h4 className="text-lg tracking-wider">{name.trim()}</h4>
      </div>
    </a>
  )
}
