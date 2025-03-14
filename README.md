# DMC 2025 A Quest for modern frontend tooling

an example of theme developments base on modern frontend tooling

## Installation

1. install drupal cms with the Drupal CMS installer.

```shell
ddev start
ddev composer install
ddev launch
```

2. install the [vite module](https://www.drupal.org/project/vite) (for more about the integration with ddev check [Example usage using DDEV](https://www.drupal.org/docs/extending-drupal/contributed-modules/contributed-module-documentation/vite/example-usage-using-ddev))
```shell
ddev drush pm:install vite
```

3. install theme (or not)
```shell
ddev drush theme:enable dmc_2025_quest_for_modern_frontend_tooling
```

4. compile the assets
```shell
cd web/themes/custom/dmc_2025_quest_for_modern_frontend_tooling
ddev npm install
ddev npm run build
ddev drush cr
```

5. eventually go [here](https://dmc2025-quest-for-modern-frontend-tooling-1.ddev.site/admin/appearance) and make `dmc_2025_quest_for_modern_frontend_tooling` the default theme


## Development

### Component first development on Storybook

1. start storybook
```shell
cd web/themes/custom/dmc_2025_quest_for_modern_frontend_tooling
npm run storybook
```

2. Create stories in `/stories` and develop components outside of drupal
3. Enjoy HMR and an out-of-my-way DX

### Integration with Drupal

1. launch vite dev server
```shell
cd web/themes/custom/dmc_2025_quest_for_modern_frontend_tooling
ddev npm run dev
ddev drush cr
```

2. Integrate with HMR on CSS and automatic refresh on templates


