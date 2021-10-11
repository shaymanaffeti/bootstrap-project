var arr = []

function makeItem (title, desc, genre,trailer)
{
	var o = {}
	o.title=title,
	o.description=desc,
	o.genre=genre,
	o.trailer=trailer
	

	return o ;
}
var WI=makeItem('What if', 'desperate to rescue funding for her med tech tart up, an idealistic scientist and her hussband strike an outrageous deal with a mysterious investor','Steamy', 'https://www.youtube.com/embed/AFnI887xhBE&t=2s' )

var GY=makeItem('Gypsy','Therapist Jean hollway develops dangerous and intimate relationships with the people in her patients lives in this simmering psycholigical','psycholigical , intimate', 'https://www.youtube.com/embed/4LguEb0nJjs')

var TA=makeItem('The Act','Dee Dee Blanchard is overprotective of her daughter, Gypsy, who is trying to escape the toxic relationship she has with her mother. Gypsys quest for independence opens up a Pandora s box of secrets, which ultimately leads to murder. ','true crime', 'https://www.youtube.com/embed/Y_5fqDZCjQo&t=1s')

var AWE=makeItem('Anne with an E','This reimagining of the classic book and film is a coming-of-age story about a young orphan who is seeking love, acceptance and her place in the world. Amybeth McNulty stars as Anne, a 13-year-old who has endured an abusive childhood in orphanages and the homes of strangers.','period drama','https://www.youtube.com/embed/S5qJXYNNINo&t=2so')
arr=[WI,GY,TA,AWE];
var div=`<div id="show"> </div>`

var search= function(){
    var x = $("#search").val();
     for (var i = 0; i < arr.length; i++) {
         console.log(arr[i ]);
       if (arr[i].title.includes(x)) {
            // $('body').hide()
            $('#show').append(`<div>`+ `<iframe src= [this.innerHTML].trailer frameborder='0'></iframe>`+
    `<h4>`+ [this.innerHTML].title+ `</h4>`+
     `<p>`+ [this.innerHTML].description +`</p>`+
    `</div>`
    )}
    } 
}
$( "#search" ).click(search())


