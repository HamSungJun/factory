import { ComponentMeta } from "@storybook/react";

import Button from "@app/components/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template = () => <Button />;
