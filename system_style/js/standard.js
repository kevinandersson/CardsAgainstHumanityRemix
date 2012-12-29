/*
 * jQuery JavaScript Library v1.3.2
 */
 $(document).ready(function(){

	 /* Active menu links */
	var pathname 	= window.location.pathname;
	
	var splitpath 	= pathname.split('/');
	var editpath 	= pathname.replace(/[\d\.]+/g, "");
	var editpath 	= editpath.replace('edit/', "");

	var combined 	= pathname+"/";
	var shortpath 	= splitpath[0]+"/"+splitpath[1]+"/"+splitpath[2]+"/";

	$('#sidebar a').each(function(){
	   var href = $(this).attr('href');
	   if (href == pathname || href == editpath || href == combined || href == shortpath){
	       $(this).addClass('active');
	       $(this).parent().addClass('active');	       
	   }

	});
	
	//console.log("combined: "+combined);
	
	$('#sidebar ul li li a').each(function(){
	   $(this).removeClass('active');
	   var href = $(this).attr('href');
   	   //console.log(pathname+"/"+" : "+href);
	   if (href == pathname || href == combined){
	       $(this).addClass('active');
	       $(this).parent().parent().parent().find(">a").addClass('active');	       
	       $(this).parent().parent().parent().addClass('active');	       	       
	   }
		   
	});
	
	/* Print button */
		$(".print").click(function(e){
		window.print();
		e.preventDefault();
	});
	
	
	/* !dragable rows */
	// Return a helper with preserved width of cells
	var fixHelper = function(e, ui) {
	    ui.children().each(function() {
	        $(this).width($(this).width());
	    });
	    return ui;
	};
	
//	if($.sortable){
	$(".list_order tbody").sortable({
	    helper: fixHelper, update: function(ev,ui) {
	     // 
		    //console.log('System - do callback');
		    var trs = $(this).find('tr');
			var parray = [];
			trs.each(function(i,n) {
			    var current = $(n);
			   // console.log($(n).attr('rel')); 
			    parray.push($(n).attr('rel'));
			});
			
			$.post("/admin/customer/sort_customer_products/", { products: parray },
			function(data) {
		     //console.log("Data Loaded: " + data);
		    });
			
	     	

	     }
	}).disableSelection();
//	}
	


	$(".list_order_picture tbody").sortable({
	    helper: fixHelper, update: function(ev,ui) {
	     // 
		    //console.log('System - do callback');
		    var trs = $(this).find('tr');
			var parray = [];
			trs.each(function(i,n) {
			    var current = $(n);
			   // console.log($(n).attr('rel')); 
			    parray.push($(n).attr('rel'));
			});
			
			$.post("/admin/products/sort_pictures/", { pictures: parray },
			function(data) {
		     //console.log("Data Loaded: " + data);
		    });
			
	     	

	     }
	}).disableSelection();


	
	var fixHelperModified = function(e, tr) {
	    var $originals = tr.children();
	    var $helper = tr.clone();
	    $helper.children().each(function(index)
	    {
	      $(this).width($originals.eq(index).width())
	    });
	    return $helper;
	};
	
	/*
	$("#sort2 tbody").sortable({
	    helper: fixHelperModified 
	    
	}).disableSelection();
	*/
	
	//$("#sort3 tbody").sortable().disableSelection();​

	
	/* !lightbox */
    $("a[rel^='lightbox']").prettyPhoto({
    social_tools:'',
    show_title: false
    });

    /* remove logo */
    $("a#remove_logo").click(function(e){
    
	   var id = $(this).attr('rel'); 
	   $.post("/admin/customers/remove_logo/", { customer_id: id },
			function(data) {
		     console.log("Data Loaded: " + data);
		    }); 
		    
	 $(this).parent().parent().html('<p>'+
	    '<label for="logo">Billede</label>'+
	    '<input name="logo" type="file" id="logo" value="" placeholder="Logo">'+
	    '<span class="note">Max 180 x 110 pixels - billedet skal være af typen JPG eller PNG.</span>'+
	  '</p>');
   	     e.preventDefault();
		    
    });


    /* !remove picture from product */
     $("a#replace_picture").click(function(e){
	     $(this).parent().parent().html('<p>'+
	    '<label for="logo">Billede</label>'+
	    '<input name="product_image" type="file" id="product_image" value="" placeholder="Product billede">'+
	    '<span class="note">Max 1400 x 1400 pixels - billedet skal være af typen JPG eller PNG.</span>'+
	  '</p>');
   	     e.preventDefault();
	     
     });
     
      $("a#replace_logo").click(function(e){
	     $(this).parent().parent().html('<p>'+
	    '<label for="logo">Billede</label>'+
	    '<input name="logo" type="file" id="logo" value="" placeholder="Logo">'+
	    '<span class="note">Max 180 x 110 pixels - billedet skal være af typen JPG eller PNG.</span>'+
	  '</p>');
   	     e.preventDefault();
	     
     });

	
	/* Calendar datepicker */
	if($.datepicker){
	$(".datepicker").datepicker(
	{
      changeMonth: true,
      changeYear: true,
      dateFormat: 'dd-mm-yy'});
    }  

      
     $(".select_date").click(function(e){
//	     alert($(this).parent().find('input').datepicker('widget').is(':hidden'));
	     
     if ($(this).parent().find('input').datepicker('widget').is(':hidden')) {
        $(this).parent().find('input').datepicker("show");

	    } else {
	        $(this).parent().find('input').datepicker('widget').hide();
	    }
	     
	     e.preventDefault();
     }); 
     
	
	/* Table sorting */
 	$(".sortable").tablesorter(); 
	$("a[rel^='prettyPhoto']").prettyPhoto();

	/* Delete popup */	 
	$('.delete').click(function(){
            return confirm('Are you sure you want to delete this '+jQuery(this).attr('title')+"?");
            // jQuery(this).attr('title') gets anchor title attribute
//            return answer; // answer is a boolean
    }); 

	/* Filebrowser, not used */	 	
	$('.filelist tr.file').click(function(){
		$('.checkbox_selector').attr('checked', false);
		$(this).find('.checkbox_selector').attr('checked', true);
//		console.log('type: '+$(this).find('.mediatype').html());
		if($(this).find('.mediatype').html() == "video"){
			$('#type').val(2);
		}else{
			$('#type').val(1);			
		}
		//alert($('#type').val())
	});
	
 });