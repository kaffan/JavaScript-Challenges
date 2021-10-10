function whereAmI(lat,long)
{
    const loc = fetch('https://geocode.xyz/'+lat+','+long+'?geoit=json');
    let obj,data;
    obj = loc.then(res => 
    {
        console.log(res);
        if(!res.ok)
           throw new Error("Requests Overflow ");
        return res.json()
    });
    obj.then(data => {
        console.log(data);
        console.log("You are in "+data.city+", "+data.country);
    })
    .catch(function(err)
    {
        console.log(err+"Try again later.");
    });
}
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);