const Header = () => {
  return (
    <div className="mx-auto 2xl:container">
      <div className="w-[90%] mx-auto flex justify-around pt-4 items-center">
        <div>
          <img></img>
          <h2 className="text-3xl font-bold ">BigLinkz</h2>
        </div>
        <div>
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
        <div className="flex justify-end gap-4">
          <button className="flex items-center justify-center p-3 px-10 font-bold text-orange-600 border border-red-500 bg-red-50 rounded-xl hover:shadow-orange-50 hover:shadow-xl">
            Login
            <span className="material-symbols-outlined">north_east</span>
          </button>
          <button className="flex items-center justify-center p-3 px-10 font-bold text-white bg-orange-500 border border-red-500 rounded-xl hover:shadow-orange-100 hover:shadow-xl">
            Book a Demo
            <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
