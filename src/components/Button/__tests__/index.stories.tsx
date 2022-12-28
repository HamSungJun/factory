import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "@app/components/Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: action("onClick"),
    children: "Button",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "border-blue-400 bg-blue-400 text-white",
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: "border-gray-400 bg-gray-400 text-white",
};

export const Warning = Template.bind({});
Warning.args = {
  className: "border-orange-400 bg-orange-400 text-white",
};

export const Danger = Template.bind({});
Danger.args = {
  className: "border-red-400 bg-red-400 text-white",
};

export const Rounded = Template.bind({});
Rounded.args = {
  className: "rounded-[4px]",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  className: "border-[#ccc] bg-[#ccc] text-white cursor-not-allowed",
};
