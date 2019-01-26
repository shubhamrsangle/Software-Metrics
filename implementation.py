import re

def driver(l,p):
    lang=l
    path=p
    f=open(path)
    data=f.read()
    ncom,loc,program=LOC(lang,data)
    LOC(lang,data)
    NOM(lang,data)
    print(WMC(lang,data))

def LOC(lang,data):
    if lang=='c' or lang=='cpp' or lang=='java' or lang=='csharp' or lang=='php' or lang=='javascript':
        Ncom=data.count('//')+data.count('/*')
        program=re.sub(re.compile("/\*.*?\*/",re.DOTALL ) ,"" ,data)
        program=re.sub(re.compile("//.*?\n" ) ,"" ,program)
        program=program.replace('{',';')
        program=program.strip().split(';')
        LOC=len(program)-1
        return Ncom,LOC,program[:-1]
    elif lang=='python':
        Ncom=(data.count("'''")//2)+data.count("#")
        program=re.sub(re.compile("\'\'\'.*?\'\'\'",re.DOTALL),"",data)
        program=re.sub(re.compile("#.*?\n"),"" ,program)
        program=program.replace("\t","")
        program=program.strip().split('\n')
        LOC=len(program)-1
        return Ncom,LOC,program[:-1]

def NOM(lang,data):
    data=re.sub(re.compile("/\*.*?\*/",re.DOTALL ) ,"" ,data)
    data=re.sub(re.compile("//.*?\n" ) ,"" ,data)
    if lang=='c' or lang=='cpp' or lang=='php':
        a=re.compile("class.*?}\s*;",re.DOTALL)
        ans= a.findall(data)
        data=re.sub(a,"",data)
        b=re.compile("struct.*?}\s*;",re.DOTALL)
        ans1=b.findall(data)
        data=re.sub(b,"",data)
        nstruct=len(ans)
        nclass=len(ans1)
        c=re.compile("\)\s*\n*{.*?}",re.DOTALL)
        functions=c.findall(data)
        scope=data.count("::")
        outmethods=len(functions)-scope
        nom=nstruct+nclass+outmethods
        return nom,nstruct,nclass,outmethods
    elif lang=='java' or lang=='csharp':
        classnum=data.count("class ")+data.count('interface')
        return classnum,0,classnum,0
    elif lang=='javascript':
        funct=data.count('function ')
        return funct,0,0,funct
    elif lang=='python':
        funct=data.count('class ')
        return funct

def WMC(lang,data):
    if lang=='python':
        dic={}
        a=re.compile("class\s*",re.DOTALL)
        data=a.split(data)
        data=data[1:]
        for mod in data:
            ind=mod.index(':')
            classname=mod[:index]
            dic[classname]=mod.count('def')
        return dic
    elif lang=='c' or lang=='cpp' or lang=='php':
        dic={}
        a=re.compile("class.*?}\n*\s*;",re.DOTALL)
        ans= a.findall(data)
        for mod in ans:
            tmp=mod.split(' ')
            classname=tmp[1]
            c=re.compile("\(.*?\)\n*\s*;",re.DOTALL)
            functions=c.findall(mod)
            d=re.compile("\(.*?\)\n*\s*{",re.DOTALL)
            functions1=d.findall(mod)
            dic[classname]=len(functions)+len(functions1)-mod.count("scanf")-mod.count("printf")
        return dic
    elif lang=='javascript':
        dic={}
        dic["OUTSIDE"]= data.count('function ')
        return dic
    elif lang=='java' or lang=='csharp':
        dic={}
        data.replace("interface","class")
        a=re.compile("class\s*",re.DOTALL)
        data=a.split(data)
        data=data[1:]
        for mod in data:
            a=re.compile("\(.*?\)\n*\s*{",re.DOTALL)
            functions=a.findall(mod)
            mod=mod.split(' ')
            dic[mod[0]]=len(functions)
        return dic
            
        
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
                    
                    
                
                
        
    
