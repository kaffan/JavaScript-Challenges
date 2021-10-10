let createImage = function(path)
{
    return new Promise(function(resolve,reject)
    {
        let img = document.createElement('img');
        img.src = path;
        img.addEventListener('load',function()
        {
            document.querySelector('.images').append(img);
            return resolve(img);
        });      
        img.addEventListener('error',function()
        {
            return reject("Failed to load the image");
        });
    });
}
const wait = function(sec)
{
    return new Promise(function(resolve)
    {
        setTimeout(resolve,sec*1000);
    });
}
let newImg;
createImage('img/img-1.jpg')
.then(function(res){
    newImg = res;
    console.log('Image 1 loaded');
    return wait(5);
})
.then(function(res)
{
    newImg.style.display = 'none';
    return createImage('img/img-2.jpg');
})
.then(function(res)
{
    newImg = res;
    console.log('Image 2 loaded');
    return wait(5);
})
.then(function(res)
{
    newImg.style.display = 'none';
    return createImage('img/img-3.jpg');
})
.catch(function(err)
{
    alert(err);
});
