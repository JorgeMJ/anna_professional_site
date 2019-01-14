
// Shows/Hides the the different letters from the nav-bar.  
function showCv()
{	
	displayNone("letter-cv", "wrapper-cv");
	toggle("letter-cv", "wrapper-cv");
}

function showResearch()
{
	displayNone("letter-research", "wrapper-research");	
	toggle("letter-research", "wrapper-research");
}

function showTeaching()
{
	displayNone("letter-teaching", "wrapper-teaching");	
	toggle("letter-teaching", "wrapper-teaching");
}

function showDiversity()
{
	displayNone("letter-diversity", "wrapper-diversity");	
	toggle("letter-diversity", "wrapper-diversity");
}

// Shows/hides smoothly the sub-menus.
$(document).ready(toggleSubMenu("#menu-publications", ".sub-menu-publications"));
$(document).ready(toggleSubMenu("#menu-conferences", ".sub-menu-conferences"));
$(document).ready(toggleSubMenu("#menu-teaching", ".sub-menu-teaching"));
$(document).ready(toggleSubMenu("#menu-record-service", ".sub-menu-record-service"));



// Hides every 'letter' and 'wrapper' classes except the ones introduced as paramenters.
function displayNone(id, wrapperid)
{
	let x = document.getElementsByClassName("letter"); 
	let wrappers = document.getElementsByClassName("wrapper"); 

	for(let i = 0; i < x.length; i++)
	{
		if(x[i].id == id && wrappers[i].id == wrapperid)
		{
			continue;
		}
		else
		{
			x[i].style.display = "none";
			wrappers[i].style.backgroundColor = "transparent";
			wrappers[i].style.borderBottom = "none";
			wrappers[i].style.borderTop = "none";
		}
	}
}


// Shows/Hides the 'letter' id introduced as a parameter.
function toggle(letter, btnwrapper)
{
	let x = document.getElementById(letter);
	let buttonWrapper = document.getElementById(btnwrapper);
	
	if(x.style.display !== "block")
	{
		x.style.display = "block";
		buttonWrapper.style.backgroundColor = "#E09515";
		buttonWrapper.style.boxSizing = "content-box";
		buttonWrapper.style.borderBottom = "10px solid #E09515";		
	}	
	else
	{
		x.style.display = "none";
		buttonWrapper.style.backgroundColor = "transparent";
		buttonWrapper.style.border = "none";
		buttonWrapper.style.boxSizing = "content-box";	
	}	
}

// Hover function for Nav-bar menu.
$(document).ready(function()
{
	let list = $(".button-menu");

	for(let i= 0; i < list.length; i++)
	{
		$(list[i]).hover(function()
		{
			$(list[i]).addClass("button-menu-bottom");
		}, function(){
			$(list[i]).removeClass("button-menu-bottom");
		})		
	}
})


// Makes the sub-menus show/hide smoothly when hover on/off.
function toggleSubMenu(menu, submenu)
{
    $(menu).hover(function()
    {
        $(submenu).addClass("show");
        setTimeout(function() {
            $(submenu).addClass("altura");
        }, 1);
        setTimeout(function() {
            $(submenu).addClass("opacy");
        }, 50); 
    }, function()
    {
        setTimeout(function() {
            $(submenu).removeClass("opacy");
        }, 1);
        setTimeout(function() {
            $(submenu).removeClass("altura");
        }, 100);
        setTimeout(function() {
            $(submenu).removeClass("show");
        }, 150);
    });
};


// Makes all 'letters' to hide on clicking the 'header'.
$(document).ready(function() {
	$("header").on("click", function(){
		toggleNavbar();	
	});

	$(".button-menu").click(function(event) {
		event.stopPropagation();
	});
})


// Function to hide all 'letters'.
function toggleNavbar() {

	let x = $(".letter");
	let buttonWrapper = $(".wrapper");

	for(let i=0; i < x.length; i++)
	{
		x[i].style.display = "none";
		buttonWrapper[i].style.backgroundColor = "transparent";
		buttonWrapper[i].style.border = "none";
		buttonWrapper[i].style.boxSizing = "content-box";

	}
}


// Scrolls the window to the top.
function scrollToTop()
{
	$("html, body").animate({scrollTop:0}, 400, 'swing');
}

// Makes the 'to-top' class to show/hide at a given height. 
$(function()
{
	$(window).scroll(function()
	{
	    if($(window).scrollTop() >= 950)
	    {
	       	$('.to-top').addClass('show-arrow');
	    }
	    else
	    {
	      	$('.to-top').removeClass('show-arrow');
	    }
	});
});

// Makes the 'to-top' class to change color at a given height and on hover. 
$(function()
{
	$(window).scroll(function()
	{
	   if ($(window).scrollTop() >= 15750) 
	    {
	    	$('.to-top').css('background-color', 'rgba(224,149,21,0.6)');

			$('.to-top').hover(function(){
			    $(this).css('background-color', 'rgba(224,149,21,1)');
		    },function(){
		    	$(this).css('background-color', 'rgba(224,149,21,0.6)');	    
			});
	    }
	    else
	    {
	    	$('.to-top').css('background-color', 'rgba(192,62,2,0.6)');

	    	$('.to-top').hover(function(){
			    $(this).css('background-color', 'rgba(192,62,2,1)');
		    },function(){
	    		$(this).css('background-color', 'rgba(192,62,2,0.6)');	    			    
			});	  
	    }
	});
});





