#!/bin/bash

. tests.sh

sub_topic="hermes/nlu/intentParsed";
pub_topic="hermes/nlu/query";

generate() {
    rm $1.txt &> /dev/null;
    if [ $1 = 'valid_tests' ]
    then
        tests=("${valid_tests[@]}");
        prefix='valid_test_';
    else
        tests=("${invalid_tests[@]}");
        prefix='invalid_test_';
    fi
    mosquitto_sub -t $sub_topic > $1.txt &
    pid=$!;
    sleep .1;
    for query in "${tests[@]}"
    do
        mosquitto_pub -t $pub_topic -m "{\"input\": \"$query\"}";
        sleep .2;
    done
    sleep .2;
    kill $pid &> /dev/null;
    csplit -f $prefix -k ${1}.txt 1 {*} &> /dev/null;
    rm ${prefix}0 $1.txt;
    echo;
    tail -n +1 $prefix*;
    echo;
}

generate valid_tests;
generate invalid_tests;
