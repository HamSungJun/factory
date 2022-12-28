import "@app/index.css";
import { useRef } from "react";

import Button from "@app/components/Button";

export default function App() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  console.log({ buttonRef });
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
}
