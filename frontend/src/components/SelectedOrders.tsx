import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export default function SelectedOrders() {
  const orders:{ name: string; num: number }[]= useSelector((state:any)=>state.selected)
  console.log(orders)
  return (
    <div className=" bg-black bg-opacity-10 h-56 rounded-lg overflow-y-auto grid grid-cols-2 gap-2 p-4">
      {orders && orders.map((order, ind) => (
        <div
          id={"tag" + ind}
          key={"order" + ind}
          className=" bg-[#E1A272] h-12 p-1 flex justify-between items-center rounded-sm text-3xl"
        >
          {order.name + " " + order.num}
          <span
            onMouseOver={() => {
              let tag = document.getElementById("tag" + ind);
              if (tag) {
                tag.style.backgroundColor = "#FF8D8D";
              }
            }}
            onMouseOut={() => {
              let tag = document.getElementById("tag" + ind);
              if (tag) {
                tag.style.backgroundColor = "#E1A272";
              }
            }}
          >
            <CloseIcon htmlColor="#FE0404" fontSize="large" />
          </span>
        </div>
      ))}
    </div>
  );
}
