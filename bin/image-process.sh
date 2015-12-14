#!/bin/bash

convert $1 -gravity center -resize 1600 -crop 1600x1067+0+0 $1
