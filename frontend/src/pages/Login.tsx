import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className=" flex flex-col gap-4 items-center">
      <div className=" p-20">
        <img src="/foodlogo.svg" alt="logo" />
      </div>
      <form action="#" className=" flex flex-col gap-8">
        <div className=" bg-[#D9D9D9] bg-opacity-30  shadow-lg rounded-lg px-4">
          <input
            type="email"
            placeholder="email"
            className=" w-96 h-14 outline-none bg-transparent"
          />
        </div>
        <div className=" bg-[#D9D9D9] bg-opacity-30  shadow-lg rounded-lg px-4">
        <input
          type="password"
          placeholder="password"
          className=" w-96 h-14 outline-none bg-transparent"
        />
        </div>
        <input
          type="submit"
          value="Login"
          className=" bg-[#B29740] self-end w-36 h-10 shadow-2xl rounded-lg hover:bg-[#FDD65C] hover:cursor-pointer"
          onClick={()=>{
            navigate('/order')
          }}
        />
      </form>
    </div>
  );
}
