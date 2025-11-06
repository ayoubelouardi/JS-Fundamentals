const input = Number(process.argv[2]);

if (isNaN(input))
{
    console.log("Not a number");
}
else
{
    console.log("My number:", input);
}
