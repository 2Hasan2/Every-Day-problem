#!/usr/bin/env bash                                                             

var="Tech"
if [ -e "$var" ]
then
    if [ -f "$var" ]
    then
        echo "Betty"
    elif [ -d "$var" ]
    then
        echo "School"
    fi
else
    echo "$var doesn't exist"
fi