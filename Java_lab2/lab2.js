function pow(x, n)
{
    return x**n;
}
function sumTo(n)
{
    return (n*(n+1))/2

}
function factorial(n)
{
    return BigInt(n ? (n * factorial(n-1)) : 1) ;
}
function fib(n){
    a = BigInt(1);
    b=BigInt(1);
    if (n== BigInt(0))
    {
        return BigInt(0);
    }
    else
    {
        for (i = BigInt(3); i<=n; i++)
        {
            c = a+b;
            a=b;
            b=c;
        }
        return b;
    }
}