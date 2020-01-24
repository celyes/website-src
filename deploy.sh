set -e

git add . && git commit -m "Deploy"
git push -f origin dev
git subtree push --prefix output origin gh-pages
