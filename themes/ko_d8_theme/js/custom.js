function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
	if (obj.style) {
		obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v;
		if (v=='visible') { obj.display = 'block'; }
		if (v=='hidden') { obj.display = 'none'; }
	}
	obj.visibility=v; }
}

function price(){
	var pt1,qty,ptr,ptcost,spprice,cur;
	var isExceed = true;
	var lblprice = document.getElementById('lblmsg');
	var lblextprice = document.getElementById('lblextprice');
	var lblunitprice = document.getElementById('lblunitprice');
	  qty = document.getElementById('edit-qty').value.trim();
	  pt1 = document.getElementsByClassName('pt');
	
	   if(qty==''|| parseInt(qty)<=0){
				
		  lblunitprice.innerText='';
		  lblextprice.innerText='';
		  lblprice.innerText='Incorrect quantity!';
		  return;
	  }
	 
	  for(i=0;i<pt1.length;i++){
		  if(pt1[i].firstElementChild.innerText.indexOf('-')!=-1){
			  ptr=pt1[i].firstElementChild.innerText.split('-')[1].trim();
		  }
		  else{
			  ptr=pt1[i].firstElementChild.innerText.trim();
		  }
		
		cur=pt1[i].lastElementChild.innerText.substring(1, 0);
		ptcost=pt1[i].lastElementChild.innerText.split(cur)[1].trim();
		if(parseInt(qty)<=parseInt(ptr)){
			lblunitprice.innerText='Unit Price: '+cur+''+parseFloat(ptcost).toFixed(3);
			lblextprice.innerText='Extended Price: '+cur+''+(qty*parseFloat(ptcost)).toFixed(3);
			lblprice.innerText='';
			isExceed = false;
			return;
		}
	  }
		if(isExceed){			
			lblunitprice.innerText='';
			lblextprice.innerText='';
			//lblprice.innerText='For more quantity, Please reach out us at sales@leespring.com';
      lblprice.innerText='Quantity exceeds pricing available online. Please contact Lee Spring at 888-777-4647 for pricing.';
		}
	  
}


