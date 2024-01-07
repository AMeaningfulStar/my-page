import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 w-full text-gray-600 body-font border-b">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <div className="w-8 p-2 flex justify-center items-center aspect-square bg-[#EF9688] rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 69 69"
              fill="none"
            >
              <path
                d="M34.4115 0L25.8086 25.8086H0L21.5072 43.0144L12.9043 68.823L34.4115 51.6172L55.9187 68.823L47.3158 43.0144L68.823 25.8086H43.0144L34.4115 0Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="ml-3 text-xl">From a Star</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
          <Menu to="/" title="Home" />
          <Menu to="/resume" title="Resume" />
          <Menu to="/portfolio" title="Portfolio" />
          <Menu to="/none" title="Github" />
          <Menu to="/none" title="Velog" />
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
