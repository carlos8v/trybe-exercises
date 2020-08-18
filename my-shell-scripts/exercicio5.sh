#!/bin/bash

read -p "Digite o diretório ou um arquivo:" FILE

if [ -f "$FILE" ]; then
	echo "$FILE é um arquivo comum"
elif [ -d "$FILE" ]; then
	echo "$FILE é um diretório"
else
	echo "$FILE é outro tipo de arquivo"
fi

ls -l $FILE