jQuery(document).ready(function($){
ajaxtest();
$( "#edit-field-outside-dia-mm-value-min" ).change(function() {
  alert( "hai" );
});

/*$( "#slider-range1" ).on( "slide", function( event, ui ) {
  console.log("slide");
  $("#edit-submit-compressionspring").trigger( "click" );
} );*/

	//Main menu
	$('#main-menu').smartmenus();
	
	//Mobile menu toggle
	$('.navbar-toggle').click(function(){
		$('.region-primary-menu').slideToggle();
	});
 
//var large = '<span class="tablesort tablesort--desc"><span class="visually-hidden">Sort descending</span></span>';
//$("th.views-field-title, th.views-field-field-battery-size, th.views-field-field-outside-dia-base-mm, th.views-field-field-inside-dia-tole-mm, th.views-field-field-free-len-mm, th.views-field-field-eyelet-inner-dia-mm, th.views-field-field-installed-height-mm ").append(large);

//Added by Thiru 29/10/2017

//$('input#metric').attr('checked','true');
$('#phy_mm').attr('checked','true');
$('#load_N').attr('checked','true');

$('input#imperial_inch').on('firstLoadinchi',function(){
  $(this).attr('checked',true);
  $(".LSLabel11").hide();
  mm_show(false);
  cm_show(false);
  N_show(false);
  kg_show(false);
  gm_show(false);
  N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
  in_show(true);

});

$('input#metric').on('firstLoad',function(){
$(this).attr('checked',true);
$(".LSLabel11").show();
 var cm = $('#phy_cm');
  var mm = $('#phy_mm');
  var n = $('#load_N');
  var kg = $('#load_kg');
  var gm = $('#load_gm');

  if(mm.is(':checked')){
    in_show(false);
    cm_show(false);
    kg_show(false);
    gm_show(false);
    N_show(false);
    mm_show(true);
    if(n.is(':checked')){
      kg_show(false);
      gm_show(false);
      N_show(true);
      //raghu
N_CM_show(false);
N_MM_show(true);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
    }
    else if(kg.is(':checked')){

      gm_show(false);
      N_show(false);
      kg_show(true);
     //raghu
     N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(true);
Gm_MM_show(false);
Gm_CM_show(false);  
    }
    else{
      N_show(false);
      kg_show(false);
      gm_show(true);
  //raghu
N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(true);
Gm_CM_show(false);
        }
    }else{

    in_show(false);    
    mm_show(false);
    kg_show(false);
    gm_show(false);
    N_show(false);
    cm_show(true);
    if(n.is(':checked')){
      kg_show(false);
      gm_show(false);
      N_show(true);
     //raghu
N_CM_show(true);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);  
    }
    else if(kg.is(':checked')){

      gm_show(false);
      N_show(false);
      kg_show(true);
      //raghu
      N_CM_show(false);

N_MM_show(false);
kg_CM_show(true);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
    }
    else{
      N_show(false);
      kg_show(false);
      gm_show(true);
      //raghu
 N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(true);
        }

    }

});

$('tr.temp-prdct-dis-row').each(function(){
  console.log($(this));
});

$("form.uc-product-add-to-cart-form#edit-qty").bind({
  keyup:function () {
    alert("changed");            
},
keyup:function () {
    alert("changed");   

}
});

// $('input#edit-qty.form-uc-quantity').change(function(){
//   alert('changed');
// });

$('input#imperial_inch').trigger('firstLoadinchi');

//$('input#metric').trigger('firstLoad');


$('input#metric').change(function(){
$(".LSLabel11").show();

 var cm = $('#phy_cm');
  var mm = $('#phy_mm');
  var n = $('#load_N');
  var kg = $('#load_kg');
  var gm = $('#load_gm');

  if(mm.is(':checked')){
    in_show(false);
    cm_show(false);
    kg_show(false);
    gm_show(false);
    N_show(false);
    mm_show(true);

    if(n.is(':checked')){
      kg_show(false);
      gm_show(false);
      N_show(true);
//raghu
N_CM_show(false);
N_MM_show(true);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
}
     else if(kg.is(':checked')){

      gm_show(false);
      N_show(false);
      kg_show(true);
//raghu
     N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(true);
Gm_MM_show(false);
Gm_CM_show(false); 
    }
    else{
      N_show(false);
      kg_show(false);
      gm_show(true);
      
      //raghu
N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(true);
Gm_CM_show(false);
        }
    }else{

    in_show(false);    
    mm_show(false);
    kg_show(false);
    gm_show(false);
    N_show(false);
    cm_show(true);
    if(n.is(':checked')){
      kg_show(false);
      gm_show(false);
      N_show(true);
      
      //raghu
N_CM_show(true);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
    }
    else if(kg.is(':checked')){

      gm_show(false);
      N_show(false);
      kg_show(true);
      kg_CM_show(true);
      //raghu
      N_CM_show(false);
N_MM_show(false);
kg_CM_show(true);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
    }
    else{
      N_show(false);
      kg_show(false);
      gm_show(true);
      Gm_CM_show(true);
      //raghu
      N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(true);
        }

    }


});


$('#phy_mm').change(function(){
  $('input#metric').trigger('change');
});
$('#phy_cm').change(function(){
  $('input#metric').trigger('change');

});
$('#load_N').change(function(){
  $('input#metric').trigger('change');

});
$('#load_kg').change(function(){
  $('input#metric').trigger('change');

});
$('#load_gm').change(function(){
  $('input#metric').trigger('change');

});
$('#imperial_inch').change(function(){
$(".LSLabel11").hide();
  mm_show(false);
  cm_show(false);
  N_show(false);
  kg_show(false);
  gm_show(false);
  N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
  in_show(true);

});
function mm_show(val){

 if(val){

$(".views-field-field-outside-dia-base-mm, .views-field-field-inside-dia-tole-mm, .views-field-field-free-len-mm, .views-field-field-eyelet-inner-dia-mm, .views-field-field-installed-height-mm, .views-field-field-working-height-mm").show();
$(".views-field-field-outside-dia-mm, .views-field-field-hole-dia-mm, .views-field-field-rod-dia-mm, .views-field-field-solid-height-mm, .views-field-field-wire-dia-mm, .views-field-field-free-len-mm").show();
  $(".views-field-field-appr-num-coils-per-mm, .views-field-field-max-extended-length-mm, .views-field-field-inside-dia-mm, .views-field-field-thickness-mm, .views-field-field-free-height-mm, .views-field-field-bolt-size-metric, .views-field-field-cn-to-cn-end-len-mm").show();
  }else{
$(".views-field-field-outside-dia-base-mm, .views-field-field-inside-dia-tole-mm, .views-field-field-free-len-mm, .views-field-field-eyelet-inner-dia-mm, .views-field-field-installed-height-mm, .views-field-field-working-height-mm, .views-field-field-cn-to-cn-end-len-mm").hide();
$(".views-field-field-outside-dia-mm, .views-field-field-hole-dia-mm, .views-field-field-rod-dia-mm, .views-field-field-solid-height-mm, .views-field-field-wire-dia-mm, .views-field-field-free-len-mm").hide();
 $(".views-field-field-appr-num-coils-per-mm, .views-field-field-max-extended-length-mm, .views-field-field-inside-dia-mm, .views-field-field-thickness-mm, .views-field-field-free-height-mm , .views-field-field-bolt-size-metric").hide();
  }
}
function cm_show(val){

 if(val){

  $(".views-field-field-outside-dia-base-cm, .views-field-field-inside-dia-tole-cm, .views-field-field-free-len-cm, .views-field-field-eyelet-inner-dia-cm, .views-field-field-installed-height-cm,.views-field-field-working-height-cm, .views-field-field-cn-to-cn-end-len-cm").show();
  $(".views-field-field-outside-dia-cm, .views-field-field-hole-dia-cm, .views-field-field-rod-dia-cm, .views-field-field-solid-height-cm, .views-field-field-wire-dia-cm, .views-field-field-free-len-cm").show();
  $(".views-field-field-appr-num-coils-per-cm, .views-field-field-max-extended-length-cm, .views-field-field-inside-dia-cm, .views-field-field-thickness-cm, .views-field-field-free-height-cm, .views-field-field-bolt-size-metric").show();
  }else{
  $(".views-field-field-outside-dia-base-cm, .views-field-field-inside-dia-tole-cm, .views-field-field-free-len-cm, .views-field-field-eyelet-inner-dia-cm, .views-field-field-installed-height-cm, .views-field-field-working-height-cm, .views-field-field-cn-to-cn-end-len-cm").hide();
  $(".views-field-field-outside-dia-cm, .views-field-field-hole-dia-cm, .views-field-field-rod-dia-cm, .views-field-field-solid-height-cm, .views-field-field-wire-dia-cm, .views-field-field-free-len-cm").hide();
  $(".views-field-field-appr-num-coils-per-cm, .views-field-field-max-extended-length-cm, .views-field-field-inside-dia-cm, .views-field-field-thickness-cm, .views-field-field-free-height-cm, .views-field-field-bolt-size-metric").hide();
  }
}

function in_show(val){

 if(val){

$('.views-field-field-outside-dia-base-in, .views-field-field-inside-dia-tole-in, .views-field-field-free-len-in, .views-field-field-eyelet-inner-dia-in, .views-field-field-approximate-load-lb, .views-field-field-installed-height-in, .views-field-field-max-extended-length-in').show();
$(".views-field-field-outside-dia-in, .views-field-field-hole-dia-in, .views-field-field-rod-dia-in, .views-field-field-solid-height-in, .views-field-field-wire-dia-in, .views-field-field-free-len-in, .views-field-field-rate-lb-in, .views-field-field-bolt-size-imperial, .views-field-field-cn-to-cn-end-len-in").show();
  $(".views-field-field-appr-num-coils-per-in, .views-field-field-inside-dia-in, .views-field-field-thickness-in, .views-field-field-free-height-in, .views-field-field-working-height-in").show();
   $(".views-field-field-initial-tension-lb, .views-field-field-max-load-lb,.views-field-field-calculated-load-at-flat-lb, .views-field-field-nominal-load-lb").show();
  }else{
$('.views-field-field-outside-dia-base-in, .views-field-field-inside-dia-tole-in, .views-field-field-free-len-in, .views-field-field-eyelet-inner-dia-in, .views-field-field-approximate-load-lb, .views-field-field-installed-height-in, .views-field-field-max-extended-length-in, .views-field-field-cn-to-cn-end-len-in').hide();
$(".views-field-field-outside-dia-in, .views-field-field-hole-dia-in, .views-field-field-rod-dia-in, .views-field-field-solid-height-in, .views-field-field-wire-dia-in, .views-field-field-free-len-in, .views-field-field-rate-lb-in, .views-field-field-bolt-size-imperial").hide();
$(".views-field-field-appr-num-coils-per-in, .views-field-field-inside-dia-in, .views-field-field-thickness-in, .views-field-field-free-height-in, .views-field-field-working-height-in").hide();
 $(".views-field-field-initial-tension-lb, .views-field-field-max-load-lb, .views-field-field-calculated-load-at-flat-lb, .views-field-field-nominal-load-lb").hide();
  }
}

function N_show(val){

 if(val){

  $(".views-field-field-approximate-load-n, .views-field-field-max-load-n, .views-field-field-nominal-load-n").show();
     $(".views-field-field-initial-tension-n, .views-field-field-calculated-load-at-flat-n").show(); 
  }else{
  $(".views-field-field-approximate-load-n, .views-field-field-max-load-n, .views-field-field-nominal-load-n").hide();
  $(".views-field-field-initial-tension-n, .views-field-field-calculated-load-at-flat-n").hide();
  }
}

function kg_show(val){

 if(val){

  $(".views-field-field-approximate-load-kg, .views-field-field-max-load-kg, .views-field-field-nominal-load-kg").show();
$(".views-field-field-initial-tension-kg, .views-field-field-calculated-load-at-flat-kg").show();
  }else{
  $(".views-field-field-approximate-load-kg, .views-field-field-max-load-kg, .views-field-field-nominal-load-kg").hide();
$(".views-field-field-initial-tension-kg, .views-field-field-calculated-load-at-flat-kg").hide();
  }
}
function gm_show(val){

 if(val){

  $(".views-field-field-approximate-load-gm, .views-field-field-max-load-gm, .views-field-field-nominal-load-gm").show();
 $(".views-field-field-initial-tension-gm, .views-field-field-calculated-load-at-flat-gm").show();
  }else{
  $(".views-field-field-approximate-load-gm, .views-field-field-max-load-gm, .views-field-field-nominal-load-gm").hide();
   $(".views-field-field-initial-tension-gm, .views-field-field-calculated-load-at-flat-gm").hide();

  }
}

function N_CM_show(val){

 if(val){	

  $(".views-field-field-rate-n-cm").show();
      
  }else{
  $(".views-field-field-rate-n-cm").hide();
  
  }
}
function N_MM_show(val){

 if(val){	

  $(".views-field-field-rate-n-mm").show();
      
  }else{
  $(".views-field-field-rate-n-mm").hide();
  
  }
}

function kg_CM_show(val){

 if(val){

  $(".views-field-field-rate-kg-cm").show();

  }else{
  $(".views-field-field-rate-kg-cm").hide();

  }
}

function kg_MM_show(val){

 if(val){

  $(".views-field-field-rate-kg-mm").show();

  }else{
  $(".views-field-field-rate-kg-mm").hide();

  }
}

function Gm_MM_show(val){

 if(val){

  $(".views-field-field-rate-gm-mm").show();

  }else{
  $(".views-field-field-rate-gm-mm").hide();

  }
}

function Gm_CM_show(val){

 if(val){

  $(".views-field-field-rate-gm-cm").show();

  }else{
  $(".views-field-field-rate-gm-cm").hide();

  }
}
/*$('input#metric').click(function(){
//('.views-field-field-outside-dia-base-in').hide();
$('.views-field-field-outside-dia-base-in, .views-field-field-inside-dia-tole-in, .views-field-field-free-len-in, .views-field-field-eyelet-inner-dia-in, .views-field-field-approximate-load-lb, .views-field-field-installed-height-in').hide();
$(".views-field-field-outside-dia-base-mm, .views-field-field-inside-dia-tole-mm, .views-field-field-free-len-mm, .views-field-field-eyelet-inner-dia-mm, .views-field-field-approximate-load-n, .views-field-field-installed-height-mm").hide();
  $(".views-field-field-outside-dia-base-cm, .views-field-field-inside-dia-tole-cm, .views-field-field-free-len-cm, .views-field-field-eyelet-inner-dia-cm, .views-field-field-approximate-load-kg, .views-field-field-installed-height-cm").hide();
  alert('hidden');

});
*/	
//$(".views-field-field-outside-dia-base-cm, .views-field-field-inside-dia-tole-cm, .views-field-field-free-len-cm, .views-field-field-eyelet-inner-dia-cm, .views-field-field-approximate-load-kg, .views-field-field-installed-height-cm").hide();

	/*$('.path-batteryspring-inchi').on('click', 'input#metric', 'click', function() {
		window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
		 // if ($("#metric").is(":checked")) {

            	
            	$("#phy_mm").attr('checked', true);

                $("#load_kg").attr('checked', true);
        
     // }
	});


    $('.path-batteryspring-inchi').on('click', 'input#phy_cm', 'click', function() {
    	
  //   	radiobtn = document.getElementById("#phy_cm");
		// radiobtn.checked = true;
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_cm/81";
	});


	$('.path-batteryspring-inchi').on('click', 'input#imperial_inch', 'click', function() {

     window.location.href = "http://ecomstaging.leespring.com/batteryspring_inchi/81";
	});
	$('.path-batteryspring-inchi').on('click', 'input#phy_mm', 'click', function() {
		window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
				
	});
$('.path-batteryspring-inchi').on('click', 'input#load_N', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-inchi').on('click', 'input#load_kg', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-inchi').on('click', 'input#load_gm', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});

//metri
$('.path-batteryspring-mm #metric input').on('click', 'input#metric', 'click', function() {

            	
            	$("#phy_mm").attr('checked', true);

                $("#load_kg").attr('checked', true);
   

     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
  $('input[name="searchby"]:checked', '#metric').val();
	});
*/
    $(document).ready(function(){
      $(".partnumber").click(function(){
 
  $(this).find("a").trigger("click");
});
        $("input[type='radio']").click(function(){
              
            if(radioValue){
               var radioValue = $("input[name='searchby']:checked").val();
               window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
            }
          

        });
        
    });
    
 $('#metric input').on('click', 'input#metric', 'click', function()  {

 	window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";	
  //$('input[name="searchby"]:checked', '#metric').val(); 
  //$('input[name="searchby"]:checked', '#metric').val();
});


    $('.path-batteryspring-mm').on('click', 'input#phy_cm', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_cm/81";
	});
	$('.path-batteryspring-mm').on('click', 'input#imperial_inch', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_inchi/81";
	});
	$('.path-batteryspring-mm').on('click', 'input#phy_mm', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-mm').on('click', 'input#load_N', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-mm').on('click', 'input#load_kg', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-mm').on('click', 'input#load_gm', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
//cm
$('.path-batteryspring-cm').on('click', 'input#metric', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});

    $('.path-batteryspring-cm').on('click', 'input#phy_cm', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_cm/81";
	});
	$('.path-batteryspring-cm').on('click', 'input#imperial_inch', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_inchi/81";
	});
	$('.path-batteryspring-cm').on('click', 'input#phy_mm', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-cm').on('click', 'input#load_N', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-cm').on('click', 'input#load_kg', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});
$('.path-batteryspring-cm').on('click', 'input#load_gm', 'click', function() {
     window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
	});


$('.path-batteryspring-inchi #inchi input').on('click', 'input#inchi', 'click', function()  {
	window.location.href = "http://ecomstaging.leespring.com/batteryspring_mm/81";
     $('input[name="searchby"]:checked', '#metric').val();
});

	//Mobile dropdown menu
	if ( $(window).width() < 767) {
		$(".region-primary-menu li a:not(.has-submenu)").click(function () {
			$('.region-primary-menu').hide();
	  });
	}
	$('.views-label.views-label-body-3.btn.btn-default').click(function(){
    alert($(this).html());
  });

  $('.views-label.views-label-body-6.btn.btn-default').click(function(){
    alert('btn get price clicked');
  });
	// Load node Content.
	$('.path-product-display').on('click', 'div.part-info', 'click', function() { $(this).css("background-color","#ead898");
		// Remove all Product specific when opens:
		$('.path-product-display #wrapper .product-display table tr.temp-prdct-dis-row').remove();
		var nid = $(this).data("nid");
		$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
		thisUrl = '/product-specific/' + nid;
		$.ajax({
			url: thisUrl,
			type: "GET",
			success: function(data) {
				var response = $(data).find('.induvidual-product');
        var quan = $(data).find('.block-views-blockprice-table-block-1');
        // var result = response + quan;
				$('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
        
			}
		});
	});

  // $('tr.sort-table').click(function(){
  //   alert('hi');
  // });
	//battery spring
	 $('.path-batteryspring tr.sort-table').click(function() {
    // $(this).find('div.part-info').trigger('click');
    // Remove all Product specific when opens:
    $('.path-batteryspring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    thisUrl = '/battery-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
       
        var response = $(data).find('.induvidual-product');
       
        var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
         
        
        ajaxtest();
      }
    });
  });

	$('.path-compression-spring tr.sort-table').click(function() {
		// Remove all Product specific when opens:
		$('.path-compression-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
		var nid = $(this).find('div.part-info').first().data("nid");
		//$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
		 $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/compression-specific/' + nid;
		$.ajax({
			url: thisUrl,
			type: "GET",
			success: function(data) {
				var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
			}
		});
	});


  $('.path-belleville-washers tr.sort-table').click(function() {
    // Remove all Product specific when opens:
    $('.path-belleville-washers #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    //$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
     $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/belleville-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
        var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
      }
    });
  });

  $('.path-continuousspring tr.sort-table').click(function() {
    // Remove all Product specific when opens:
    $('.path-continuousspring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    //$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
     $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/continu-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
        var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
      }
    });
  });


  $('.path-redux-wave-spring tr.sort-table').click(function() {
    // Remove all Product specific when opens:
    $('.path-redux-wave-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    //$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
     $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/reduxwave-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
        var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
      }
    });
  });

  $('.path-extension-spring tr.sort-table').click(function() {
    // Remove all Product specific when opens:
    $('.path-extension-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    //$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
     $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/extension-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
        var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
      }
    });
  });
 

    $('body').on('click', 'div.prdt-spc-cls', function(){
    	$( "tbody tr" ).removeClass( "selected" );
		$('.path-batteryspring #wrapper .product-display table tr.temp-prdct-dis-row').remove();

	});
    $('body').on('click', 'div.prdt-spc-cls', function(){
		$('.path-compression-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
	});
   $('body').on('click', 'div.prdt-spc-cls', function(){
    $('.path-extension-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
  });

   $('body').on('click', 'div.prdt-spc-cls', function(){
    $('.path-redux-wave-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
  }); 

    $('body').on('click', 'div.prdt-spc-cls', function(){
    $('.path-belleville-washers #wrapper .product-display table tr.temp-prdct-dis-row').remove();
  });

    $('body').on('click', 'div.prdt-spc-cls', function(){
    $('.path-continuousspring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
  });

    $('body').on('click', 'div.prdt-spc-cls', function(){
		$('.path-batteryspring-mm #wrapper .product-display table tr.temp-prdct-dis-row').remove();
	});
	// Product Spec close.
	$('body').on('click', 'div.prdt-spc-cls', function(){
		$('.path-product-display #wrapper .product-display table tr.temp-prdct-dis-row').remove();
	});

	$('#slider-range1,#slider-range2,#slider-range3,#slider-range4,#slider-range,#slider-range5,#slider-range6,#slider-range7,#slider-range8,#slider-range9,#slider-range10,#slider-range11,#slider-range12,#slider-range13,#slider-range14,#slider-range15,#slider-range16,#slider-range17,#slider-range18,#slider-range19,#slider-range20,#slider-range21,#slider-range22,#slider-range23,#slider-range24,#slider-range25,#slider-range26,#slider-range27,#slider-range28,#slider-range29,#slider-range30,#slider-range31,#slider-range32,#slider-range33,#slider-range34,#slider-range35,#slider-range36').each(function(){
		 $(this).children('span:last').addClass('slider-right-rotate');	
		 $(this).children('span:first').addClass('slider-left-rotate');	
		
	});

	$('div.js-form-item.form-item.js-form-type-uc-quantity.form-item-qty.js-form-item-qty').click(function(){
		console.log('div clicked');
	});

    function myEvent(e){
    	console.log('event fired');
    	console.log('Quantity');
		var Quantity = $(this).val();
		console.log(Quantity);
		var dvUnitPrice = $('div.views-field.views-field-body-5').children('div');
		var dvExtPrice = $('div.views-field.views-field-body-6').children('div');
    }
  //  $('#edit-qty').val('5');
	//console.log($('input[name="qty"]').attr("value"));
	// Range Slider:
	var url = $(location).attr('pathname');
	if (url!='') {
		var idx = url.lastIndexOf('/');
		var sprType = url.substring(idx+1);
		if (sprType == 1) {
			$('#btnCompSpring').addClass('btnfocus');
		} else if (sprType == 11) {
			$('#btnExtSpring').addClass('btnfocus');
		} else if (sprType == 21) {
			$('#btnTorSpring').addClass('btnfocus');
		} else if (sprType == 41) {
			$('#btnRedxSpring').addClass('btnfocus');
		} else if (sprType == 61) {
			$('#btnBelleSpring').addClass('btnfocus');
		} else {
			$('#btnMoreSpring').addClass('btnfocus');
		}
	}
	$("#map_lang_selection").click(function () {
	    $(".leespring_language_selection").toggle(function () {
	        
	    });
	});

	$(".division_close").click(function () {
	    $(".leespring_language_selection").hide();
	   
	});
function ajaxtest(val){
  //start raghu 15.12.17
  $("tbody tr").click(function(){
  	//$( "tbody tr" ).removeClass( "selected" );
    $(this).addClass("selected").siblings().removeClass("selected");
    //$(this).addClass("selected").siblings(); 
    //$(this).("tbody tr").addClass("selected").siblings(); 
});
   $( "#edit-field-outside-dia-mm-value-min" ).change(function() {
  alert( "hai" );
});
$(".bef-slider.ui-slider.ui-slider-horizontal.ui-widget.ui-widget-content.ui-corner-all").click(function(){
    
   // $("#edit-submit-compressionspring").trigger( "click" );
});
$(".partnumber").click(function(){
  
  $(this).find("a").trigger("click");
});
$('.path-compression-spring tr.sort-table').click(function() {
		// Remove all Product specific when opens:
		$('.path-compression-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
		var nid = $(this).find('div.part-info').first().data("nid");
		//$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
		 $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/compression-specific/' + nid;
		$.ajax({
			url: thisUrl,
			type: "GET",
			success: function(data) {
				var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
         ajaxtest();
			}
		});
	});
 $('.path-batteryspring tr.sort-table').click(function() {
    // $(this).find('div.part-info').trigger('click');
    // Remove all Product specific when opens:
    $('.path-batteryspring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    thisUrl = '/battery-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
       
        var response = $(data).find('.induvidual-product');
       
        var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
         
        
        ajaxtest();
      }
    });
  });

$('.path-belleville-washers tr.sort-table').click(function() {
    // Remove all Product specific when opens:
    $('.path-belleville-washers #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    //$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
     $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/belleville-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
        var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
      }
    });
  });

$('.path-redux-wave-spring tr.sort-table').click(function() {
    // Remove all Product specific when opens:
    $('.path-redux-wave-spring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    //$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
     $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/reduxwave-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
        var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
      }
    });
  });

  $('.path-continuousspring tr.sort-table').click(function() {
    // Remove all Product specific when opens:
    $('.path-continuousspring #wrapper .product-display table tr.temp-prdct-dis-row').remove();
    var nid = $(this).find('div.part-info').first().data("nid");
    //$(this).parent().parent().after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div><div class="prdt-spc-cls">Close</div></td></tr>');
     $(this).after('<tr class="temp-prdct-dis-row" data-tem-row="' + nid + '"><td colspan="10"><div class="prdt-spc-cls">Close</div><div class="specific-info info-' + nid + '" id="info-node-' + nid + '"></div></td></tr>');
    
    thisUrl = '/continu-specific/' + nid;
    $.ajax({
      url: thisUrl,
      type: "GET",
      success: function(data) {
        var response = $(data).find('.induvidual-product');
        
       var quan = $(data).find('.block-views-blockprice-table-block-1');
        var quan1 = $(data).find('.block-views-blockprice-table-block-2');
      
        response.find('.uc-product-add-to-cart-form').after('<input type="button" onclick="price();return false;" id="btngetprice" class="views-label views-label-body-6 btn btn-default" value="Price Check"/><br><label id="lblmsg" class="Quantity-Unit-Ext-Price"></label><br><label id="lblunitprice" class="Unit-Price"></label><br><label id="lblextprice" class="Ext-Price"></label>');
           
        
        $('div#info-node-' + nid).html(response);
        $('div#info-node-' + nid).append(quan);
         $('div#info-node-' + nid).append(quan1);
        
      }
    });
  });
