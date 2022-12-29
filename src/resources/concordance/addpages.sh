for i in *
do
  echo $i
  git add -f ${i}
  git commit -m "auto add ${i}"
  git push
done
