(function()
{
    function fibonacci(num)
    {
    let previous = 0, current = 1, output = 0;
    console.log(previous);
    console.log(current);
    for(let i = 1; i <= 5; i++)
    {
      output = previous + current;
      console.log(output);
      previous = current;
      current = output;

    }
    }
    console.log(fibonacci(5))
})();