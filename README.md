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
0. You need to install `lerna` globally or use the `npx` and update the scripts in the `package.json` of the root.

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

5. generating a new version, in the root

```
yarn new-version
```

there only would be a new version when there were changes to any of the packages.

6. test at the root

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
```
