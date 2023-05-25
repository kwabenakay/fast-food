import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addReject, removeLoad } from "../redux/data";
import { setLoad } from "../redux/selectedLoad";
import { useLocation } from "react-router";
type dataStruct = {
  id: number;
  name: string;
  amount: number;
  items: { name: string; num: number; price: number }[];
};
export default function Ticket(Prop: { tickets: dataStruct[] }) {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className=" flex flex-col items-center w-80 h-[556px] bg-black bg-opacity-10 rounded-lg overflow-y-auto pb-3">
      {Prop.tickets &&
        Prop.tickets.map((val, ind) => (
          <div
            key={"ticket" + ind}
            id={"tag" + ind}
            className=" bg-white mt-3 w-72 h-16 rounded-lg flex justify-between items-center px-2 "
          >
            <span
              className=" w-full text-center"
              onMouseOver={() => {
                let tag = document.getElementById("tag" + ind);
                if (tag?.classList.contains("bg-white")) {
                  tag?.classList.remove("bg-white");
                  tag?.classList.add("bg-[#B19B9B]");
                }
              }}
              onMouseOut={() => {
                let tag = document.getElementById("tag" + ind);
                if (tag?.classList.contains("bg-[#B19B9B]")) {
                  tag?.classList.remove("bg-[#B19B9B]");
                  tag?.classList.add("bg-white");
                }
              }}
              onClick={() => {
                dispatch(setLoad({ ticket: val, index: ind }));
                console.log(val);
              }}
            >
              {val.id}
            </span>
            <span
              onMouseOver={() => {
                let tag = document.getElementById("tag" + ind);
                if (tag?.classList.contains("bg-white")) {
                  tag?.classList.remove("bg-white");
                  tag?.classList.add("bg-[#FF8D8D]");
                }
              }}
              onMouseOut={() => {
                let tag = document.getElementById("tag" + ind);
                if (tag?.classList.contains("bg-[#FF8D8D]")) {
                  tag?.classList.remove("bg-[#FF8D8D]");
                  tag?.classList.add("bg-white");
                }
              }}
              onClick={() => {
                console.log(Prop.tickets.indexOf(val));
                dispatch(removeLoad(Prop.tickets.indexOf(val)));

                dispatch(
                  addReject({
                    stage:
                      location.pathname === "/serving"
                        ? "serving"
                        : location.pathname === "/loading"
                        ? "loading"
                        : "",
                    data: val,
                  })
                );
                console.log(val.id);
                console.log(location.pathname);
              }}
            >
              <CloseIcon htmlColor="#FE0404" fontSize="large" />
            </span>
          </div>
        ))}
    </div>
  );
}
