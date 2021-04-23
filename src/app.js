function init(){
  $('#button').click(send);
  console.log('ciao');
}

function send(){
$('#text').text('Hello world')
}
$(document).ready(init)
