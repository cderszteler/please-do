export default function TodoInput() {
  return (
    <div className="py-2 max-w-6xl sm:px-6 sm:min-w-[38rem] lg:px-8 lg:min-w-[64rem] xl:min-w-[72rem]">
      <textarea
        className="
          w-full min-h-[3rem] resize-y
          shadow border-b border-gray-200 sm:rounded-lg
          focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none focus:ring-gray-300
        "
        id="id"
        placeholder="Your task"
      />
    </div>
  )
}