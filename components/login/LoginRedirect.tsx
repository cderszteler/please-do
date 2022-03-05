import {LockClosedIcon} from "@heroicons/react/solid";

export default function LoginRedirect() {
  return (
    <div className="max-w-lg w-80">
      <a
        onClick={() => undefined}
        href="api/auth/login"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white text-white bg-gradient-to-r from-teal-400 to-cyan-500 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:-translate-y-0.5 hover:scale-105 hover:cursor-pointer transition ease-in-out delay-50"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true"/>
        </span>
        Sign in
      </a>
    </div>
  )
}