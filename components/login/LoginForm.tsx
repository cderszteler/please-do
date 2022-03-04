import {LockClosedIcon} from '@heroicons/react/solid'
import Image from 'next/image'

export default function LoginForm() {
  return (
    <div className="max-w-md flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
      <div className="w-full space-y-8">
        <div>
          <div className="relative mx-auto h-16 w-auto">
            <Image
              src="/favicon.svg"
              layout="fill"
              alt="Icon"
            />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white text-white bg-gradient-to-r from-teal-400 to-cyan-500 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-50"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true"/>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}