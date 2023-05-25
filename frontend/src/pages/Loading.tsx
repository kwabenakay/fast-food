import { useDispatch, useSelector } from "react-redux";
import Ticket from "../components/Ticket";
import { addServe, removeLoad } from "../redux/data";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";


type selectedLoad = {
  ticket: {
    id: number;
    name: string;
    amount: number;
    items: { name: string; num: number; price: number }[];
  };
  index: number;
};
export default function Loading() {
  const tickets = useSelector((state: any) => state.data.loading);
  const selectedLoad:selectedLoad = useSelector(
    (state: any) => state.selectedLoad
  );
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className=" bg-[#FBF3EF] pb-5">
      <Navigation/>
      <div className=" grid grid-cols-2 gap-60 px-40">
        <div>
          <h1 className=" text-3xl font-bold mb-5">ORDERS</h1>
          <Ticket tickets={tickets} />
        </div>
        <div className=" flex flex-col justify-between w-fit">
          <div className=" bg-white flex flex-col justify-between shadow-lg w-96 min-h-[400px] p-6">
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-3xl text-center">
                {selectedLoad.ticket.id}
              </h1>
              <h2 className=" text-xl">{selectedLoad.ticket.name}</h2>
              <div className=" flex flex-col gap-2 pl-4">
                {selectedLoad.ticket.items &&
                  selectedLoad.ticket.items.map((val, ind) => (
                    <h3 key={"selectedLoad" + ind}>
                      {val.num + "  " + val.name}{" "}
                    </h3>
                  ))}
              </div>
            </div>
            <div className=" text-right"></div>
          </div>
          <button className=" bg-[#B29740] w-28 h-14 rounded-lg font-bold text-xl self-end hover:bg-[#FDD65C]"
          onClick={()=>{
            dispatch(removeLoad(selectedLoad.index))
            dispatch(addServe(selectedLoad.ticket))
            navigate('/serving')
          }}>
            DONE
          </button>
        </div>
      </div>
    </div>
  );
}
