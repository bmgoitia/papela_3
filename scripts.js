
//const openings = ["est1", "estV", "multi", "text1", "text2", "comb", "fals"];

let selOp;

let fechaSet = false;


// OPENINGS

$( "#sliderThumb img" ).on( "click", function(e) {
  
  let opName = e.target.className;
  
  $('.thumbItem').addClass('noBorders');
  $(`img.${opName}`).parent().removeClass('noBorders').addClass('selOpening');
  $('#' + opName).css('display', 'block').siblings().hide();

  selOp = opName;

  //console.log(selOp)
  

} );



// IMG picker

const reader = new FileReader();
const fileInput = document.getElementById("phLV");
const img = document.getElementById("imgPpal");
let file;

reader.onload = e => {
  img.src = e.target.result;
}

fileInput.addEventListener('change', e => {
  const f = e.target.files[0];
  file = f;
  reader.readAsDataURL(f);
})




// GENERATE TABLE

$("#bOutput").click(function(){

  /* Empty previous data  */

  $(".outputContent").empty();
  $(".outputBN").empty();
  


  /* Set table date */

  moment.locale("ca");
  let fecha = moment().add(1,'days').format("LL");
  
  if(!fechaSet){
        $(".outputDate").append(`<span class="date"> ${fecha} </span>`)
  }
    
  fechaSet = true;

  

   /* Set table content */

   // 1 - OPENING

  let output1 = [];
  
  if(!selOp){
    selOp = "est1"
  }

  $( ".outputContent" ).append('<p class="bnSep">Apertura</p>');

  
  $(`#${selOp} .lvHead`).each(function(i, obj){
    output1.push($(obj).text());
  });

  //console.log(output1);

  $.each(output1, function( i, value ) {
    $( ".outputContent" ).append( `<p class="outP">${value}</p>` );
  })



  // 2 - BN

  $( ".outputBN" ).append('<p class="bnSep">BN</p>');

  let output2 = [];

  $('.bnHead').each(function(i, obj){
    output2.push($(obj).text());
  });


  $.each(output2, function( i, value ) {
    $( ".outputBN" ).append( `<p class="outP">${value}</p>` );
  })



  


  
})