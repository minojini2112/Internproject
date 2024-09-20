const Workspace = () => {
    return (
    <div className="mx-auto 2xl:container ">
      <div className="w-[80%] mx-auto flex justify-center items-center p-[20px]  border border-orange-600 mt-10 pl-10 rounded-xl flex-col gap-y-4">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold w-[80%] mt-5 text-center">One Workspace for All Your Influencer Marketing Campaigns</h2>
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
        <div className="grid grid-cols-2">
          <div>
            <button>
              <img src="" />
              <div>
                <p>For Brands</p>
                <p>
                  Get deep insights, visibility into influencer campaigns and fuel
                  your brand growth from day one.
                </p>
              </div>
              <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
          <div>
            <button>
              <img src="" />
              <div>
                <p>For Agencies</p>
                <p>
                  When being smarter than your client is essential, Qoruz keeps
                  you ahead of the curve.
                </p>
              </div>
              <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default Workspace;