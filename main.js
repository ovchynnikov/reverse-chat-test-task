  $(document).ready(function () {
    $('#firstname').on('input change', function () {
        if ($(this).val() != '') {
            $('#submit').prop('disabled', false);
        }
        else {
            $('#submit').prop('disabled', true);
        }
    });
 });



$("#forma").validate({
    rules: {
        firstname: "required",
        firstname: {
            required: true,
            minlength: 2,
            maxlength: 20,
            lettersonly: true           
        }
    },

    messages: {
        firstname: {
            required: "Please enter your name",
            minlength: "Name should be more than 2 characters",
            maxlength: "Name should be less than 20 characters",
            lettersonly: "Name should contain only letters"
            
        }
    }
});

function openform(){
	document.getElementById("chat-form").style.display="block";
	const userName = document.getElementById("firstname").value;
	$("#threadp").append("Hello, " + userName+"!" + "&#010;");
	

}

function closeform(){
	document.getElementById("chat-form").style.display="none";
}

$('#firstname').bind('keyup blur',function(){ 
    $(this).val( $(this).val().replace(/[^A-z]/g,'') );
});


$('#forma').submit(function() {
    document.getElementById("forma").style.display="none";
});



$('#btn-chat').click(function(){
	
    const userName = document.getElementById("firstname").value;
	let myMessage = document.getElementById("msgarea").value;
	
	if( (($("#threadp").val()).toLowerCase()).includes((userName+": "+$("#msgarea").val()).toLowerCase())){
		
		$("#threadp").append("&#013;bot: Sorry, you've already asked that question");
		const textarea = document.getElementById('threadp');
        textarea.scrollTop = textarea.scrollHeight;
	} else {
        const message = $("#msgarea").val();
        $("#msgarea").val("");
        $("#threadp").append("&#013;" + userName +": " + message + "&#013;bot: " + 
        	(message.split('').reverse().join(''))) + "&#010;";

		const textarea = document.getElementById('threadp');
        textarea.scrollTop = textarea.scrollHeight;
		
		
		
		
        /*const textarea = document.getElementById('threadp');
        setInterval(function(){
        textarea.scrollTop = textarea.scrollHeight;
       	}, 1000);*/
     }
        /*var myArr = Array.from($("#msgarea").val());
        var myArrThread = Array.from($("#threadp").val());
        alert(myArr, myArrThread);*/
 });

const input = document.getElementById("msgarea");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn-chat").click();
  }
});





    
    /*document.getElementById("threadp").innerHTML = ("You: " + myMessage + "<br>" + "bot: " + (myMessage.split('').reverse().join(''))) + "<br>";*/

    
    
    /*document.getElementById("msgarea").value = '';
    let history = document.getElementById("threadp").value;
    alert(history);*/
    

/*function addhistory(){
	let myhistory = document.getElementById("threadp").value;
	alert(myhistory);*/
	
 /*$('#threadp').append($('#msgarea').val());
}*/
    