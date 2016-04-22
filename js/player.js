 $(function() {
			$( "#sortable" ).sortable({
			  placeholder: "ui-state-highlight"
			});
			$( "#sortable" ).disableSelection();
			
			 $('#cd').click(function() {
				$('#cd').rotate({ count:99999, forceJS:true });
			  }, function() {
				$(this).stop();
			  });
		  });
		  
		  var circularSlider;
		  
		  function setupSlider(){
				var spinner;
				
				$('#play').click(function(){
				var bg = $(this).css('background-image');
				bg = bg.replace('url(','').replace(')','');
				var parts = bg.split('/');
				var answer = "\""+parts[parts.length - 1];
				if(answer == "\"arrow.png\"")
				{
					$(this).css("background-image", "url(images/pause.png)"); 
					var angle = 0;
					spinner = setInterval(function(){
						  angle+=5;
						 $("#cd").rotate(angle);
					},50);
					
				}
				else
				{
				
					$(this).css("background-image", "url(images/arrow.png)"); 
					clearInterval(spinner);					
				}
			});
			}