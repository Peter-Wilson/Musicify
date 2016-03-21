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
		  
		  $(window).on("resize", function(){var rad = ($('#cd').width()/2)+50;
										circularSlider.setRadius(rad);});
		  var circularSlider;
		  
		  function setupSlider(){
			  var rad = ($('#cd').width()/2)+50;
			  circularSlider = $('#slider').CircularSlider({ 
					min : 30, 
					radius: rad,
					max: 200, 
					value : 10,
					shape: 'Half Circle',
					labelSuffix: "°",
					slide : function(value) {
					}
				});
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