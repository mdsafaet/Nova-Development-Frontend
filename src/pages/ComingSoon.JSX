import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <section className="rb:flex rb:min-h-[75vh] rb:items-center rb:justify-center rb:bg-[#0D1833] rb:px-6 rb:py-24 rb:text-center">
      <div className="rb:mx-auto rb:max-w-2xl">
        <p className="rb:mb-5 rb:text-sm rb:font-semibold rb:tracking-[0.3em] rb:text-[#C9A96E] rb:uppercase">
          Nova Bangladesh
        </p>

        <h1 className="rb:m-0 rb:text-5xl rb:font-bold rb:leading-tight rb:text-white rb:sm:text-7xl">
          We are
          <br />
          <span className="rb:text-[#C9A96E]">coming soon.</span>
        </h1>

        <div
          aria-hidden="true"
          className="rb:mx-auto rb:my-8 rb:h-px rb:w-20 rb:bg-[#C9A96E]"
        />

        <p className="rb:mb-10 rb:text-lg rb:leading-8 rb:text-[#E2E6EF]">
          Our Bangladesh website is taking shape. Soon, you’ll be able to
          explore local projects and connect with our Dhaka team.
        </p>

        <div className="rb:flex rb:flex-wrap rb:justify-center rb:gap-4">
          <Link
            to="/"
            className="rb:inline-flex rb:rounded-full rb:bg-[#C9A96E] rb:px-6 rb:py-3 rb:font-semibold rb:text-[#0D1833] rb:no-underline rb:transition-colors rb:hover:bg-[#DEC393] rb:focus-visible:outline-2 rb:focus-visible:outline-offset-4 rb:focus-visible:outline-[#C9A96E]"
          >
            Back to home
          </Link>

          <Link
            to="/contact"
            className="rb:inline-flex rb:rounded-full rb:border rb:border-solid rb:border-[#C9A96E] rb:px-6 rb:py-3 rb:font-semibold rb:text-[#C9A96E] rb:no-underline rb:transition-colors rb:hover:bg-[#C9A96E]/10 rb:focus-visible:outline-2 rb:focus-visible:outline-offset-4 rb:focus-visible:outline-[#C9A96E]"
          >
            Contact our team
          </Link>
        </div>
      </div>
    </section>
  );
}