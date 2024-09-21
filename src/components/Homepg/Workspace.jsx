const Workspace = () => {
    return (
    <div className="mx-auto bg-orange-50 2xl:container ">
      <div className="w-[80%] mx-auto flex justify-center items-center p-[30px]  mt-10 pl-10 rounded-xl flex-col gap-y-4">
        <div className="flex items-center justify-center">
          <h2 className="text-5xl font-bold w-[80%] mt-5 text-center pt-10">One Workspace for All Your Influencer Marketing Campaigns</h2>
        </div>
        <div>
          <p className="text-gray-600">
            Time for you to leverage influencer intelligence platform and launch
            your influencer marketing campaigns.
          </p>
        </div>
        <div>
          <button className="flex gap-2 p-3 font-semibold text-white bg-orange-500 rounded-xl">
            Request For Demo<span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-x-7">
          <div className="flex border border-gray-400 hover:shadow-2xl rounded-3xl hover:border-gray-600 hover:shadow-orange-100">
            <button className="m-6">
             
            
              <div className="flex flex-col">
                <div className="flex justify-start">
                <p className="mb-3 text-2xl font-semibold">Influencer</p>
                </div>
                <div className="">
                <p className="text-gray-600">
                  Get deep insights, visibility into influencer campaigns and fuel
                  your brand growth from day one.
                </p>
                </div>
                
              </div>
              <div className="flex justify-end">
              <span className="text-orange-600 material-symbols-outlined">arrow_outward</span>
              </div>
            </button>
          </div>
          <div  className="flex border border-gray-400 rounded-3xl hover:border-gray-600 hover:shadow-2xl hover:shadow-orange-100">
            <button className="m-6">
              
              
              
              <div className="flex flex-col">
                <div className="flex justify-start">
                <p className="mb-3 text-2xl font-semibold">Brands</p>
                </div>
                <div>
                <p className="text-gray-600">
                  When being smarter than your client is essential, Qoruz keeps
                  you ahead of the curve.
                </p>
                </div>
                
              </div>
              <div className="flex justify-end">
              <span className="text-orange-600 material-symbols-outlined">arrow_outward</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default Workspace;