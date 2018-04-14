# Common Web Layout Project
This project is used for making web projects

## Install NPM
    sudo apt-get update
    sudo apt-get install nodejs

## Check if version of NPM to make sure it is installed
    npm -v

## Install Bower
    npm install -g bower

## Install Dependencies
    npm install
    bower install

## Compile CSS/JS
    gulp

## Install Live Server
    npm install -g live-server

## RUN Live Server Default port = 8080
    cd public
    live-server
or

    live-server --port=8000 
    
to change port

##Update Theme Main Color in _customVariables.scss
    $main-color