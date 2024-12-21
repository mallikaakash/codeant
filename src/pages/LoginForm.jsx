import React from 'react'

function LoginForm() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">Repositories</h1>
          <p className="text-sm text-gray-500">33 total repositories</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 md:flex-initial">
            <input
              type="text"
              placeholder="Search repositories..."
              className="max-w-xs p-2 border rounded"
            />
          </div>
          <button className="shrink-0 flex items-center p-2 bg-blue-500 text-white rounded">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Repository
          </button>
        </div>
      </div>
      <div className="rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-[400px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Repository
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {repositories.map((repo) => (
              <tr key={repo.name}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="font-medium">{repo.name}</span>
                    <span className="text-sm text-gray-500">{repo.language}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{repo.size}</td>
                <td className="px-6 py-4 whitespace-nowrap">{repo.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoginForm
