'''from os import walk
import os
import sys
print(os.path.dirname(sys.argv[0]))
f = []
d = []
for (dirpath, dirnames, filenames) in walk('C:\Users\Shubham\Documents\Visual Studio 2017\Backup Files'):
    f.extend(filenames)
    d.extend(dirnames)'''
from lang_find import language as lan
import implementation

Path=input("Enter Path of File ")
i=len(Path)-1
while Path[i]!='.':
    i-=1
exten=Path[i+1:]
lang=lan(exten,Path)

