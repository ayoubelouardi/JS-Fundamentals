let i = 0;
let j = 0;

const argv = Number(process.argv[2]);


if (!(isNaN(argv)))
{
    if (argv >= 0)
    {
        console.log(factorial(argv));
    }
}
else
{
    // this is a bad practice, it's easier to implement 
    // on the level of the factorial function the checking
    // of is the input a number or not, and returning 1 if not
    // a number. but i don't have time right now.
    console.log(1);
}


function factorial(a)
{
    if (a == 0 || a == 1)
    {
        return (a);
    }
    else
    {
        return (factorial(a - 1) * a);
    }
}
