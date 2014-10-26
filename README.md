To deploy:

```
# install node js from source

# install npm

mkdir ~/.npm
mkdir ~/.node
# add to system path in ~/.bashrc file
export PATH="$PATH:$HOME/.node/bin/"
source ~/.bashrc
```


To build the bundle for production run

```
npm run build
```

To watch files during dev

```
npm run watch
```



Requirements

browserify: https://github.com/substack/browserify-handbook
npm run: http://substack.net/task_automation_with_npm_run
good browser npm modules: http://substack.net/finding_modules
