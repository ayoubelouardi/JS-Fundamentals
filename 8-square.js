let i = 0;
let j = 0;
let block = "";

const argv = Number(process.argv[2]);


if (!(isNaN(argv)))
{
    if (argv > 0)
    {
        for (j = 0; j < argv; j++)
        {
            block += "X";
        }
        for (i = 0; i < argv; i++)
        {
            console.log(block);
        }
    }
}
else
{
    console.log("Missing size");
}
