function load() {			
	document.getElementById('load').onload=loademojis();
	document.getElementById('emoji').addEventListener('keyup', filter);
	document.getElementById('more').addEventListener('click', show);
	document.getElementById('back').addEventListener('click', back);

	function loademojis() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET','smiley.json',true);
		xhr.onload=function() {
		if(this.status==200) {
			var emoji = JSON.parse(this.responseText);
			var output='';
			for(var i=0;i<emoji.length;i++) {
                output+='<li>' +
                        '<h1>'+emoji[i].name+'</h1>' +
                        '<img src="'+emoji[i].url+'">'+ 
                        '<p>'+emoji[i].keyword+'</p>' +
						'</li>';
			}
			document.getElementById('output').innerHTML=output;
		}
		}
	xhr.send();
	}

	function filter() {
		var input = document.getElementById('emoji').value;
		var filter = input.toUpperCase();
		var ul = document.getElementById('output');
		var li = ul.getElementsByTagName('li');
		for(var i=0;i<li.length;i++) {
            var p = li[i].getElementsByTagName('p');
            if(p[0].innerHTML.toUpperCase().indexOf(filter) > -1)
                    li[i].style.display='block';
			else
					li[i].style.display='none';
		}		
	}

	var ul = document.getElementById('output');
	var li = ul.getElementsByTagName('li');

	function show() {
		for(var i=0;i<li.length;i++) {
			var h1 = li[i].getElementsByTagName('h1');
			li[i].style.float='none';
			h1[0].style.display='block';
		}
		document.getElementById('back').style.display='block';
		document.getElementById('more').style.display='none';
	}

	function back() {
		for(var i=0;i<li.length;i++) {
			var h1 = li[i].getElementsByTagName('h1');
			li[i].style.float='left';
			h1[0].style.display='none';
		}
		document.getElementById('back').style.display='none';
		document.getElementById('more').style.display='block';
	}
}
