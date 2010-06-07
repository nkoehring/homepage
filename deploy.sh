PATH=/opt/ruby1.8/bin:$PATH # just for people handling Ruby1.8 besides Ruby1.9
archive=nkoehring.de.tbz2

staticmatic build .
tar cjf $archive site
scp $archive nkoehring.de:~

echo "Upload finished… running remote deployment script…"
ssh nkoehring.de 'sh ~/deploy_website.sh' && echo "Done." || echo "Failed… :("

rm $archive