//end
 // alert("1");
//$("#edit-field-spring-mounting-value-1").click(function () {
$('.tablesort-asc-desc').remove();
$('.com-tablesort-asc-desc').remove();
$('.cont-tablesort-asc-desc').remove();
//start 17.12.17

/*$('.inchemetric').remove();
var insym='<span class="inchemetric">in</span>';
var inlbsym='<span class="inchemetric">lb</span>';
var mmsym='<span class="inchemetric">lb</span>';
var cmsym='<span class="inchemetric">lb</span>';
var mmn='<span class="inchemetric">N</span>';
var mmkg='<span class="inchemetric">Kg</span>';
var mmgm='<span class="inchemetric">gm</span>';
$("th.views-field-field-outside-dia-base-in a,th.views-field-field-inside-dia-tole-in a,th.views-field-field-free-len-in a,th.views-field-field-eyelet-inner-dia-in a,th.views-field-field-installed-height-in a").append(insym);
$("th.views-field-field-outside-dia-base-mm a,th.views-field-field-inside-dia-tole-mm a,th.views-field-field-free-len-mm a,th.views-field-field-eyelet-inner-dia-mm a,th.views-field-field-installed-height-mm a").append(mmsym);
$("th.views-field-field-outside-dia-base-cm a,th.views-field-field-inside-dia-tole-cm a,th.views-field-field-free-len-cm a,th.views-field-field-eyelet-inner-dia-cm a,th.views-field-field-installed-height-cm a").append(cmsym);

$("th.views-field-field-approximate-load-lb a").append(inlbsym);
$("th.views-field-field-approximate-load-kg a").append(mmkg);
$("th.views-field-field-approximate-load-n a").append(mmn);
$("th.views-field-field-approximate-load-gm a").append(mmgm);*/

