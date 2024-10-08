const Navbar = () => {
  return (
    <>
    <div className="hidden mx-auto 2xl:container" id="headermd">
        <div className="mx-auto w-[97%] md:w-[90%] grid grid-cols-1 ">
          <div className="flex justify-between my-2">
            <div>
              <h2 className="text-3xl font-bold">BigLinkz</h2>
            </div>
            <div>
              <button onClick={() => {
                    document.getElementById("headermd").classList.toggle("hidden");
                    document.getElementById("menu-btn").classList.toggle("hidden");
                    document.getElementById("main-head").classList.toggle("hidden");
                    console.log(document.getElementById("main-head").classList);
                    
                  }}>
                <span
                  className="material-symbols-outlined"
                  
                >
                  close
                </span>
              </button>
            </div>
          </div>
          <div className="mt-5 space-y-5">
            <div className="flex justify-between border-b border-gray-500">
              <div>For Brands</div>
              <div>
                <button>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-between border-b border-gray-500">
              <div>For Agencies</div>
              <div>
                <button>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-between border-b border-gray-500">
              <div>Product</div>
              <div>
                <button>
                  <span className="text-orange-600 material-symbols-outlined ">
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-between border-b border-gray-500">
              <div>Resources</div>
              <div>
                <button>
                  <span className="text-orange-600 material-symbols-outlined ">
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-between border-b border-gray-500">
              <div>Pricing</div>
              <div>
                <button>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-40">
            <button className="flex items-center justify-center p-3 px-10 font-bold text-white bg-orange-500 border border-red-500 rounded-xl hover:shadow-orange-100 hover:shadow-xl">
              Request a Demo
              <span className="material-symbols-outlined">north_east</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;