import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChangeEventHandler, useState } from "react";

import Radio from "@app/components/Radio";

const FRUITS = ["Apple", "Grape", "Peach"];

export default {
  title: "Components/Radio",
  component: Radio,
  args: {
    children: "Radio",
    checked: true,
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Single = Template.bind({});
Single.args = {
  checked: true,
};

export const Multiple = () => {
  const [selectedFruit, setSelectedFruit] = useState(FRUITS[0]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedFruit(event.target.value);
  };
  return (
    <div className="flex gap-x-2">
      {FRUITS.map((fruit) => (
        <Radio
          key={fruit}
          name="fruit"
          value={fruit}
          onChange={onChange}
          checked={selectedFruit === fruit}
        >
          {fruit}
        </Radio>
      ))}
    </div>
  );
};

export const Rect = Template.bind({});
Rect.args = {
  classes: {
    "radio-outer": "rounded-none",
    "radio-inner": "rounded-none",
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  classes: {
    root: "cursor-not-allowed",
  },
};
