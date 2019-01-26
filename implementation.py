import re


def driver(l,p):
    lang=l
    path=p
    f=open(path)
    data=f.read()
    ncom,loc,program=LOC(lang,data)
    print(LOC(lang,data))


def LOC(lang,data):
    if lang=='c' or lang=='cpp' or lang=='java' or lang=='csharp' or lang=='php' or lang=='javascript':
        Ncom=data.count('//')+data.count('/*')
        program=re.sub(re.compile("/\*.*?\*/",re.DOTALL ) ,"" ,data)
        program=re.sub(re.compile("//.*?\n" ) ,"" ,program)
        program=program.replace('{',';')
        program=program.strip().split(';')
        LOC=len(program)-1
        return Ncom,LOC,program[:-1]
    elif lang=='py':
        Ncom=(data.count("'''")//2)+data.count("#")
        program=re.sub(re.compile("\'\'\'.*?\'\'\'",re.DOTALL),"",data)
        program=re.sub(re.compile("#.*?\n"),"" ,program)
        program=program.replace("\t","")
        program=program.strip().split('\n')
        LOC=len(program)-1
        return Ncom,LOC,program[:-1]
        
    





'''def LOC(lang,data):
    if lang=='c' or lang=='cpp' or lang=='java' or lang=='csharp' or lang=='php' or lang=='javascript':
        
        data1=data.replace('{',';')
        data1=data1.strip().split(';')
        comment=0
        length=len(data1)
        loc=length-1
        index=0
        while index<length:
            line=data1[index]
            line=line.strip()
            if len(line)<3:
                break
            if line[0]=='/' and line[1]=='/':
                comment+=1
                print(line)
                index+=1
                continue
            elif '/'in line and '*' in line:
                i1=line.index('/')
                i2=line.index('*')
                if i1==i2-1:
                    comment+=1
                    print(line)
                    index+=1
                    if '*' in line and '/' in line:
                            i3=line.index('*')
                            i4=line.index('/')
                            if i3==i4-1:
                                if i4!=len(line):
                                    loc+=1
                                    continue
                    while index<length:
                        comment+=1
                        
                        line=data1[index]
                        line=line.strip()
                        print(line)
                        if '*' in line and '/' in line:
                            i3=line.index('*')
                            i4=line.index('/')
                            if i3==i4-1:
                                if i4!=len(line):
                                    loc+=1
                                break
                        index+=1        
                if i1!=0:
                    loc+=1
            index+=1
        print("Lines Of Codes: ",loc-comment,loc,length-1)
        print("Lines Of Comments: ", comment)'''
                    
                    
                
                
        
    
