import Tkinter as tk
from Tkinter import END, INSERT
from implementation import *
from metrics import *
import subprocess as sub

root = tk.Tk()
root.title("Software Metrics")
root.geometry("500x300")
root.resizable(0, 0)

tk.Label(root, text='Path to file/directory').pack()
dic={}
e1 = tk.Entry(root, width=40)
e1.pack()
def click():
	txt = e1.get()
	if txt == '':
		txt = 'test.py'
	print('-',txt,'-')
	global dic
	dic= run(txt)
	print(dic)
	window = tk.Toplevel(root)
	window.geometry("500x300")
	window.resizable(0, 0)
	

	
	tk.Button(window, text='Lines of Code', width=25, command=click1).pack()
	tk.Button(window, text="McCabe's Cyclometric Complexity", width=25, command=click2).pack()
	tk.Button(window, text='Comment Lines', width=25, command=click3).pack()
	tk.Button(window, text='Fan-In Fan-Out', width=25, command=click4).pack()
	tk.Button(window, text='Henry Kafura Measure', width=25, command=click5).pack()
	tk.Button(window, text='Number of Modules', width=25, command=click6).pack()
	tk.Button(window, text='Weighted Methods per Class', width=25, command=click7).pack()
def click1():
        print(dic)
        window1 = tk.Toplevel(root)
        window1.geometry("500x300")
        window1.resizable(0, 0)
        text = tk.Text(window1)
        text.pack()
        for key in dic:
                Ans=dic[key]["LOC"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'LOC = '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans[1]))
                text.insert(END, '\n\n')

def click2():
        window1 = tk.Toplevel(root)
        window1.geometry("500x300")
        window1.resizable(0, 0)
        text = tk.Text(window1)
        text.pack()
        for key in dic:
                Ans=dic[key]["cyclometric"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'McCabe Cyclometric Complexity = '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans))
                text.insert(END, '\n\n')

def click3():
        window1 = tk.Toplevel(root)
        window1.geometry("500x300")
        window1.resizable(0, 0)
        text = tk.Text(window1)
        text.pack()
        for key in dic:
                Ans=dic[key]["LOC"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'Number Of Comments = '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans[0]))
                text.insert(END, '\n\n')

def click4():
        window1 = tk.Toplevel(root)
        window1.geometry("500x300")
        window1.resizable(0, 0)
        text = tk.Text(window1)
        text.pack()
        for key in dic:
                Ans=dic[key]["fanin"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'Fan-In = '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans))
                text.insert(END, '\n\n')
        for key in dic:
                Ans=dic[key]["fanout"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'Fan-Out = '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans))
                text.insert(END, '\n\n')

def click5():
        window1 = tk.Toplevel(root)
        window1.geometry("500x300")
        window1.resizable(0, 0)
        text = tk.Text(window1)
        text.pack()
        for key in dic:
                Ans=dic[key]["hk"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'Henry-Kafure Metrics = '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans))
                text.insert(END, '\n\n')

def click6():
        window1 = tk.Toplevel(root)
        window1.geometry("500x300")
        window1.resizable(0, 0)
        text = tk.Text(window1)
        text.pack()
        for key in dic:
                Ans=dic[key]["NOM"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'Total Number Of Modules = '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans[0]))
                text.insert(END, '\n\n')

def click7():
        window1 = tk.Toplevel(root)
        window1.geometry("500x300")
        window1.resizable(0, 0)
        text = tk.Text(window1)
        text.pack()
        for key in dic:
                Ans=dic[key]["WMC"]
                txt1= 'FILE Name='+str(key)+'\n'
                txt = 'Weighted Method Calls= '
                text.insert(INSERT, txt1)
                text.insert(INSERT, txt)
                text.insert(INSERT, str(Ans))
                text.insert(END, '\n\n')	



tk.Button(root, text='Calculate metrics', width=25, command=click).pack()

root.mainloop()
