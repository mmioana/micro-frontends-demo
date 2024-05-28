import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        main: 'theme-main',
        stone: 'theme-stone',
        mauve: 'theme-mauve',
      },
      defaultTheme: 'main',
    }),
  ],
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
