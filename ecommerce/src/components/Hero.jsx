import Avatar from "../assets/Avatar.png";

const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];

const Hero = () => {
  return (
    <section className='bg-white grid gap-2 lg:grid-cols-[1fr_3fr_1fr] border border-gray-200 shadow-sm py-4'>
      {/* Left categories */}
      <div className="">
        <ul className="divide-y divide-gray-100">
          {categories.map((item, index) => {
            const isActive = index === 0;
            return (
              <li key={item}>
                <button className={`block w-full text-left px-4 py-3 text-sm  font-medium transition ${isActive ? "bg-blue-50 text-gray-900  " : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          })}
       
        </ul>
      </div>

      {/* Middle hero banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('./src/assets/middle-hero-image.png')] bg-cover bg-no-repeat bg-center " aria-hidden>
            <div className="relative grid h-full grid-cols-1 gap-4 p-8 sm:grid-cols-2">
              <div className="flex flex-col pt-16">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                  Latest trending
                </p>
                <h2 className="text-3xl font-bold leading-tight text-gray-900">
                  Electronic items
                </h2>
                <button className="w-max mt-4 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:shadow">
                  Learn more
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right column cards */}
      <div className="space-y-2 pe-2">
        <div className="rounded border border-gray-200 bg-blue-50 shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full">
              <span className="text-lg font-semibold">
                <img src={Avatar} alt="" />
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">Hi, user</p>
              <p className="text-xs text-gray-500">let's get stated</p>
            </div>
          </div>
          <div className="space-y-2 p-2">
            <button className="w-full rounded-md bg-blue-500 px-2 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
              Join now
            </button>
            <button className="w-full rounded-md border border-gray-200 px-2 py-2 text-sm font-semibold text-blue-600 bg-white transition hover:border-blue-200 hover:bg-blue-50">
              Log in
            </button>
          </div>
        </div>

        <div className="rounded border border-gray-200 bg-[#f38332] text-white shadow-sm">
          <div className=" px-4 py-5 text-sm">
            <p className="font-semibold">Get US $10 off</p>
            <p>with a new
            <br />  supplier</p>
          </div>
        </div>

        <div className="rounded border border-gray-200 bg-[#55bdc3] text-white shadow-sm">
          <div className="px-4 py-8 text-sm">
            <p className="font-semibold">Send quotes with</p>
            <p>supplier</p>
            <p>preferences</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
