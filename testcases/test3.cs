public static voidFibonacci_Iterative(int len)  
{  
    int a = 0, b = 1, c = 0;  
    Console.Write("{0} {1}", a,b);  
    for (int i = 2; i < len; i++)  
    {  
        c= a + b;  
        Console.Write(" {0}", c);  
        a= b;  
        b= c;  
    }  
}

public static voidFibonacci_Recursive(int len)  
{  
   Fibonacci_Rec_Temp(0, 1, 1, len);  
}  
private static voidFibonacci_Rec_Temp(int a, int b, int counter, int len)  
{  
    if (counter <= len)  
    {  
        Console.Write("{0} ", a);  
        Fibonacci_Rec_Temp(b, a + b, counter+1, len);  
    }  
} 

public static int GetNthFibonacci_Ite(int n)  
{  
    int number = n - 1; //Need to decrement by 1 since we are starting from 0  
    int[] Fib = new int[number + 1];  
    Fib[0]= 0;  
    Fib[1]= 1;  
    for (int i = 2; i <= number;i++)  
    {  
       Fib[i] = Fib[i - 2] + Fib[i - 1];  
    }  
    return Fib[number];  
} 

public static int GetNthFibonacci_Rec(int n)  
{  
    if ((n == 0) || (n == 1))  
    {  
        return n;  
    }  
    else  
        returnGetNthFibonacci_Rec(n - 1) + GetNthFibonacci_Rec(n - 2);  
} 