set -e

cd /var/www/html/mysite/

vendor/bin/statie generate source

cd output/

mv ./blog/:year/:month/:day/index/index.html ./blog/index.html
rm -rf blog/:year
git add .
git commit -m "deploy"
git push -f origin master

cd ..

echo "Deploy status:\e[32m OK \e[0m"


