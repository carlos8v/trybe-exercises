#!/bin/bash

DIR=$1
EXT=$2

DAY=`date +%F`

cd $DIR

for FILE in `ls *.$EXT`; do
    echo "Renomeando $FILE para $DAY-$FILE"
    mv $FILE $DAY-$FILE
done