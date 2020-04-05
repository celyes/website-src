#!/bin/bash 
set -e

if test -z "$1"
then
	echo -e "\e[1;31mProvide a commit message!\e[0m"
	exit
fi
vendor/bin/statie generate source
mv /var/www/html/website-src/output/404/index.html /var/www/html/website-src/output/404.html
rm -rf /var/www/html/website-src/output/404/
echo -e "\e[32mRelocated 404 page...\e[0m"
git add .
git commit -m "$1"
git push origin master
echo -e "\e[1;32mDeploy status: OK\e[0m"