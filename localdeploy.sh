set -e

cd /var/www/html/mysite/

vendor/bin/statie generate source

cd output/

mv ./blog/:year/:month/:day/index/index.html ./blog/index.html
rm -rf blog/:year

echo "[!] blog index's old directory: DELETED"

cd ..

echo "[+] Local deploy status: OK"