//stop


 
var testicon = '<span class="tablesort tablesort-asc-desc"><span class="visually-hidden">Sort descending</span></span>';
var testiconcom = '<span class="tablesort com-tablesort-asc-desc"><span class="visually-hidden">Sort descending</span></span>';
var testiconcont = '<span class="tablesort cont-tablesort-asc-desc"><span class="visually-hidden">Sort descending</span></span>';

$("th.views-field.views-field-field-material-short-description a,th.views-field-field-material a, th.views-field-title a, th.views-field-field-battery-size a,  th.views-field-field-outside-dia-base-mm a,   th.views-field-field-inside-dia-tole-mm a,    th.views-field-field-free-len-mm a,     th.views-field-field-eyelet-inner-dia-mm a,      th.views-field-field-installed-height-mm a,     th.views-field-field-outside-dia-base-cm a,       th.views-field-field-inside-dia-tole-cm a,        th.views-field-field-free-len-cm a,         th.views-field-field-eyelet-inner-dia-cm a,          th.views-field-field-installed-height-cm a,          th.views-field-field-approximate-load-n a,           th.views-field-field-approximate-load-kg a,           th.views-field-field-approximate-load-gm a,           th.views-field-field-outside-dia-base-in a,            th.views-field-field-inside-dia-tole-in a,             th.views-field-field-free-len-in a,              th.views-field-field-eyelet-inner-dia-in a,               th.views-field-field-approximate-load-lb a,      th.views-field-field-installed-height-in a")
.append(testicon);
$("th.views-field-field-rate-lb-in a,th.views-field-field-rate-gm-cm a,th.views-field-field-rate-gm-mm a,th.views-field-field-rate-kg-mm a,th.views-field-field-rate-kg-cm a,th.views-field-field-rate-n-mm a,th.views-field-field-rate-n-cm a,th.views-field-field-outside-dia-cm a, th.views-field-field-hole-dia-cm a, th.views-field-field-rod-dia-cm a, th.views-field-field-solid-height-cm a, th.views-field-field-wire-dia-cm a, th.views-field-field-working-height-in a, th.views-field-field-working-height-mm a, th.views-field-field-working-height-cm a").append(testiconcom); 
$("th.views-field-field-outside-dia-in a, th.views-field-field-hole-dia-in a, th.views-field-field-rod-dia-in a, th.views-field-field-solid-height-in a, th.views-field-field-wire-dia-in a, th.views-field-field-inside-dia-in a ,th.views-field-field-thickness-in a, th.views-field-field-bolt-size-metric a").append(testiconcom);

