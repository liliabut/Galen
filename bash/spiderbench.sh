#!/bin/bash

#Variables
DEFAULT='\033[1;37m' #white text
BLUE='\033[1;36m'
RED='\033[0;31m'
HB=$(which brew)
AB=$(which ab)
WGET=$(which wget)
URL='http://webcenter14-publish.dev-unitb.de/content/g2624-0/internetneu_1/website/start.html'

spinner() {
	local pid=$1
	local delay=0.01
	local spinstr="|/-\'"
	tput civis;
	while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
	local temp=${spinstr#?}
	printf " [%c] " "$spinstr"
	local spinstr=$temp${spinstr%"$temp"}
	sleep $delay
	printf "\b\b\b\b\b\b"
	done
	printf " \b\b\b\b"
	tput cnorm;
}
crawl() {
	touch '/Users/lbut/galen/crawl.txt'
	wget --spider -r -nv -m -np -R js,css,jpeg,jpg,png,pdf --reject-regex '(.*)\?(.*)' -o /Users/lbut/galen/crawl.txt --no-check-certificate $URL
}
genlinks() {
	touch '/Users/lbut/galen/sitemap.txt'
	# get the (raw) wget output and make it more readable
	awk 'BEGIN {FS = " " }; { print $3 }' /Users/lbut/galen/crawl.txt | sed '/^URL:.*/!d; s/URL://;' | sed '/^[[:space:]]*$/d' > /Users/lbut/galen/sitemap.txt
	# so we can use the unix 'read' command, add a blank line at end of file.
	sed -i '' -e '$a\' /Users/lbut/galen/sitemap.txt
}
main() {
	clear
	#echo "URL saved as ${BLUE}$URL${DEFAULT}"
	sleep 1
	#echo "Next, we'll create a sitemap with ${BLUE}wget${DEFAULT}"
	echo "Crawling $URL..."
	crawl & spinner $!
	echo "Crawl ${BLUE}FINISHED!${DEFAULT}"
	sleep 1

	echo "Building Links list..."
	genlinks & spinner $!
        rm /Users/lbut/galen/crawl.txt
        rm /Users/lbut/galen/links.txt
	echo "Links generated SUCCESSFULLY. Open the ${BLUE}sitemap.txt${DEFAULT} file to see them."
        killall Terminal
}

main
