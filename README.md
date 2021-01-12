# vue-storybook
투두리스트 먼저 빠르게 쳐내기
## Table of Contents
- [x] BigRadioField
- [x] Button
- [x] LoadingSpinner
- [ ] CheckBox
- [x] SelectBox - 좀 더 수정이 필요함
- [ ] Card
- [ ] Header
- [ ] Form
- [x] Modal/Alert
- [ ] Title

## Project setup
```
yarn install
```

### ESLint Setup

```bash
npm i -D @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-plugin-unit-jest @vue/cli-service @vue/eslint-config-prettier @vue/test-utils babel-eslint eslint eslint-plugin-prettier eslint-plugin-vue prettier vue-template-compiler
```

### Storybook setting

```bash
npx -p @storybook/cli sb init --type vue
```

#### deploy setting

```bash
yarn add gh-pages -D
```

```json
"scripts": {
  "predeploy": "npm run build-storybook",
  "deploy-storybook": "gh-pages -d storybook-static",
  "build-storybook": "build-storybook"
},
```

 - [Ref](https://medium.com/swlh/how-to-deploy-storybook-to-github-pages-4894097d49ab)

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