$("th.views-field-field-outside-dia-mm a, th.views-field-field-hole-dia-mm a, th.views-field-field-rod-dia-mm a, th.views-field-field-solid-height-mm a, th.views-field-field-wire-dia-mm a, th.views-field-field-calculated-load-at-flat-lb a, th.views-field-field-max-load-lb a, th.views-field-field-max-extended-length-in a").append(testiconcom);
$("th.views-field-field-initial-tension-lb a,th.views-field-field-initial-tension-n a, th.views-field-field-initial-tension-kg a,th.views-field-field-initial-tension-gm a, th.views-field-field-free-height-in a, th.views-field-field-bolt-size-imperial a, th.views-field-field-max-load-n a, th.views-field-field-max-extended-length-mm a, th.views-field-field-max-load-kg a, th.views-field-field-max-load-gm a, th.views-field-field-nominal-load-gm a, th.views-field-field-nominal-load-kg a, th.views-field-field-nominal-load-lb a, th.views-field-field-nominal-load-n a").append(testiconcom);
$("th.views-field-field-inside-dia-mm a, th.views-field-field-thickness-mm a, th.views-field-field-calculated-load-at-flat-n a, th.views-field-field-free-height-mm a, th.views-field-field-calculated-load-at-flat-kg a, th.views-field-field-calculated-load-at-flat-gm a, th.views-field-field-inside-dia-cm a, th.views-field-field-thickness-cm a, th.views-field-field-free-height-cm a, th.views-field-field-max-extended-length-cm a").append(testiconcom);
$("th.views-field-field-appr-num-coils-per-in a, th.views-field-field-appr-num-coils-per-mm a, th.views-field-field-appr-num-coils-per-cm a").append(testiconcont);
   // $($('span.tablesort--desc').parent().parent().children()[1]).css({"display": "none"});
   // $($('span.tablesort--asc').parent().parent().children()[1]).css({"display": "none"});
