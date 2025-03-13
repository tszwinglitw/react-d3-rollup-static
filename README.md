# React and D3.js Static Bundle Example

This minimal example demonstrates how to integrate React and D3.js, bundling them with Rollup.js into a single JavaScript file. This allows you to serve visualizations statically, without a development server.

## Usage

```Makefile
install:
    npm install

rollup:
    npx rollup -c

clean:
    rm -rf ./node_modules package-lock.json
```