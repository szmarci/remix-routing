import { useState } from "react";

export default function Index() {
  const [show, setShow] = useState(true);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      index
    </div>
  );
}
