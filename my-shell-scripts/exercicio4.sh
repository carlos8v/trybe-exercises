#!/bin/bash

FILE="`pwd`/exercicio1.sh"

if [ -e "$FILE" ]; then
	echo "O caminho $FILE está habilitado!"
fi

if [ -w "$FILE" ]; then
	echo "Você tem permissão de editar $FILE"
else
	echo "Você NÃO foi autorizado a editar $FILE"
fi
