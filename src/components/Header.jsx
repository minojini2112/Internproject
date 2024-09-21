import Navbar from "./Navbar";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
      <div className="mx-auto 2xl:container">
        <div className="w-[99%] mx-auto flex justify-around pt-4 items-center md:w-[90%]" id="main-head">
          <div>
            <img></img>
            <h2 className="text-3xl font-bold">BigLinkz</h2>
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-center gap-x-10">
              <li><Link to="Brand">For Brands</Link></li>
              <li><Link to="Agencies">For Agencies</Link></li>
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
              <li><Link to="Pricing">Pricing</Link></li>
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
            <button
              onClick={() => {
                document.getElementById("headermd").classList.toggle("hidden");
                document.getElementById("menu-btn").classList.toggle("hidden");
                document.getElementById("main-head").classList.toggle("hidden");
                console.log(document.getElementById("main-head").classList);
              }}
            >
              <span className="material-symbols-outlined">menu_open</span>
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Header;
