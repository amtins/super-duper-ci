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
  # add pre-push hook
  npx husky add .husky/pre-push "npm test"
  ```

- [commitlint](https://github.com/conventional-changelog/commitlint)

  ```bash
  npm i -D @commitlint/{config-conventional,cli}
  echo "{extends: ['@commitlint/config-conventional']}" > .commitlintrc
  npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
  # test commit linter
  npx commitlint --from HEAD~1 --to HEAD --verbose
  ```

- [semantic-release](https://github.com/semantic-release/semantic-release)

  ```bash
  npm i -D semantic-release
  echo "{\"branches\": [\"main\", {\"name\": \"next\", \"prerelease\": true}]}" > .releaserc
  # will throw errors
  npx semantic-release --dry-run

  ```
