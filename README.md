# yarn-required

> Require a package.json script be run from [yarn](https://yarnpkg.com/)

When taking advantage of advanced yarn features like workspaces, building using npm can generate hard-to-understand errors.  You can avoid this by inserting this package.json's `preinstall` script, and anyone using `npm install` to build the package will get a clearer message.

This mainly makes sense if you are using yarn's cool [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) feature.   The example below makes that assumption...

Installation :

```sh
yarn add -W yarn-required
```

Then edit your workspace-level *package.json* to use this command before any installation steps are run...

```sh
...
"scripts": {
    "preinstall": "yarn-required"
...
```
