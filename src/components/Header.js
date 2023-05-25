import img from "../assets/imgs/logo.png"

export default function Header(){
  return(
    <div className="header flex flex-nowrap mx-auto px-10">
      <div className="flex-none w-14 h-14">
        <img src={img} />
      </div>
      <div className="grow h-14"></div>
      <div className="flex-none w-14 h-14">
        The tailwindcss
      </div>
    </div>
  )
}