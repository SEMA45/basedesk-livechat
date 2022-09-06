import { FC } from "react";
import { TbArrowRight, TbListSearch } from "react-icons/tb";

type Props = {
};

const DemoWidget: FC<Props> = () => {
  const defaultInstanceObject = {
  id: 96,
  name: "Support",
  start_button_message: "👋 Let's Chat",
  button_color: "#2563eb",
  button_text_color: "#fff",
  background_color: "#2563eb",
  position: "right",
  bannerMessage: "Welcome to Support",
  bannerColor: "#fff",
  suggested_articles: [
    "Refund Policy",
    "How to get started",
    "Resetting Your Password",
    "Setting Up Your Help Desk",
  ],
};

  //component
  return (
    <div
      className={`fixed ${
        defaultInstanceObject?.position === "left"
          ? "left-4"
          : "right-4 items-end"
      } bottom-2 flex flex-col space-y-3 w-fit h-fit`}
    >
      <div
        className={`rounded-md bg-white w-[22rem] h-[33rem] shadow-md drop-shadow-md overflow-hidden transition-all duration-200`}
      >
        <div
          style={{
            background: defaultInstanceObject?.background_color,
            color: defaultInstanceObject?.bannerColor,
          }}
          className="w-full h-[9rem] p-10 px-4 relative"
        >
          <span className="text-2xl text-white font-medium whitespace-nowrap">
            {defaultInstanceObject?.bannerMessage}
          </span>
          <span className="absolute text-white top-1 right-3 text-xl">
            &times;
          </span>
        </div>
        <div className="w-[90%] h-[21rem] bg-slate-100 m-auto -mt-[2rem] z-10 drop-shadow shadow rounded-b">
          <div className="h-16 w-full bg-slate-200 p-4 py-2">
            <span className="text-base text-slate-700 font-medium whitespace-nowrap">
              Have a question ?
            </span>
          </div>
          <div className="w-full px-4 -mt-6 relative">
            <input
              type="search"
              name=""
              id=""
              className="w-full px-4 h-10 rounded border border-slate-300 focus:ring-0 text-xs"
              placeholder="Search for help ..."
            />
            <button
              style={{
                background: defaultInstanceObject?.button_color,
                color: defaultInstanceObject?.button_text_color,
              }}
              className="absolute right-5 top-1 h-8 w-9 rounded-sm flex justify-center items-center text-lg"
            >
              <TbListSearch />
            </button>
          </div>
          <div className="p-4 text-xs text-slate-500 font-medium whitespace-nowrap">
            Suggested articles
          </div>
          <div className="w-[90%] h-[12rem] m-auto grid grid-rows-4">
            {defaultInstanceObject?.suggested_articles?.map(
              (art: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="row-span-1 w-full last:border-0 border-b flex items-center text-xs text-slate-600"
                  >
                    {art}
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/**Contact Button */}
        <div className="w-full h-fit flex justify-center m-auto mt-4 z-10">
          <button className="h-12 w-[90%] px-4 text-slate-700 text-base font-medium bg-slate-100 border border-slate-200 drop-shadow shadow rounded flex items-center justify-between">
            <span>Contact Us</span> <TbArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      {/**Start Button ========================== */}
      <button
        style={{
          background: defaultInstanceObject?.button_color,
          color: defaultInstanceObject?.button_text_color,
        }}
        className={`h-[2rem] max-w-fit px-[10px] py-[2px] flex items-center justify-center rounded-full transition-all duration-200 ${
          defaultInstanceObject?.position === "left"
            ? "rounded-tl-none"
            : "rounded-tr-none"
        } text-sm text-white shadow-md drop-shadow-md`}
      >
        {defaultInstanceObject?.start_button_message}
      </button>
    </div>
  );
};

export default DemoWidget;
