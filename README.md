### How to use

1. Install packages and dependencies

```
yarn bootstrap
```

2. Start Project(consumer-app)

in the root of project

```
yarn start
```

in the `packages/consumer-app`

```
yarn start
```

3. Create a new component in common-component package,

```
cd packages/common-components
npx generate-react-cli component NewComponentName
```

4. Add a package(source-package) to another package(destination-package)

```
lerna add source-package --scope=destination-package
```
