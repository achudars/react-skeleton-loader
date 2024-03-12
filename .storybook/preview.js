/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// import { configure } from '@storybook/react';
// import './bootstrap.min.css';

// // automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);
// function loadStories() {
//   req.keys().forEach((filename) => req(filename));
// }

// configure(loadStories, module);
