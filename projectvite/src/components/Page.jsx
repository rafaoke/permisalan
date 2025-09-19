const Layout = () => {
  return (
    <>
      <nav className="bg-maroon px-6 md:px-32 py-6 flex items-center justify-between relative">
        <h1 className="text-white font-bold">LOGO</h1>
        <label htmlFor="menu-toggle" className="text-white text-3xl cursor-pointer md:hidden">
          ☰
        </label>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <ul className="flex flex-col md:flex-row absolute md:static bg-maroon md:bg-transparent left-0 w-full md:w-auto top-16 md:top-auto text-center md:text-left text-white font-bold gap-y-6 md:gap-x-10 py-6 md:py-0 hidden peer-checked:flex md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <header className="flex flex-col md:flex-row px-6 md:px-32 py-20 justify-between items-center bg-maroon">
        <section className="text-white max-w-xl text-center md:text-left">
          <h1 className="font-Josefin text-[40px] md:text-[70px] font-bold leading-tight">
            There’s a <br className="hidden md:block" /> better way to <br className="hidden md:block" /> grow
          </h1>
          <p className="font-Josefin text-lg mt-6 max-w-md leading-relaxed mx-auto md:mx-0">
            Are you having a hard time growing your online business? Our team can help.
          </p>
          <button className="btn-primary mt-6">GET STARTED</button>
        </section>
        <section className="mt-10 md:mt-0">
          <img src="landing.svg" alt="" />
        </section>
      </header>

      <section className="font-Josefin px-6 md:px-32 py-20 bg-maroon">
        <h1 className="text-white font-bold text-xl mb-6 text-center md:text-left">FEATURED ON</h1>
        <section className="bg-lightmaroon rounded-[20px] py-10 px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-white font-bold text-xl">LOGO HERE</h1>
          <h1 className="text-white font-bold text-xl">LOGO HERE</h1>
          <h1 className="text-white font-bold text-xl">LOGO HERE</h1>
          <h1 className="text-white font-bold text-xl">LOGO HERE</h1>
        </section>
      </section>

      <section className="font-Josefin text-center pt-[100px] pb-[350px] px-6 bg-maroon">
        <h1 className="text-white font-bold text-[32px] md:text-[40px] mb-6">
          Discover new <br /> business strategies
        </h1>
        <p className="text-white font-bold text-[16px] md:text-[20px]">
          Thousands of startups trust us with our effective and efficient{" "}
          <br className="hidden md:block" /> business techniques
        </p>
        <button className="btn-primary mt-6">ABOUT US</button>
      </section>

      <section className="font-Josefin bg-darkmaroon flex flex-col md:flex-row justify-between items-center px-6 md:px-32 py-40 gap-12">
        <section>
          <img src="img1.png" alt="" className="md:-mt-[300px]" />
        </section>
        <section className="text-center md:text-left">
          <h1 className="text-white font-bold text-[40px] md:text-[70px] mb-6 md:mr-[200px]">
            We take our <br /> work seriously
          </h1>
          <p className="text-white font-normal text-[16px] md:text-[20px]">
            Wasting time is not in our vocabulary. You can{" "}
            <br className="hidden md:block" /> expect to get effective results in no time.
          </p>
          <button className="btn-primary mt-6">CONTACT US</button>
        </section>
      </section>

      <section className="font-Josefin bg-darkmaroon flex flex-col md:flex-row justify-between items-center px-6 md:px-32 py-40 gap-12">
        <section className="text-center md:text-left">
          <h1 className="text-white font-bold text-[40px] md:text-[70px] mb-6 md:mr-[200px]">
            Grow your <br /> business fast
          </h1>
          <p className="text-white font-normal text-[16px] md:text-[20px]">
            We understand how hard it is to grow a <br className="hidden md:block" /> business. That’s why we’re here to
            do it for you.
          </p>
          <button className="btn-primary mt-6">CONTACT US</button>
        </section>
        <section>
          <img src="img2.png" alt="" />
        </section>
      </section>

      <section className="bg-maroon pb-[150px]">
        <section className="py-[150px] text-center px-6">
          <h1 className="font-Josefin text-white font-bold text-[20px]">Testimonials</h1>
          <h1 className="font-Josefin text-white font-bold text-[40px] md:text-[60px]">
            Read what others <br /> say about us
          </h1>
        </section>
        <section className="flex justify-center items-center bg-[#680000] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#800000] rounded-lg p-6 max-w-xs text-center text-white shadow-lg">
              <div className="flex justify-center">
                <img
                  src="orang1.png"
                  alt="profile"
                  className="w-24 h-24 rounded-full border-4 border-[#680000] -mt-16 bg-white"
                />
              </div>
              <h1 className="mt-4 font-bold text-lg tracking-wide">RON WILLIAMS</h1>
              <p className="mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a leo lacus. Sed ac libero nibh. Etiam
                porttitor eros nec nunc aliquet, a sollicitudin ipsum hendrerit.
              </p>
            </div>

            <div className="bg-[#800000] rounded-lg p-6 max-w-xs text-center text-white shadow-lg">
              <div className="flex justify-center">
                <img
                  src="orang2.png"
                  alt="profile"
                  className="w-24 h-24 rounded-full border-4 border-[#680000] -mt-16 bg-white"
                />
              </div>
              <h1 className="mt-4 font-bold text-lg tracking-wide">ANNA PHILS</h1>
              <p className="mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel risus ac nisi viverra tincidunt.
                Nulla facilisi.
              </p>
            </div>

            <div className="bg-[#800000] rounded-lg p-6 max-w-xs text-center text-white shadow-lg">
              <div className="flex justify-center">
                <img
                  src="orang3.png"
                  alt="profile"
                  className="w-24 h-24 rounded-full border-4 border-[#680000] -mt-16 bg-white"
                />
              </div>
              <h1 className="mt-4 font-bold text-lg tracking-wide">MARY MADISON</h1>
              <p className="mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="text-center text-white font-Josefin bg-darkmaroon py-[150px] px-6">
        <h1 className="text-[20px]">THE BEGINNING</h1>
        <h1 className="text-[40px] md:text-[60px]">
          Get ready as your <br /> journey to success <br /> starts here
        </h1>
        <button className="btn-primary mt-6">GET STARTED</button>
      </section>

      <footer className="bg-maroon py-[70px] px-6 md:px-32">
        <section className="flex flex-col md:flex-row md:justify-between gap-10 text-left font-Josefin">
          <div className="text-white">
            <h1 className="font-bold mb-4">LOGO</h1>
          </div>
          <div>
            <h1 className="text-white font-bold mb-4">Navigation</h1>
            <ul className="text-white space-y-3">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-bold mb-4">Contact</h1>
            <ul className="text-white space-y-3">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-bold mb-4">Address</h1>
            <p className="text-white leading-relaxed">
              3807 Geneva Street <br />
              Brooklyn, New York
            </p>
          </div>
          <div>
            <h1 className="text-white font-bold mb-4">Newsletter</h1>
            <div className="flex items-center bg-lightmaroon rounded-s-xl rounded-r-3xl overflow-hidden w-full max-w-sm shadow-lg shadow-black/30">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-4 py-2 text-white placeholder-white focus:outline-none"
              />
              <button className="bg-white text-maroon px-4 py-2 rounded-r-3xl hover:shadow-md hover:shadow-maroon/50 transition">
                ➤
              </button>
            </div>
          </div>
        </section>
      </footer>

      <div className="bg-darkmaroon py-4 text-center">
        <p className="text-white text-sm md:text-base font-Josefin">
          Copyright © 2025 Logo. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Layout;
