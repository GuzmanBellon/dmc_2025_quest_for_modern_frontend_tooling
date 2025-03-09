# DMC 2025 A Quest for modern frontend tooling

an example of theme developments base on modern frontend tooling

## Installation

1. install drupal cms

```shell
ddev composer install
ddev drush launch
```

2. install theme (or not)
```shell
ddev drush theme:enable dmc_2025_quest_for_modern_frontend_tooling
```

3. complie the assets
```shell
cd web/themes/custom/dmc_2025_quest_for_modern_frontend_tooling
ddev npm install
ddev npm run build
ddev drush cr
```

## Development

### Component first development on Storybook

1. start storybook
```shell
cd web/themes/custom/dmc_2025_quest_for_modern_frontend_tooling
npm run storybook
```

2. Create stories and develop components outside of drupal
3. Enjoy HMR and out-of-my-way DX

### Integration with Drupal

1. launch vite dev server
```shell
cd web/themes/custom/dmc_2025_quest_for_modern_frontend_tooling
ddev npm run dev
ddev drush cr
```

2. Integrate with HMR on CSS and automatic refresh on templates


