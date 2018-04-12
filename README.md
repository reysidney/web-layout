# common-web-project
This project will instruct me on how to add packages, libraries, etc

### Install NPM
    sudo apt-get update
    sudo apt-get install nodejs

### Check if version of NPM to make sure it is installed
    npm -v

### Install Bower
    npm install -g bower

### Initialize Bower
    bower init
- Make sure you make package private.

### Install Bootstrap SASS
    bower install bootstrap-sass --save-dev
    
### Initialize NPM
    npm init

### Install Gulp
    npm install --global gulp
    npm install gulp --save-dev
    npm install gulp-concat --save-dev
    npm install gulp-sass --save-dev
    npm install gulp-rename --save-dev
    npm install gulp-clean-css --save-dev
    npm install gulp-uglify --save-dev
    npm install gulp-obfuscate --save-dev

### Compile CSS/JS
    gulp

### Install Live Server
    npm install -g live-server

### RUN Live Server Default port = 8080
    cd public
    live-server
or

    live-server --port=8000 
    
to change port