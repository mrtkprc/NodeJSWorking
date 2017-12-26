module.exports.Index = function(req,res)
{
    res.write('Elektronik index');
    res.end();
}
module.exports.Bilgisayar = function(req,res)
{
    res.write('Bilgisayar index');
    res.end();
}

