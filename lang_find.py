f=open("extensions.txt",'r')
lang={}
lines=f.read().split('\n')
for line in lines:
    data=line.strip().split(' ')
    for i in range(1,len(data)):
        lang[data[i].lower()]=data[0].lower()

def language(s):
    return lang[s.lower()]





    
