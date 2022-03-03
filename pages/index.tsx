import React from "react"

export default function IndexPage() {
  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}