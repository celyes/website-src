#!/bin/bash 
set -e

if test -z "$1"
then
	echo -e "\e[1;31mProvide a commit message!\e[0m"
	exit
fi
vendor/bin/statie generate source
git add .
git commit -m "$1"
git push origin master
echo -e "\e[1;32mDeployed successfully!\e[0m"