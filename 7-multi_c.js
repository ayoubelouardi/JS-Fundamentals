let phrase = "C is fun";
let i = 0;

const argc = process.argv.length;
const argv = Number(process.argv[2]);


if (!(isNaN(argv)))
{
    if (argv > 0)
    {
        for (i = 0; i < argv; i++)
        {
            console.log("C is fun");
        }
    }
}
else
{
    console.log("Missing number of occurrences");
}
