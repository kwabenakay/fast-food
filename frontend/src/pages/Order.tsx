import SelectedOrders from "../components/SelectedOrders";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

export default function Order() {
  const [search, setSearch] = useState("");
 
  return (
    <div className=" bg-[#FBF3EF] pb-5">
      {/* left side */}
      <div className=" pt-5 pb-5">
        <img src="/foodlogo.svg" alt="logo" />
      </div>
      <div className=" grid grid-cols-2 gap-60 px-40">
        <div className=" flex flex-col gap-12">
          <div className=" bg-white shadow-lg rounded-lg px-4">
            <input
              type="text"
              placeholder="id"
              className=" w-96 h-14 outline-none bg-transparent"
            />
          </div>
          <div className=" bg-white shadow-lg rounded-lg px-4">
            <input
              type="text"
              placeholder="Customer name"
              className=" w-96 h-14 outline-none bg-transparent"
            />
          </div>
          <div>
            <div className=" bg-white shadow-lg rounded-lg px-4">
              <input
                type="search"
                placeholder="Search item"
                className=" w-96 h-14 outline-none bg-transparent"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            <div
              className={
                (search ? "" : "hidden") +
                " bg-white shadow-lg rounded-lg px-4 border-black border-t-4 mt-2"
              }
            >
              <ul>
                <li className=" text-center mt-1 hover:border-b-[1px] border-black hover:cursor-pointer">
                  KOFI
                </li>
                <li className=" text-center mt-1 hover:border-b-[1px] border-black hover:cursor-pointer">
                  YAW
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-between">
            <div className=" bg-white shadow-lg rounded-lg px-4">
              <input
                type="number"
                placeholder="1"
                className=" w-14 h-14 outline-none bg-transparent"
              />
            </div>
            <button className=" bg-[#D6C07C] w-24 h-14 rounded-lg font-bold text-xl hover:bg-[#FFE594]">
              ADD
            </button>
          </div>
          <div>
            <SelectedOrders/>
          </div>
        </div>
        {/* right side */}
        <div className=" flex flex-col justify-between w-fit">
          <div className=" bg-white flex flex-col justify-between shadow-lg w-96 min-h-[400px] p-6">
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-3xl text-center">ticket id</h1>
              <h2 className=" text-xl">Customer name</h2>
              <div className=" flex flex-col gap-2 pl-4">
                <h3>2Chips 10$</h3>
                <h3>2Chips 10$</h3>
                <h3>2Chips 10$</h3>
                <h3>2Chips 10$</h3>
              </div>
            </div>
            <div className=" text-right">TOTAL: 40$</div>
          </div>
          <button className=" bg-[#B29740] w-28 h-14 rounded-lg font-bold text-xl self-end hover:bg-[#FDD65C]">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
