export const Hero = () => {
  const options=[
    {label:"Instagram",value:1,src:"https://ik.imagekit.io/mino2112/biglinkz%20intern/instagram.png?updatedAt=1726735129712 "},
    {label:"Youtube",value:2,src:"https://ik.imagekit.io/mino2112/biglinkz%20intern/youtube.png?updatedAt=1726736537983"},
    {label:"Twitter",value:3,src:"https://ik.imagekit.io/mino2112/biglinkz%20intern/twitter.png?updatedAt=1726736552620"},
    {label:"Facebook",value:4,src:"https://ik.imagekit.io/mino2112/biglinkz%20intern/social-media.png?updatedAt=1726736571305"}
  ]
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-20 2xl:container gap-y-3">
      <div>
        <button className="flex items-center justify-center p-2 text-sm font-semibold text-gray-700 border border-orange-100 rounded-3xl hover:shadow-orange-50 hover:shadow-xl gap-x-2">
          Rated 4.5 <span className="material-symbols-outlined">star</span>on G2
          Crowd <span className="material-symbols-outlined">arrow_outward</span>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-5xl leading-[70px] font-bold text-center w-[80%]">
          Data Driven Insights and Tools to Manage Influencer Marketing at Scale
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center w-[70%] text-gray-500">
          An award winning all in one platform to manage your influencer
          marketing efforts end to end. From campaign planning to influencer
          discovery, selection and tracking, Qoruz has it all.
        </p>
      </div>
      <div className="md:flex items-start justify-between p-3 border border-black rounded-xl w-[60%] hidden">
        <div>
          <button className="flex items-center justify-center text-gray-600 bg-gray-100 gap-x-2 rounded-3xl h-[40px] w-[150px]">
            <span><img  className="h-[20px] "src="https://ik.imagekit.io/mino2112/biglinkz%20intern/instagram.png?updatedAt=1726735129712 "></img></span>Instagram<span className="text-black material-symbols-outlined">
                keyboard_arrow_down
              </span></button>
        </div>
        <div className="hidden mt-2 md:flex">
          <input placeholder="Start by Searching . . ." />
        </div>
        <div>
          <button className="px-2 py-1 text-center text-white bg-purple-600 rounded-3xl ">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
      <div>
        <button className="flex items-center justify-center p-2 border border-orange-500 hover:shadow-xl rounded-2xl hover:shadow-orange-100">
          <span className="text-orange-600 material-symbols-outlined">play_arrow</span>See how
          it works
        </button>
      </div>
    </div>
  );
};
