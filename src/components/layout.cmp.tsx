import React from 'react'
import HeaderCmp from './header.cmp'
import FooterCmp from './footer.cmp'

export default function LayoutCmp(props) {
  return (
    <div className="h-screen">
      <HeaderCmp />
      <div className="p-5 mb-20">{props.children}</div>
      <FooterCmp />
    </div>
  )
}
