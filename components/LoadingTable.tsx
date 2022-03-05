import Table from "./Table";
import LoadingCircle from "./LoadingCircle";
import React from 'react'

interface LoadingTableProperties {
  columns: string[]
}

export default function LoadingTable(properties: LoadingTableProperties) {
  return (
    <React.Fragment>
      <div className="blur-[0.5px]">
        <Table columns={properties.columns} actions={[]}><></></Table>
      </div>
      <div className="absolute top-0 z-10 w-full h-full flex justify-center">
        <LoadingCircle attributes="z-100 w-16 h-16 text-gray-200 dark:text-gray-200 fill-gray-400 mt-20"/>
      </div>
    </React.Fragment>
  )
}