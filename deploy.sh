set -e

if test -z $1 
then
	
	vendor/bin/statie generate source
	mv var/www/html/website-src/output/:year/:month/:day/index/index.html var/www/html/website-src/output/
	rm -rf var/www/html/website-src/output/:year/
	git add .
	git commit -m "$1"
	echo "\e[32;1mDeployed successfully!\e[0m"
fi