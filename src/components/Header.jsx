
    


const Header = () => {
  
  return (
    <>
    <div className="mx-auto 2xl:container">
      <div className="w-[90%] mx-auto flex justify-around pt-4 items-center">
        <div>
          <img></img>
          <h2 className="text-3xl font-bold ">BigLinkz</h2>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-center gap-x-10">
            <li>For Brands</li>
            <li>For Agencies</li>
            <li className="flex items-center justify-center">
              Product
              <span className="text-orange-600 material-symbols-outlined ">
                keyboard_arrow_down
              </span>
            </li>
            <li className="flex items-center justify-center">
              Resources
              <span className="text-orange-600 material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="justify-end hidden gap-4 md:flex ">
          <button className="flex items-center justify-center p-3 px-10 font-bold text-orange-600 border border-red-500 bg-red-50 rounded-xl hover:shadow-orange-50 hover:shadow-xl">
            Login
            <span className="material-symbols-outlined">north_east</span>
          </button>
          <button className="flex items-center justify-center p-3 px-10 font-bold text-white bg-orange-500 border border-red-500 rounded-xl hover:shadow-orange-100 hover:shadow-xl">
            Book a Demo
            <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>
        <div className="md:hidden" id="menu-btn">
          <button onClick={()=>{
            document.getElementById("headermd").classList.toggle("hidden")
            document.getElementById("menu-btn").classList.add("hidden")
          }}>
            <span className="material-symbols-outlined">menu_open</span>
          </button>
        </div>
      </div>
      </div>
      <div className="hidden mx-auto 2xl:container" id="headermd">
      <div className="mx-auto w-[90%] grid grid-cols-1 ">
        <div className="flex justify-end">
          <button>
            <span className="material-symbols-outlined" onClick={
              ()=>{
                document.getElementById("headermd").classList.toggle("hidden")
                document.getElementById("menu-btn").classList.remove("hidden")
              }
            }>close</span>
          </button>
        </div>
        <div>
          <div>
            <div>For Brands</div>
            <div>
              <button>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div>
            <div>For Agencies</div>
            <div>
              <button>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div>
            <div>Product</div>
            <div>
              <button>
                <span className="text-orange-600 material-symbols-outlined ">
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </div>
          <div>
            <div>Resources</div>
            <div>
              <button>
                <span className="text-orange-600 material-symbols-outlined ">
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </div>
          <div>
            <div>Pricing</div>
            <div>
              <button>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

    
  );
};
export default Header;
