import React from "react";

interface TableProperties {
  columns: string[]
  actions: string[]
  children: React.ReactNode
}

export default function Table(properties: TableProperties) {
  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto sm:overflow-x-hidden">
        <div className="py-2 align-middle inline-block min-w-min max-w-6xl sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                {properties.columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-6 py-3 text-left text-m font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column}
                  </th>
                ))}
                <th scope="col" className="relative px-6 py-3">
                  {properties.columns.map((action) => (
                    <span key={action} className="sr-only">action</span>
                  ))}
                </th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {properties.children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}