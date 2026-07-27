/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  stories: ["../../stories/**/*.stories.@(ts|js)"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};

export default config;
