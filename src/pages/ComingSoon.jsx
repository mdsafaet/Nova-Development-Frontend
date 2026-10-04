import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <section className="rb:flex rb:min-h-[75vh] rb:items-center rb:justify-center rb:bg-[rgb(245,243,237)] rb:px-6 rb:py-24 rb:text-center">
      <div className="rb:mx-auto rb:max-w-2xl">
        <p className="rb:mb-5 rb:text-sm rb:font-semibold rb:tracking-[0.3em] rb:text-[rgb(22,29,64)] rb:uppercase">
          Nova Bangladesh
        </p>

        <h1 className="rb:m-0 rb:text-5xl rb:font-bold rb:leading-tight rb:text-[rgb(22,29,64)] rb:sm:text-7xl">
          We are
          <br />
          <span>coming soon.</span>
        </h1>

        <div
          aria-hidden="true"
          className="rb:mx-auto rb:my-8 rb:h-px rb:w-20 rb:bg-[rgb(22,29,64)]/30"
        />

        <p className="rb:mb-10 rb:text-lg rb:leading-8 rb:text-[rgb(22,29,64)]/75">
          Our Bangladesh website is taking shape. Soon, you’ll be able to
          explore local projects and connect with our Dhaka team.
        </p>

        <div className="rb:flex rb:flex-wrap rb:justify-center rb:gap-4">
          <Link
            to="/"
            className="rb:inline-flex rb:items-center rb:justify-center rb:rounded-full rb:bg-[rgb(22,29,64)] rb:px-6 rb:py-3 rb:font-semibold rb:text-white rb:no-underline rb:transition-colors rb:hover:bg-[rgb(22,29,64)]/90 rb:focus-visible:outline-2 rb:focus-visible:outline-offset-4 rb:focus-visible:outline-[rgb(22,29,64)]"
          >
            Back to home
          </Link>

          <Link
            to="/contact"
            className="rb:inline-flex rb:items-center rb:justify-center rb:rounded-full rb:bg-[rgb(22,29,64)] rb:px-6 rb:py-3 rb:font-semibold rb:text-white rb:no-underline rb:transition-colors rb:hover:bg-[rgb(22,29,64)]/90 rb:focus-visible:outline-2 rb:focus-visible:outline-offset-4 rb:focus-visible:outline-[rgb(22,29,64)]"
          >
            Contact our team
          </Link>
        </div>
      </div>
    </section>
  );
}