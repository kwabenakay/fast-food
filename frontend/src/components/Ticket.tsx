import CloseIcon from "@mui/icons-material/Close";

export default function Ticket(Prop: { tickets: { id: number }[] }) {
  return (
    <div className=" flex flex-col items-center w-80 h-[556px] bg-black bg-opacity-10 rounded-lg overflow-y-auto pb-3">
      {Prop.tickets.map((val, ind) => (
        <div
          key={"ticket" + ind}
          id={"tag" + ind}
          className=" bg-white mt-3 w-72 h-20 rounded-lg flex justify-between items-center px-2 "
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
          >
            <CloseIcon htmlColor="#FE0404" fontSize="large" />
          </span>
        </div>
      ))}
    </div>
  );
}
