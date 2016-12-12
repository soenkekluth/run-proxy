# run-proxy
run-proxy calls npm scripts either with npm or yarn (if used)


# install
##npm
`npm i --save-dev run-proxy` 

##yarn
`yarn add -D run-proxy` 


## usage

in package.json scripts you can now use `run` instead of `npm run` or `yarn`


## example


```
{
  "scripts": {
      "test": "run echo",
      "echo": "echo \"echo\""
  }
}
```
