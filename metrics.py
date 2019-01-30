from lang_find import language as lan
import os
import implementation
all_metrics={}

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
            all_metrics[k]=implementation.driver(language1,p+'\\'+k)
def run(c):
    
    print(c)            
    if is_valid(c)==False:   
        all_files=os.listdir(c)
        for file1 in all_files:
            print(file1)
            if is_valid(file1)==False:   
                visit(c+'\\'+file1)
            else:
                language1=is_valid(file1)
                print(file1)
                all_metrics[file1]=implementation.driver(language1,c+'\\'+file1)
    else:
        language1=is_valid(c)
        print(c)
        all_metrics[c]=implementation.driver(language1,c)
    return all_metrics
