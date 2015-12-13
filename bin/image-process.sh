#!/bin/bash

convert -quality 0.7 $1 -resize 50% "new-$1"
