set -e

git add . && git commit -m "Deploy"
git subtree push --prefix output origin gh-pages
