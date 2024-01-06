# [Go to Typescript Doc](https://www.typescriptlang.org/docs/)

# TypeScript Install

**First Step:**
Check node install or not: node --version

</br>

**Second Step**

```js
// global
npm install -g typescript

// local
npm install --save-dev typescript
```

Check installed or not: tsc --version

# How TypeScript works

```js
tsc file-name

// If you don't want to do the same comman everytime, then use the following
tsc file-name --watch
```

</br>


# How to run TypeScript code

- tsc file-name to convert ts file to js file
- now run js code using node

else

- [install ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- install globally 

```js
npm i -g ts-node-dev
ts-node-dev --respawn --transpile-only ts_file_location




</br>

# TypeScript Configuration
- in terminal -> tsc --init
- edit rootDir, outDir of tsconfig.json as shown in the following example
- you can also change es version from target of tsconfig.json

</br>
