import { useState } from 'react';
import { useLocation } from 'remix';
import { Red } from '~/Red';
import { Yellow } from '~/Yellow';
import { Blue } from '~/Blue';

export default function NewId() {
  const {state: urldata}: any = useLocation();
  const [state] = useState(() => ({...urldata}));

  console.log("state: ", state)
  console.log("urldata: ", urldata)

  return (
    <div>
      <Yellow />
      {
        state.colorid === "red"
          ? <Red />
          : <Blue />
      }
    </div>
  );
}
