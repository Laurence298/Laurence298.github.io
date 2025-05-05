echo "switching to master branch..."

git checkout main


echo "Deploying to master branch..."

scp -r build/* root@laurence-nod-frontend:/var/www/waywards.net

echo "done"