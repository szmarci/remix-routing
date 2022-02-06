import { useState } from 'react';
import { useLocation } from 'remix';
import { Red } from '~/Red';
import { Yellow } from '~/Yellow';
import { Blue } from '~/Blue';

export default function NewId() {
  const {state}: any = useLocation();
  const [list, setList] = useState(() => ({...state}));
  console.log("list: ", list)
  console.log("state: ", state)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Yellow />
      {
        list.colorid === "red"
          ? <Red />
          : <Blue />
      }
    </div>
  );
}
