/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js)",
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  previewBody: (body) => `
  <script>
    window.Drupal = window.Drupal || {behaviors: {}};
    window.drupalSettings = Object.assign(window.drupalSettings || {}, {
      // Mock any drupalSettings your behaviors need here.
    });
    // Mock Drupal's once library too.
    window.once = (_, selector) => document.querySelectorAll(selector);
    document.addEventListener('DOMContentLoaded', () => {
      Object.entries(window.Drupal.behaviors).forEach(([key, object]) => object.attach(document));
    });
  </script>
  ${body}
  `,

  docs: {},
};
export default config;
