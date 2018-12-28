#!/bin/sh

if [ ! -e "./config.ini" ]
then
    cp config.ini.default config.ini
fi