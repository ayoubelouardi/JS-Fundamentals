const first = Number(process.argv[2]);
const second = Number(process.argv[3]);

function add(a, b)
{
    return (a + b);
}

let result = add(first, second);

console.log(result);
