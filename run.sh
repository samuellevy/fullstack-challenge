#!/bin/sh
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

# echo "${red}red text ${green}green text${reset}"
echo "${green}# Start project${reset}"
echo "${green}- starting backend project${reset}"
cd backend
npm run start:dev &
echo "${green}- starting frontend project${reset}"
cd ../frontend
npm run start &
echo "${green}# Project started${reset}"
wait