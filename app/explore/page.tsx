import { FC } from "react";

const ExplorePage: FC = () => {
  return (
    <div className="p-2 rounded-xl bg-transparent w-full h-full flex flex-col gap-2">
      <h1 className="font-light text-2xl py-1">Explore Page</h1>
      <div className="flex gap-2 h-full">
        <div className="w-2/4 bg-purple-100 shadow-md p-2 rounded-xl h-full ">one</div>
        <div className="w-1/4 bg-purple-100 shadow-md p-2 rounded-xl h-full">two</div>
        <div className="w-1/4 rounded-xl h-full flex flex-col gap-2">
        <div className=" bg-purple-100 shadow-md p-2 rounded-xl h-1/3">
          weather
        </div>
        <div className=" bg-purple-100 shadow-md p-2 rounded-xl h-1/3">
          three
        </div>
        <div className="bg-purple-100 shadow-md p-2 rounded-xl h-1/3">
          four
        </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
