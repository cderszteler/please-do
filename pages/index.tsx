import React from "react"
import LoginContainer from "../components/login/LoginContainer";
import LoginRedirect from "../components/login/LoginRedirect";
import {getSession} from "@auth0/nextjs-auth0";

export default function IndexPage() {
  return (
    <LoginContainer>
      <LoginRedirect/>
    </LoginContainer>
  )
}

export async function getServerSideProps(context: { req: any; res: any; }) {
  const session = getSession(context.req, context.res);
  if (session) {
    return {
      redirect: {
        destination: '/todo',
        permanent: false
      }
    }
  }
  return { props: {}}
}