for i in {1..5}
do
  git add -f page${i}.json
  git commit -m "page${i}"
  git push
done
