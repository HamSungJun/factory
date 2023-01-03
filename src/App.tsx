import "@app/index.css";
import { ChangeEventHandler, useState } from "react";

import Button from "@app/components/Button";
import Radio from "@app/components/Radio";

const RADIO_ITEMS = [
  { value: "Apple" },
  { value: "Peach" },
  { value: "Grape" },
];

export default function App() {
  const [checkedRadioValue, setCheckedRadioValue] = useState(
    RADIO_ITEMS[0].value
  );

  const handleChangeRadio: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setCheckedRadioValue(event.target.value);
  };

  return (
    <div>
      <Button>Button</Button>
      {RADIO_ITEMS.map(({ value }) => (
        <Radio
          key={value}
          name="fruit"
          value={value}
          checked={checkedRadioValue === value}
          onChange={handleChangeRadio}
        >
          {value}
        </Radio>
      ))}
    </div>
  );
}