$($('span.tablesort--desc').parent().children()[1]).css({"display": "none"});
    $($('span.tablesort--asc').parent().children()[1]).css({"display": "none"});


/*var headers=$('.cols-23 thead tr th');
var leng=headers.length;
//console.log(typeof headers,headers,headers.length,leng);
var maxHeight=0;
for(var i=0; i<=leng;i++){
  //console.log($(headers[i]));
  if(maxHeight<$(headers[i]).height())
    maxHeight=$(headers[i]).height();

}

for(var i=0; i<=leng;i++){
 console.log($(headers[i]).children());
  if(maxHeight>$(headers[i]).height())
  {
    //$(headers[i]).children().css({'lineHeight':'20px'});
   }

  
}*/

   var metric = $('#metric');
   var imperial_inch = $('#imperial_inch');
     var cm = $('#phy_cm');
     var mm = $('#phy_mm');
     var n = $('#load_N');
     var kg = $('#load_kg');
     var gm = $('#load_gm');

if(metric.is(':checked')){
//alert("hidden");
$('input#metric').trigger('firstLoad');
  if(mm.is(':checked')){
    in_show(false);
    cm_show(false);
    kg_show(false);
    gm_show(false);
    N_show(false);
    mm_show(true);

    if(n.is(':checked')){
      kg_show(false);
      gm_show(false);
      N_show(true);
//raghu
N_CM_show(false);
N_MM_show(true);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
}
     else if(kg.is(':checked')){

      gm_show(false);
      N_show(false);
      kg_show(true);
//raghu
     N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(true);
Gm_MM_show(false);
Gm_CM_show(false); 
    }
    else{
      N_show(false);
      kg_show(false);
      gm_show(true);
      
      //raghu
N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(true);
Gm_CM_show(false);
        }
    }else{

    in_show(false);    
    mm_show(false);
    kg_show(false);
    gm_show(false);
    N_show(false);
    cm_show(true);
    if(n.is(':checked')){
      kg_show(false);
      gm_show(false);
      N_show(true);
      
      //raghu
N_CM_show(true);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
    }
    else if(kg.is(':checked')){

      gm_show(false);
      N_show(false);
      kg_show(true);
      kg_CM_show(true);
      //raghu
      N_CM_show(false);
N_MM_show(false);
kg_CM_show(true);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
    }
    else{
      N_show(false);
      kg_show(false);
      gm_show(true);
      Gm_CM_show(true);
      //raghu
      N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(true);
        }

    }
}
else{
 mm_show(false);
  cm_show(false);
  N_show(false);
  kg_show(false);
  gm_show(false);
  in_show(true);
  N_CM_show(false);
N_MM_show(false);
kg_CM_show(false);
kg_MM_show(false);
Gm_MM_show(false);
Gm_CM_show(false);
  
     }

 // });
}
//$('#edit-field-spring-mounting-value-1').ajaxSuccess(function(){
 // alert("test");
  
