# Webbpack Express Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack.

If you want to follow along with the course, you will start from the master and switch to the appropriate numbered branches of this repo as needed. The branches are:
- [0-initial-setup](https://github.com/udacity/fend-webpack-content/tree/0-initial-setup)
- [1-install-webpack](https://github.com/udacity/fend-webpack-content/tree/1-install-webpack)
- [2-add-webpack-entry](https://github.com/udacity/fend-webpack-content/tree/2-add-webpack-entry)
- [3-webpack-output-and-loaders](https://github.com/udacity/fend-webpack-content/tree/3-webpack-output-and-loaders)
- [4-webpack-plugins](https://github.com/udacity/fend-webpack-content/tree/4-webpack-plugins)
- [5-webpack-mode](https://github.com/udacity/fend-webpack-content/tree/5-webpack-mode)
- [6-webpack-for-convenience](https://github.com/udacity/fend-webpack-content/tree/6-webpack-for-convenience)

Each one is a step along the path to creating a fully functional webpack setup. In each branch, there will be a documentation file that lists out the steps taken in that branch (each step should also match to a git commit if you look at the history) which you can use as a checklist when setting up your own projects. 

## Get Up and Running

Fork this repo, then clone your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --
```

`cd` into your new folder and run:
- ```npm install```
- ```npm start``` to start the app
- this app runs on localhost:8080, but you can of course edit that in index.js

## NOTICE
1. ./xxx == xxx in all filename
2. [EN] In server side, directories passing to express.static and sendFile are relative to the directory we start the node progress. So an absolute path is more safe.
express.static(__dirname + '/public')
2. [CH] 在服务端，输入到express.static和sendFile的相对路径是相对于node进程的启动目录的。因此，提供绝对路径更加安全。express.static(__dirname + '/public')