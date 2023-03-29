### Initialize npm project

  ```bash
  npm init -y
 ```

### Dependencies configuration

- [husky](https://github.com/typicode/husky)
  ```bash
  npm i -D husky
  npm pkg set scripts.prepare="husky install"
  npm run prepare
  # add pre-commit hook
  npx husky add .husky/pre-commit "npm test"
  ```