//});




$("#addquantity" ).click(function() {

  var qty=$('#edit-quantity').val();
  var  ecount = $('.quantitydisplay').filter(':hidden').length;
                      
                      
                       if(ecount==0)
                      {
                        $('#edit-quantity').val('');
                         // $('#addquantity').prop('disabled', 'disabled');
                          //$('#addquantity').attr('disabled',true);
                       alert('You have reached the maximum number of quantities per quote.');
                         return false;
                        
                       }
  if(qty == '' || (parseInt(qty)<=0) ){
   // alert('Quantity should be non negative and non zero.');
    return false;
  }
  var txtqty=$('#edit-txtquantitydisplay');
  var qtyarr = [$('#quantity1'),$('#quantity2'),$('#quantity3'),$('#quantity4'),$('#quantity5')];
  var count ='';
  var temp ='';
  $.each(qtyarr, function (index, value)  
                {  
                
                    if(value.is(':hidden')){                        
                      value.removeAttr('hidden');
                      value.append('<div class="message success"><p>Quantity: '+qty +'</p><span class="alert-close" onclick="removeDiv(this)";>x</span></div>');
                      $('#edit-quantity').val('');
                      
                      count = $('.quantitydisplay').filter(':hidden').length;
                      
                      
                       if(count==0)
                      {
                        $('#addquantity').css('color', '#bababa');
                         // $('#addquantity').prop('disabled', 'disabled');
                          //$('#addquantity').attr('disabled',true);                     
                        
                       }

                        $('.quantitydisplay').not(':hidden').each(function(i){                         
                          
                          temp = temp+' '+$(this).find('p').text();
                          
                   });
                       txtqty.val(temp);

                      return false;
                    } 
                    

                });  


                
   });





   $(document).ready(function(){
   $('.temp-prdct-dis-row').click(function(){
     $('.sort-table.selected').css({"background-color":"red"});

   });
  });


  $(document).ready(function(){
    $('tr.temp-prdct-dis-row.selected').click(function(){
    
        $('.sort-table.selected' ).css({"background-color": "green"});
       
    });    
  });



