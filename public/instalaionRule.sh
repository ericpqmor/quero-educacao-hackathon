#!/bin/bash

#This script install the dependencies of the front end
echo "Starting front end dependency download"

#This part is to download ruby, necessary to use Sass
echo "Installing ruby gem"
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.3 ruby2.3-dev

#We  need this to download Sass, which will be installed later with npm
sudo gem install listen --version '~> 3.0'
sudo su -c "gem install sass"

echo "Installing node modules"
#Installing node modules, might take a whike
sudo npm install

echo "After some mensage like: [0] 1945586 bytes written to build/js/bundle.js (5.38 seconds), the instalation is finished"
echo "Then, for continuous use, you must run"
echo "$ sudo npm start"
echo "and let it stay running as long as you make alterations to the code"

sudo npm start
