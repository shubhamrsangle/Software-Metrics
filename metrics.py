from lang_find import language as lan
import os
import implementation
c=raw_input()
def is_valid(p):
    i=len(p)-1
    while p[i]!='.' and i>=0:
        i-=1
    exten=p[i+1:]
    lang=lan(exten)
    if lang==-1:
        return False
    return lang
def visit(p):
    try:
        all_files=os.listdir(p)
    except:
        all_files=[]
        
    for k in all_files:
        if is_valid(k)==False:
            visit(p+'\\'+k)
        else:
            language1=is_valid(k)
            print(k)
            implementation.driver(language1,p+'\\'+k)
            
            
if is_valid(c)==False:   
    all_files=os.listdir(c)
    for file1 in all_files:
        if is_valid(file1)==False:   
            visit(c+'\\'+file1)
        else:
            language1=is_valid(file1)
            print(file1)
            implementation.driver(language1,c+'\\'+file1)
else:
    language1=is_valid(c)
    print(c)
    implementation.driver(language1,c)

        
    

'''from lang_find import language as lan
import implementation

Path=input("Enter Path of File ")
i=len(Path)-1
while Path[i]!='.':
    i-=1
exten=Path[i+1:]
lang=language(exten)'''


