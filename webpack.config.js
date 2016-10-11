{
  "name": "react-project",
  "version": "1.0.0",
  "description": "react-project is the project skeleton",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --config webpack-dev-server.config.js --progress --colors --display-modules",
    "local": "webpack-dev-server --config webpack-dev-server.config.js --progress --inline --colors --port 8080 --host 0.0.0.0",
    "build": "webpack --config webpack.config.js --progress --colors --display-modules"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/trelly/react-project.git"
  },
  "keywords": [
    "react",
    "skeleton",
    "webpack"
  ],
  "author": "terry",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/trelly/react-project/issues"
  },
  "homepage": "https://github.com/trelly/react-project#readme",
  "dependencies": {
    "@realgeeks/react-tinymce": "^0.5.2",
    "babel-polyfill": "^6.9.1",
    "blueimp-file-upload": "^9.12.5",
    "bootstrap": "^3.3.6",
    "classnames": "^2.2.5",
    "iscroll": "^5.2.0",
    "isomorphic-fetch": "^2.2.1",
    "jquery": "^3.0.0",
    "moment": "^2.14.1",
    "normalize.css": "^4.1.1",
    "react": "^15.1.0",
    "react-bootstrap": "^0.29.4",
    "react-bootstrap-datetimepicker": "0.0.22",
    "react-dom": "^15.1.0",
    "react-iscroll": "^1.0.2",
    "react-redux": "^4.4.5",
    "react-router": "^2.6.0",
    "react-tinymce": "^0.5.1",
    "redux": "^3.5.2",
    "redux-form": "^5.2.5",
    "redux-logger": "^2.6.1",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.1.0",
    "webuploader": "^0.1.8"
  },
  "devDependencies": {
    "autoprefixer-loader": "^3.2.0",
    "babel": "^6.5.2",
    "babel-core": "^6.9.1",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.5.0",
    "css-loader": "^0.23.1",
    "exports-loader": "^0.6.3",
    "imports-loader": "^0.6.5",
    "react-hot-loader": "^1.3.0",
    "redux-devtools": "^3.3.1",
    "style-loader": "^0.13.1",
    "transfer-webpack-plugin": "^0.1.4",
    "url-loader": "^0.5.7",
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"
  }
}
