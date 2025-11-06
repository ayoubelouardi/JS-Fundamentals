let phrase = "C is fun";
let i = 0;

const argc = process.argv.length;

if (argc < 1)
{
    console.log("");
}
else if (argc == 1)
{
    console.log("Missing number of occurrences");
}
else
{
    const input = Number(process.argv[2]);

    for (i = 0; i < input; i++)
    {
        console.log(phrase);
    }
}
