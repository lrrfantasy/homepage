#!/bin/bash

mogrify -strip -interlace Plane -quality 85% $1
