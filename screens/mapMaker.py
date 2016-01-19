from PIL import Image
im = Image.open("img/roomff0000.bmp")
pix = im.load()
string = "maps[1] = [";
for x in xrange(0, im.size[0]):
	string+="["
	for y in xrange(0, im.size[1]):
		
		string+=str(pix[x, y])
                #string+=hex(pix[x, y][1]).split('x')[1]
		#string+=hex(pix[x, y][2]).split('x')[1]
		
		if y<im.size[1]-1: string+=","
	string+="]"
	if x<im.size[0]-1: string+=","
string+="];"
f = open("map_1.js", "w")
f.write(string)
f.close()

#cd C:/PythonP 