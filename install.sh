#!/bin/sh
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

# echo "${red}red text ${green}green text${reset}"
echo "${green}- Installing backend project${reset}"
cd backend
npm install &
echo "${green}- Installing frontend project${reset}"
cd ../frontend
npm install &
echo "${green}# Project started${reset}"
wait