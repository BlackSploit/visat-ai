export default function Footer() {
  return (
    <footer
      data-theme="dark"
      className="relative z-10  text-white py-12 px-4 sm:px-8 md:px-16"
    >
      {/* Glass Container */}
      <div
        className="
          relative z-10
          max-w-[1400px] mx-auto
          px-6 sm:px-10 md:px-16 py-12
          flex flex-col items-center justify-center
          rounded-md
          backdrop-blur-[40px]
          bg-white/15
          text-center
        "
      >
        {/* Main Section */}
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          {/* Text Section */}
          <div className="max-w-3xl">
            <h2 className="text-6xl fs1 [word-spacing:0.1em] md:text-4xl lg:text-8xl font-primary mb-4 font-normal">
              Visit Our Campus
            </h2>

            <p className="text-md text-white">
              Discover VISAT Engineering College — a nationally recognized center
              of excellence built on innovation, integrity, and academic
              leadership. Explore our campus, meet our faculty, and experience an
              environment designed to shape future engineers.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Gradient Button */}
              <a
                href="https://visat.in/CampusTour/index.html"
                className="
    flex items-center justify-center gap-3
    h-12 pl-2 pr-6
    rounded-full
    text-white
    bg-[linear-gradient(181deg,rgb(107,42,129)_0%,rgb(97,0,130)_100%)]
    hover:brightness-110
    transition
  "
              >
                {/* Play Icon */}
                <span className="
    flex items-center justify-center
    w-8 h-8
    rounded-full
    bg-white/20
    backdrop-blur
  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                  >
                    <path d="M12.8297 7.18077L5.57346 2.10142C4.91069 1.63748 4 2.11163 4 2.92066V13.0793C4 13.8884 4.91069 14.3625 5.57346 13.8986L12.8297 8.81923C13.3984 8.42113 13.3984 7.57887 12.8297 7.18077Z" />
                  </svg>
                </span>

                {/* Text */}
                <span className="whitespace-nowrap btn_main_text">
                  Explore the Campus Experience
                </span>
              </a>


              {/* Bordered Button */}
              <a
                href="https://visat.in/admission.html"
                className="
                  relative z-20
                  flex items-center justify-center gap-2
                  w-full sm:w-auto
                  h-12 px-6
                  rounded-full
                  border border-white/30
                  bg-white
                  text-black
                  hover:bg-gray-200
                  transition
                "
              >
                <span className="btn_main_text">
                  Explore Our Programs
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.facebook.com/VISAT.Ernakulam/"
            target="_blank"
            className="text-white hover:text-blue-500 transition"
          >
            {/* Facebook SVG */}
          </a>
          <a
            href="https://www.instagram.com/visat.ernakulam"
            target="_blank"
            className="text-white hover:text-pink-500 transition"
          >
            {/* Instagram SVG */}
          </a>
          <a
            href="https://www.linkedin.com/school/visat/"
            target="_blank"
            className="text-white hover:text-blue-400 transition"
          >
            {/* LinkedIn SVG */}
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/20 mt-10 pt-4 text-center opacity-70 text-sm">
          <p>© {new Date().getFullYear()} VISAT Engineering College</p>
          <a
            href="https://www.algonsolutions.com/"
            target="_blank"
            className="block mt-1 hover:underline"
          >
            Developed by Algon Solutions
          </a>
        </div>
      </div>
    </footer>
  )
}
