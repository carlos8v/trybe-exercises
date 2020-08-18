#!/bin/bash

DIR=$1

if [ -d "$DIR" ]; then
    NUMBER_FILES=`ls -l $DIR | wc -l`
    echo "O $DIR tem $NUMBER_FILES arquivos"
else
    echo "O argumento $DIR não é um diretório"
fi