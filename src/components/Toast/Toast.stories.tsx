import type { Meta, Preview, StoryObj } from "@storybook/react";
import { Demo } from "./demo";

const meta: Meta<typeof Demo> = {
  title: "Components/Toast",
  component: Demo,
  tags: ["autodocs"],
  argTypes: {},
  decorators: []
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  args: {}
};
