import SelectedOrders from "../components/SelectedOrders";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLoad } from "../redux/data";
import { addSelect, clearSelect } from "../redux/selectedItems";
import Navigation from "../components/Navigation";

export default function Order() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("No name");
  const [filterItem, setFilterItem] = useState("");
  const [numItem, setNumItem] = useState(1);
  const [activID, setActivID] = useState(getID());
  const selected: { name: string; num: number; price: number }[] = useSelector(
    (state: any) => state.selected
  );
  const stock: { name: string; num: number; price: number }[] = useSelector(
    (state: any) => state.stock
  );
  const dispatch = useDispatch();

  function total() {
    let total = 0;
    selected.forEach((val) => (total += val.price * val.num));
    return total;
  }
  let datetime = new Date();
  console.log(
    "Last Sync: " +
      datetime.getDate() +
      "/" +
      (datetime.getMonth() + 1) +
      "/" +
      datetime.getFullYear() +
      " @ " +
      datetime.getHours() +
      ":" +
      datetime.getMinutes() +
      ":" +
      datetime.getSeconds()
  );
  function getID(): number {
    let currentDate = new Date();
    let newId =
      currentDate.getDate() +
      "" +
      (currentDate.getMonth() + 1) +
      "" +
      currentDate.getFullYear() +
      "" +
      currentDate.getHours() +
      "" +
      currentDate.getMinutes() +
      "" +
      currentDate.getSeconds();
    console.log(newId);
    return Number(newId);
  }
  // console.log(getID());
  return (
    <div className=" bg-[#FBF3EF] pb-5">
      <Navigation />
      {/* left side */}
      <div className=" grid grid-cols-2 gap-60 px-40">
        <div className=" flex flex-col gap-12">
          <div className=" bg-white shadow-lg rounded-lg px-4">
            <input
              readOnly
              type="text"
              placeholder="id"
              className=" w-96 h-14 outline-none bg-transparent"
              value={activID}
            />
          </div>
          <div className=" bg-white shadow-lg rounded-lg px-4">
            <input
              type="text"
              placeholder="Customer name"
              className=" w-96 h-14 outline-none bg-transparent"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <div className=" bg-white shadow-lg rounded-lg px-4">
              <input
                id="search"
                type="search"
                placeholder="Search item"
                className=" w-96 h-14 outline-none bg-transparent"
                value={filterItem}
                onChange={(event) => {
                  setFilterItem(event.target.value);
                  setSearch(event.target.value);
                }}
              />
            </div>
            <div
              className={
                (search ? "" : "hidden") +
                " bg-white shadow-lg rounded-lg max-h-40 overflow-y-auto px-4 border-black border-t-4 mt-2"
              }
            >
              <ul>
                {stock
                  .filter((val) =>
                    val.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((val, ind) => (
                    <li
                      key={"stock" + ind}
                      className=" text-center mt-1 hover:border-b-[1px] border-black hover:cursor-pointer"
                      onClick={() => {
                        setFilterItem(val.name);
                        setSearch("");
                      }}
                    >
                      {val.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className=" flex justify-between">
            <div className=" bg-white shadow-lg rounded-lg px-4">
              <input
                type="number"
                placeholder="1"
                className=" w-14 h-14 outline-none bg-transparent"
                onChange={(event) => {
                  setNumItem(Number(event.target.value) || 1);
                }}
              />
            </div>
            <button
              className=" bg-[#D6C07C] w-24 h-14 rounded-lg font-bold text-xl hover:bg-[#FFE594]"
              onClick={() => {
                let temp = {
                  ...stock.filter((val) => val.name === filterItem)[0],
                };
                temp.num = numItem;
                console.log(temp);
                dispatch(
                  addSelect({
                    name: temp.name,
                    num: numItem,
                    price: temp.price,
                  })
                );
              }}
            >
              ADD
            </button>
          </div>
          <div>
            <SelectedOrders />
          </div>
        </div>
        {/* right side */}
        <div className=" flex flex-col justify-between w-fit">
          <div className=" bg-white flex flex-col justify-between shadow-lg overflow-y-auto w-96 min-h-[400px] max-h-[500px] p-6">
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-3xl text-center">ticket id</h1>
              <h2 className=" text-xl">Customer name</h2>
              <div className=" flex flex-col gap-2 pl-4">
                {selected &&
                  selected.map((val, ind) => (
                    <h3 key={"selectedItem" + ind}>
                      {val.num + "" + val.name + " " + val.price}
                    </h3>
                  ))}
              </div>
            </div>
            <div className=" text-right">TOTAL: {total()}</div>
          </div>
          <button
            className=" bg-[#B29740] w-28 h-14 rounded-lg font-bold text-xl self-end hover:bg-[#FDD65C]"
            onClick={() => {
              let ticket = {
                id: activID,
                name: name,
                amount: total(),
                items: selected,
              };
              dispatch(addLoad(ticket));

              dispatch(clearSelect());
              setActivID(getID());

              console.log(ticket);
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
