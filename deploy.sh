#!/bin/bash 
set -e

if test -z $1 
then
	echo "\e[31;1mProvide a commit message!\e[0m"
	exit
else
	vendor/bin/statie generate source
	git add .
	git commit -m "$1"
	echo "\e[32;1mDeployed successfully!\e[0m"
fi