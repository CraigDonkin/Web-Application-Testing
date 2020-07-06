#!/bin/bash

Help()
{
	#displaying help
	echo
	echo "options:"
	echo "scripttest.sh [url] [port]"
	echo
	echo "remove the port number and https:// tags from the url before hand"
	echo "the script will save the public key in the directory it was ran called hostname.pem"
	echo "the ascii  key will be saved as hostname-ascii.txt"
}

#main program

Help
varhost=$1
varport=$2

doWork()
{

openssl s_client -showcerts $varhost:$varport </dev/null 2>/dev/null|openssl x509 -pubkey -noout | tee >(xxd -p | tr -d "\\n" > asciihex-$varhost.txt) > pubkey-$varhost.pem
}
doWork
