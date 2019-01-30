public class Fibonacci1 {

    public static void fibo1() {

        int n = 10, t1 = 0, t2 = 1;
        System.out.print("First " + n + " terms: ");

        for (int i = 1; i <= n; ++i)
        {
            System.out.print(t1 + " + ");

            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
    }
}

public class Fibonacci2 {

    public static void fibo2() {

        int n = 10, t1 = 0, t2 = 1;
        System.out.print("First " + n + " terms: ");

        for (int i = 1; i <= n; ++i)
        {
            System.out.print(t1 + " + ");

            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
    }
    Fibonacci1 fib1 = new Fibonacci1();
    fib1.fibo1();
    Fibonacci1 fib2 = new Fibonacci1();
    fib2.fibo1();
    Fibonacci fib = new Fibonacci();
    fib.fibo();
}

public class Fibonacci {

    public static void main(String[] args) {

        int n = 10, t1 = 0, t2 = 1;
        System.out.print("First " + n + " terms: ");

        for (int i = 1; i <= n; ++i)
        {
            System.out.print(t1 + " + ");

            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
    }
    Fibonacci2 fib2 = new Fibonacci2();
    fib2.fibo2();
}
