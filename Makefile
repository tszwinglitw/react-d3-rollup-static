clean:
	rm -rf ./node_modules package-lock.json
install:
	npm install
rollup:
	npx rollup -c