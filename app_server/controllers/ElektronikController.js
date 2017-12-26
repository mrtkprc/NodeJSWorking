module.exports.Index = function(req,res)
{
    console.log(req.Sample);
    res.render('elektronik');
    res.end();
}
module.exports.IndexPost = function(req,res)
{
    console.log(req.body);
    res.render('elektronik');
    res.end();
}
module.exports.Bilgisayar = function(req,res)
{
    var pc = ['Toshiba','Mac','Asus','HP','Lenovo']; 
    res.render('bilgisayar',{pc:pc});
}

