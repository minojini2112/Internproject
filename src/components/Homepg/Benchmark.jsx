const Benchmark = () => {
    return (
      <div className="mx-auto 2xl:container">
        <div className="w-[80%] mx-auto grid  grid-cols-2 p-[20px]  border border-orange-600 mt-10 pl-10 rounded-xl">
          <div className="flex flex-col items-start mt-3 gap-y-7">
            <div>
              <p className="flex p-3 text-white bg-purple-600 rounded-3xl h-[30px] justify-center items-center ">
                New<span className="material-symbols-outlined">star</span>
              </p>
            </div>
            <div>
              <p className="font-sans text-4xl font-bold leading-30">Benchmark Against Your Competitors</p>
            </div>
            <div>
              <p className="text-lg text-gray-500 leading-50">
                You need to Understand what your competitors do in the influencer
                marketing space to stay ahead of the competition.. Qoruz helps you
                compete, get an edge in the market, and make intelligent decisions
                with competitor intelligence
              </p>
            </div>
            <div>
              <button className="flex items-center justify-center font-semibold text-orange-600 bg-gray-100 border border-orange-600 rounded-xl h-[50px] p-2">
                View Sample Report<span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
          </div>
          <div>
            <img src="https://ik.imagekit.io/mino2112/biglinkz%20intern/Screenshot%202024-09-19%20144820.png?updatedAt=1726737533596" alt="image" />
          </div>
        </div>
      </div>
    );
  };
export default Benchmark;