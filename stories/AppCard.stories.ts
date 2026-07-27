import type { Meta, StoryObj } from "@storybook/html-vite";
import { createAppCard } from "../src/components/app-card";
import type { AppInfo } from "../src/apps";
import uploadLogo from "../src/assets/bbqs-uploader-logo.svg";

const meta: Meta<AppInfo> = {
  title: "Components/AppCard",
  render: (args) => createAppCard(args),
  args: {
    id: "upload",
    name: "Upload",
    description: "Upload and manage data files for the HEARTH data ecosystem.",
    url: "https://upload.brain-bbqs.org",
    logo: uploadLogo,
    status: "live",
  },
};

export default meta;

type Story = StoryObj<AppInfo>;

export const Live: Story = {};

export const ComingSoon: Story = {
  args: {
    id: "analyze",
    name: "Analyze",
    description: "Explore and analyze shared datasets. (Coming soon.)",
    status: "coming-soon",
  },
};
