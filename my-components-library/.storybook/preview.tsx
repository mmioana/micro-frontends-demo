import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';

import { MemoryRouter } from "react-router";
import React from "react";

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
    story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
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
