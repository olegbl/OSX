#! /bin/bash

# OSX
defaults write com.apple.Finder AppleShowAllFiles YES # Show all files in Finder
export PATH=

# MacPorts Paths
export PATH=$PATH:/opt/local/bin:/opt/local/sbin:/opt/local/include

# Paths
export PATH=$PATH:/usr/bin:/usr/sbin:/usr/local/bin:/bin:/sbin

# NPM Paths
export PATH=$PATH:/usr/local/share/npm/lib:/usr/local/share/npm/bin

# Android Paths
export PATH=$PATH:~/tools/Android/SDK/tools
export PATH=$PATH:~/tools/Android/SDK/platform-tools
export PATH=$PATH:~/tools/Android/NDK
export NDK_HOME=~/tools/Android/NKD

# Go Paths
export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin

# Load NVM
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh

# System
alias reload='. ~/.profile'
