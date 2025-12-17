import InquiryBg from "../assets/inquiryBg.png";

const SectionEnquiry = () => {
  return (
    <section className="mt-4 relative shadow-lg rounded border border-gray-200 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={InquiryBg}
          alt="A Blurry Building"
          className="h-full
         w-full object-cover"
        />
      </div>
      {/* Content */}

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:justify-between lg:px-12">
        {/* Left side */}
        <div className="max-w-[440px] space-y-4">
          <h2 className="text-xl font-semibold leading-tight sm:text-4xl text-white">
            An easy way to send requests to all suppliers
          </h2>
          <p className="text-base text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        {/* Right side-form */}
        <div className="bg-white w-full max-w-[490px] rounded p-6 text-gray-900 shadow-xl">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            Send quote to suppliers
          </h3>
          <form className="space-y-4">
            <div className="space-y-1">
              <input
                type="text"
                id="item-name"
                className="w-full border border-gray-400  px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
                placeholder="What item you need?"
              />
            </div>
            <div className="space-y-1">
              <textarea
                name="message"
                id="message"
                placeholder="Type more details"
                className="w-full resize-none  border border-gray-400  px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-[0.4fr_0.5fr] gap-3">
              <input
                type="number"
                id="quantity"
                min="0"
                placeholder="Quantity"
                className="border border-gray-400  px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
              />

              <select
                id="unit"
                defaultValue="pcs"
                className="rounded border border-gray-400 bg-white px-3 py-2 text-sm text-gray-400  outline-none"
              >
                <option value="pcs">Pcs</option>
                <option value="kg">Kg</option>
                <option value="box">Box</option>
                <option value="unit">Unit</option>
              </select>
            </div>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionEnquiry;
