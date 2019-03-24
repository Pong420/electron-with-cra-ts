## Electron-CRA-TS

### Reference

- [How to build an Electron app using create-react-app. No webpack configuration or “ejecting” necessary.](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)
- [electron-react-boilerplate typescript examples](https://github.com/electron-react-boilerplate/examples/tree/master/examples/typescript)

### Installation

yarn is requeired, otherwise you should replace 'yarn' in package.json

```
yarn install
```

### Development

```
yarn dev
```

### Build

Since the project base on `create-react-app`, you can build the web verison only by

```
yarn build
```

### Packaging

To package apps for the local platform:

```
yarn package
```

First, refer to the [Multi Platform Build docs](https://www.electron.build/multi-platform-build) for dependencies. Then,

```
yarn package-all
```

### Tips

- The scss variables / mixins in `src/scss` directly without `@import ....`

- Create a new component quickly by `yarn component ComponentName`

- Install dependencies with type. `yarn get lodash` equivalent to `yarn add lodash` and `yarn add --dev @types/loadash`
