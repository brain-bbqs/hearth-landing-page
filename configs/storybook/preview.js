import "../../src/style.css";

/** @type {import('@storybook/html-vite').Preview} */
const preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0f1115" }],
    },
  },
};

export default preview;
