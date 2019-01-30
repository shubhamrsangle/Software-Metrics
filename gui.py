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

e1 = tk.Entry(root, width=40)
e1.pack()

def click():
	txt = e1.get()
	if txt == '':
		txt = 'test.py'
	print('-',txt,'-')
	lang, data = run(txt)
	window = tk.Toplevel(root)
	window.geometry("500x300")
	window.resizable(0, 0)
	
	def click1():
		window1 = tk.Toplevel(root)
		window1.geometry("500x300")
		window1.resizable(0, 0)
		text = tk.Text(window1)
		text.pack()
		Ans = LOC(lang,data)
		print(Ans[1])
		txt = 'LOC = '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans[1]))
		text.insert(END, ' ')

	def click2():
		window1 = tk.Toplevel(root)
		window1.geometry("500x300")
		window1.resizable(0, 0)
		text = tk.Text(window1)
		text.pack()
		Ans = cyclometric(lang,data)
		print(Ans)
		txt = 'McCabe Cyclometric Complexity = '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans))
		text.insert(END, ' ')

	def click3():
		window1 = tk.Toplevel(root)
		window1.geometry("500x300")
		window1.resizable(0, 0)
		text = tk.Text(window1)
		text.pack()
		Ans = LOC(lang,data)
		print(Ans[0])
		txt = 'Comment Lines = '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans[0]))
		text.insert(END, ' ')

	def click4():
		window1 = tk.Toplevel(root)
		window1.geometry("500x300")
		window1.resizable(0, 0)
		text = tk.Text(window1)
		text.pack()
		Ans = fanIn(lang,data)
		print(Ans)
		txt = 'Fan-In = '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans))
		text.insert(END, ' \n')
		Ans = fanOut(lang,data)
		txt = 'Fan-Out = '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans))
		text.insert(END, ' ')

	def click5():
		window1 = tk.Toplevel(root)
		window1.geometry("500x300")
		window1.resizable(0, 0)
		text = tk.Text(window1)
		text.pack()
		Ans = henryKafura(lang,data)
		print(Ans)
		txt = 'Henry Kafura Measure =  '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans))
		text.insert(END, ' \n')

	def click6():
		window1 = tk.Toplevel(root)
		window1.geometry("500x300")
		window1.resizable(0, 0)
		text = tk.Text(window1)
		text.pack()
		Ans = NOM(lang,data)
		print(Ans[0])
		txt = 'Number of Modules =  '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans[0]))
		text.insert(END, ' \n')

	def click7():
		window1 = tk.Toplevel(root)
		window1.geometry("500x300")
		window1.resizable(0, 0)
		text = tk.Text(window1)
		text.pack()
		Ans = WMC(lang,data)
		print(Ans)
		txt = 'Weighted Methods per Class =  '
		text.insert(INSERT, txt)
		text.insert(INSERT, str(Ans))
		text.insert(END, ' \n')

	tk.Button(window, text='Lines of Code', width=25, command=click1).pack()
	tk.Button(window, text="McCabe's Cyclometric Complexity", width=25, command=click2).pack()
	tk.Button(window, text='Comment Lines', width=25, command=click3).pack()
	tk.Button(window, text='Fan-In Fan-Out', width=25, command=click4).pack()
	tk.Button(window, text='Henry Kafura Measure', width=25, command=click5).pack()
	tk.Button(window, text='Number of Modules', width=25, command=click6).pack()
	tk.Button(window, text='Weighted Methods per Class', width=25, command=click7).pack()

tk.Button(root, text='Calculate metrics', width=25, command=click).pack()

root.mainloop()