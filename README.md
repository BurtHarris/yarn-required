# yarn-required
> Require a package.json script be run from [yarn](https://yarnpkg.com/)

When taking advantage of advanced yarn features like workspaces, building using npm can generate hard-to-understand errors.  You can avoid this by inserting this package.json's `prepare` script, and anyone using `npm install` to build the package will get a clearer message.

Usage:

```
yarn add -D yarn-required
```
or if you are using yarn workspaces
```
yarn add -W yarn-required
```

Add yarn-required to your prepare script in package.json like this...

```
...
"scripts": {
    "prepare": "yarn-required && <other commands as needed>"
...
```
