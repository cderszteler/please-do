import Head from 'next/head'
import React from 'react'
import Table from "./components/Table";
import TodoEntry from "./components/todo/TodoEntry";

export default function TodoPage() {
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content="Manage and view your current todos" />
      </Head>
      <Table columns={["Id", "Task", "Author"]}>

      </Table>
    </React.Fragment>
  )
}
