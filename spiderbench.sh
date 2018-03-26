#!/bin/bash

#Variables
URL='https://www.genobroker.de/homepage.html'

spinner() {
	local pid=$1
	local delay=0
	local spinstr="|/-\'"
	tput civis;
	while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
	local temp=${spinstr#?}
	printf " [%c] " "$spinstr"
	local spinstr=$temp${spinstr%"$temp"}
	#sleep $delay
	printf "\b\b\b\b\b\b"
	done
	printf " \b\b\b\b"
	tput cnorm;
}
crawl() {
	touch '/Users/lbut/galen/crawl.txt'
	wget --no-cache --delete-after --spider -e robots=off -r -nH -nd -nv -m -np -R js,css,jpeg,jpg,png,pdf,txt,doc,docx,m4a --reject-regex '(.*)\?(.*)' -o /Users/lbut/galen/crawl.txt --no-check-certificate $URL
}

genlinks() {
	touch '/Users/lbut/galen/sitemap.txt'
	# get the (raw) wget output and make it more readable
	awk 'BEGIN {FS = " " }; { print $3 }' /Users/lbut/galen/crawl.txt | sed '/^URL:.*/!d; s/URL://;' | sed '/^[[:space:]]*$/d' > /Users/lbut/galen/sitemap.txt
	# so we can use the unix 'read' command, add a blank line at end of file.
	#sed -i '' -e '$a\' /Users/lbut/galen/sitemap.txt
}
main() {
	clear
	echo "Building Links list..."
	crawl & spinner $!
	genlinks & spinner $!
        rm /Users/lbut/galen/crawl.txt
        rm /Users/lbut/galen/links.txt
	echo "Links generated SUCCESSFULLY. Open the sitemap.txt file to see them."
        #killall Terminal
}

main