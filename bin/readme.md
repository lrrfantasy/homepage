#image-process.sh

Resize image to centre and 1600x1067 size.

#compress.sh

Compress image to small size

#sample.sh

Take a thumbnail of image

#Order
1. image-process.sh
2. compress.sh
3. sample.sh

#Script

for file in `ls`; do ../../../bin/image-process.sh $file; done
