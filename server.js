let expres = require('express');
let ta = expres();
let photo = [
{url: 'https://pic.i7lm.com/wp-content/uploads/2019/06/unnamed-1-3.jpg'},
{url:'http://2.bp.blogspot.com/-5hrtzL1o6mE/UHHJO8nVa3I/AAAAAAAAINI/ls8A3oo3vm4/s1600/0_9382e_5317e1f8_orig.jpg'},
{url:'https://media.alalamtv.net/uploads/855x495/152329370846243000.jpg'},
{url:'https://m.3bir.net/files/9206.jpg'},
{url:'http://2.bp.blogspot.com/-L8GbgF7nN-E/UjhF3rYGYVI/AAAAAAAASbc/QzfRetKPbNw/s1600/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9-%D9%84%D8%A7%D9%85%D8%AB%D9%8A%D9%84-%D9%84%D9%87%D8%A7+%2810%29.jpg'},
{url:'https://sowaratfal.net/wp-content/uploads/2018/07/%D8%B5%D9%88%D8%B1-%D9%85%D9%86%D8%A7%D8%B8%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D9%87-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%87-%D8%B5%D9%88%D8%B1%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9-%D8%A7%D8%AC%D9%85%D9%84-%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%87-%D9%88%D8%B1%D8%AF-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%85%D9%86%D8%A7%D8%B8%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-5.jpg'},
{url:'http://www.photobua.com/images/blogphoto/WaVOXOJoTX4iLzHpoumC461668233.jpg'},
{url:'https://hobe.cc/wp-content/uploads/2018/08/6242.jpg'},
{url:'https://besthqwallpapers.com/Uploads/15-10-2018/68820/thumb-himalayas-4k-sunset-mountains-tibet.jpg'},
{url:'https://muthqaf.net/storage/img/351564065224112.jpg'},
{url:'http://goodmorning1.com/wp-content/uploads/2018/04/4821.jpg'},
{url:'https://pic.i7lm.com/wp-content/uploads/2019/07/%D8%A3%D8%AD%D9%84%D9%8A-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-780x405.jpg'},
{url:'https://quotess.cc/wp-content/uploads/2018/06/3856.jpg'},
{url:'http://all-best.co/wp-content/uploads/2018/01/3581.jpg'},
{url:'https://girlspics.cc/wp-content/uploads/2019/07/658.jpg'},
{url:'http://friendss.net/wp-content/uploads/2019/03/7822.jpg'},
{url:'http://best-images.co/wp-content/uploads/2017/09/450-1.jpg'},
{url:'https://abdelshop.com/wp-content/uploads/2019/07/%D8%B5%D9%88%D8%B1-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%87-%D8%AE%D9%84%D8%A7%D8%A8%D9%87-%D9%85%D9%86%D8%A7%D8%B8%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D9%85%D9%86%D8%A7%D8%B8%D8%B1-%D8%AE%D9%84%D8%A7%D8%A8%D8%A9-58.jpg'},
{url:'http://sad-images.net/wp-content/uploads/2019/04/7806.jpg'},
{url:'https://1.bp.blogspot.com/-C7AarXDxuzs/XWp79TyQYxI/AAAAAAAAFGA/YqPodfCjBoEzvuoJ2tUJyLENpvBTd7fgwCEwYBhgL/s1600/%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D8%25A9%2B%25D8%25AC%25D9%2585%25D9%258A%25D9%2584%25D8%25A92020%2B%2B%2B%25281%2529.jpg'},
{url:'http://www.misr5.com/wp-content/uploads/2016/03/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9-%D9%88%D9%85%D9%86%D8%A7%D8%B8%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D9%84%D9%84%D8%A3%D9%86%D9%87%D8%A7%D8%B1-7.jpg'},
{url:'http://all-best.co/wp-content/uploads/2017/11/3792.jpg'},
{url:'https://cofee.cc/wp-content/uploads/2019/08/1700.jpg'},
{url:'https://storyy.cc/wp-content/uploads/2019/07/2952-1.jpg'},
{url:'https://pic.i7lm.com/wp-content/uploads/2019/07/road-1072823_960_720-780x405.jpg'},
{url:'https://www.almstba.com/imgcache/almastba.com_1388747529_734.jpg'},
{url:'https://love-words.net/wp-content/uploads/2019/07/10771-1.jpg'},
{url:'https://postt.cc/wp-content/uploads/2019/08/1210-4.jpg'},
{url:'http://www.tran33m.com/uploadcenter/uploads/12-2011/PIC-150-1324733325.jpg'},
{url:'https://picturess.cc/wp-content/uploads/2018/09/1499-4.jpg'},
{url:'https://eveningg.cc/wp-content/uploads/2019/07/6082-1.jpg'},
{url:'http://www.misr5.com/wp-content/uploads/2016/03/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9-%D9%88%D9%85%D9%86%D8%A7%D8%B8%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D9%84%D9%84%D8%A3%D8%B4%D8%AC%D8%A7%D8%B1-1.jpg'},
{url:'https://kisss.cc/wp-content/uploads/2018/07/3911-3.jpg'},
{url:'https://m.3bir.net/files/80756.jpg'},
{url:'https://www.llssll.com/wp-content/uploads/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D9%85%D9%86%D8%A7%D8%B8%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%BA%D8%B1%D9%88%D8%A8.jpg'},
{url:'https://hbeb.cc/wp-content/uploads/2019/06/3590.jpg'},
{url:'https://www.sasapost.com/wp-content/uploads/052415_0936_13.jpg'},
{url:'https://blog.arabia2.com/contents/albumsm/402_0.jpg'},
{url:'https://media.alalamtv.net/news/image/855x495//2017/02/03/alalam_636217529674988122_25f_4x3.jpg'},
{url:'https://lh5.googleusercontent.com/--H8vp_xTdaA/U0Mlig20e3I/AAAAAAAIltQ/h2QlLXRHORk/w925-h587-no/trey-ratcliff-the-fields.jpg'},
{url:'http://www.hayah.cc/forum/hayahimgcache/1/100242hayah.jpg'},
{url:'http://review.topmaxtech.net/content/uploads/7008227-morning-nature-wallpaper-768x432.jpg'},
{url:'http://3.bp.blogspot.com/-SO9jc8FgbHM/UslMAzIq-9I/AAAAAAAABDE/afMfslmqoVM/s1600/image+nature.jpg'},
{url:'http://love-msg.com/wp-content/uploads/2018/01/4630-1.jpg'},
{url:'http://best-images.co/wp-content/uploads/2017/09/450-6.jpg'},
];
let pageSize=20;
ta.get('/photos/:page/' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.url.split('/')[2]
    let start = (page-1)*pageSize;
    let end = start + pageSize;
    res.send( photo.slice(start,end));
});
ta.listen(3000);