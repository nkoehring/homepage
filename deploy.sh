PATH=/opt/ruby1.8/bin:$PATH # just for people handling Ruby1.8 besides Ruby1.9
staticmatic build .
tar cjf nkoehring.de.tbz2 site
scp nkoehring.de.tbz2 nkoehring.de:~

