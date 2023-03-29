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
- [commitlint](https://github.com/conventional-changelog/commitlint)
  ```bash
  npm i -D @commitlint/{config-conventional,cli}
  echo "{extends: ['@commitlint/config-conventional']}" > .commitlintrc
  npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
  # test commit linter
  npx commitlint --from HEAD~1 --to HEAD --verbose
  ```