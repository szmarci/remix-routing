import { useNavigate } from "remix";

export const Blue = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("yellowandred", {state: {colorid: "red"}});
  }
  console.log("render blue")
  return (
    <div className="blue" style={{backgroundColor: "blue", color: "white"}}>
      blue
      <button onClick={handler}>go to yellow</button>
    </div>
  )
}