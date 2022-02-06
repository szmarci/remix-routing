import { useNavigate } from 'remix';
import { Blue } from '~/Blue';

export default function Colors() {
  const navigate = useNavigate();
  
  const handler = () => {
    navigate("yellowandred", {state: {colorid: "red"}});
  }

  return (
    <>
      <Blue />
      <button onClick={handler}>go to yellow</button>
    </>
  );
}
