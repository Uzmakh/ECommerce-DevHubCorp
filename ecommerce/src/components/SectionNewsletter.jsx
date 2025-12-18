import { LuMail } from "react-icons/lu";

const SectionNewsletter = () => {
  return (
    <section>
      
      <div className="rounded bg-gray-100  py-10 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Subscribe on our newsletter
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <form className="mt-6 flex items-center gap-3 sm:flex-row sm:justify-center">
          <label htmlFor="email" className="relative w-full sm:w-80">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <LuMail className="h-5 w-5" />
            </span>
            <input type="email" name="email" id="email" placeholder="Email"
              className="w-full rounded border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition"/>
          </label>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition  sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default SectionNewsletter
