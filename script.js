function changeBorder(){
  var div = document.getElementById('test');

  var tl = document.getElementById('rtl');
  var ftl = document.getElementById('ttl');
  var rtl = tl.value;
  ftl.value = tl.value;

  var tr = document.getElementById('rtr');
  var ftr = document.getElementById('ttr');
  var rtr = tr.value;
  ftr.value = tr.value;

  var bl = document.getElementById('rbl');
  var fbl = document.getElementById('tbl');
  var rbl = bl.value;
  fbl.value = bl.value;

  var br = document.getElementById('rbr');
  var fbr = document.getElementById('tbr');
  var rbr = br.value;
  fbr.value = br.value;

  div.style.borderRadius = rtl + "px " + rtr +"px " + rbl + "px " + rbr +"px ";
}