$('#edit-make-note-of-desired-specifications--description').siblings('div').attr('class','abc');

$(document).on('input', '#edit-make-note-of-desired-specifications', function () {
  
        if ($('#edit-make-note-of-desired-specifications').val()) {
            $('#placeholderDiv').hide();
        } else {
            $('#placeholderDiv').show();
        }      
});



$(function() {
$("input#edit-first-name").change(function(){
        setTarget()
});
    $("input#edit-last-name").change(function(){
        setTarget();
});
    $("input#edit-email-address-mail-1").change(function(){
        setTarget();
});
    $("input#edit-company-name").change(function(){
        setTarget();
});

});

function setTarget(){
    var tmp = $("input#edit-first-name").val();
    tmp +=",";
    tmp += $("input#edit-last-name").val();
    tmp +=",";
    tmp += $("input#edit-email-address-mail-1").val();
    tmp +=",";
    tmp += $("input#edit-company-name").val();
    $('textarea#edit-quickquote').val(tmp);
}


$( "#btnCompSpring" ).click(function() {
  window.location.href = "/compression-spring/1";
});
  $( "#btnExtSpring" ).click(function() {
  window.location.href = "/extension-spring/11";
});
  $( "#btnTorSpring" ).click(function() {
  window.location.href = "/product-display/21";
});
  $( "#btnRedxSpring" ).click(function() {
  window.location.href = "/redux-wave-spring/41";
});
  $( "#btnBelleSpring" ).click(function() {
  window.location.href = "/belleville-washers/61";
});
  

$( "#btnbatteryspring" ).click(function() {
  window.location.href = "/batteryspring/81";
});
  $( "#btnconstantspring" ).click(function() {
  window.location.href = "/product-display/71";
});
  $( "#btnkitspring" ).click(function() {
  window.location.href = "/product-display/101";
});
  $( "#btncontinuouslengthspring" ).click(function() {
  window.location.href = "/continuousspring/91";
});
  
$( "#btnheftspring" ).click(function() {
  window.location.href = "/product-display/31";
});
  $( "#btnleepplasticspring" ).click(function() {
  window.location.href = "/product-display/51";
});
  $( "#btnmilspec85spring" ).click(function() {
  window.location.href = "/product-display/111";
});
  $( "#btnmilspec86spring" ).click(function() {
  window.location.href = "/product-display/121";
});

$( ".learn_more_button" ).click(function() {
  window.location.href = "/req_a_quote";
});













$("tbody tr").click(function(){
	//$( "tbody tr" ).removeClass( "selected" );
    $(this).addClass("selected").siblings().removeClass("selected");
     //$(this).addClass("selected").siblings();
     // $("tbody tr").addClass("selected").siblings(); 
});

$("#edit-keys").attr("placeholder", "Part #, Keyword, Brand Cross Reference, etc.");


$("input#edit-field-product-type-value-1").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-product-type-value-2").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-product-type-value-3").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-product-type-value-4").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-1-1").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-1-2").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-1-3").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-1--2").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-2").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-3").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-4").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });
$("input#edit-field-material-value-1").click( function () {
               $("#edit-submit-compression-spring").trigger('click');
            });

// $('input#edit-field-product-type-value-1,input#edit-field-product-type-value-2,input#edit-field-product-type-value-3,input#edit-field-product-type-value-4,input#edit-field-material-value-4,input#edit-field-material-value-3,input#edit-field-material-value-2,input#edit-field-material-value-1-1, input#edit-field-material-value-1-2, input#edit-field-material-value-1-3, input#edit-field-material-value-1--2').attr('checked', 'checked');

// $('input#edit-field-product-type-value-1,input#edit-field-product-type-value-2,input#edit-field-product-type-value-3,input#edit-field-product-type-value-4,input#edit-field-material-value-4,input#edit-field-material-value-3,input#edit-field-material-value-2,input#edit-field-material-value-1-1, input#edit-field-material-value-1-2, input#edit-field-material-value-1-3, input#edit-field-material-value-1--2').removeAttr('checked', 'checked');

$( document ).ajaxComplete(function() {
   //alert("1");
   // $('input#metric').trigger('firstLoad');
   ajaxtest();
});
});



