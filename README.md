## a Monorepo sample using [lernajs](https://lerna.js.org/), CRA typescript and rollup

### Description

In this Repo there are four packages, three would be shared packages

- common-components
- common-types
- common-utils

and one would be the consumer application.

consumer-application is created by CRA. common-components are configured by rollup for creating the bundle.

There is a template folder inside common-components which can be used to create a new component.

### How to use

0. in the root

```
npx lerna bootstrap
```

1. in the `packages/common-utils`

```
yarn run rollup
```

2. in the `packages/common-components`

```
yarn run rollup
```

3. in the `packages/consumer-app`

```
yarn start
```

or

in the root

```
npx lerna run start --scope=consumer-app
```

4. Create a new component in common-component package,

```
cd packages/common-components
npx generate-react-cli component NewComponentName
```

5. Add a package(source-package) to another package(destination-package)

```
npx lerna add source-package --scope=destination-package
```

6. generating a new version, in the root

```
npx lerna version --conventional-commits ---yes
```

there only would be a new version when there were changes to any of the packages.

<!-- 7. test at the root

all
```
yarn test
```

only common-components
```
yarn test:components
```

only consumer-app
```
yarn test:consumer-app
```

only common-utils
```
yarn test:utils
``` -->
