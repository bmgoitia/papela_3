
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


/* FULL SIZE TO DOUBLE ELEMENT */

const lv_dobletIcon = 
`<svg class="lv_dobleteIcon" width="20" height="23" xmlns="http://www.w3.org/2000/svg" >
    <rect width="20" height="10" x="1" y="1" rx="2" ry="2" fill="#FC2222" />
    <rect width="20" height="10" x="1" y="13" rx="2" ry="2" fill="#FC2222" />
  </svg>`;

const lv_noDobletIcon= `
<svg class="lv_dobleteIcon" width="20" height="23" xmlns="http://www.w3.org/2000/svg" >
    <rect width="20" height="10" x="1" y="1" rx="2" ry="2" fill="#FC2222" />
    <rect width="20" height="10" x="1" y="10" rx="2" ry="2" fill="#FC2222" />
  </svg>
`;

$('.lv_portIcon').empty().append(lv_dobletIcon);



let lv_homePosition; // lvHead o bnHead




let lv_originalCont;



/* FULL SIZE - DOBLET */

$( ".lv_portIcon" ).on( "click", function(e) {


  let lv_doublContent = $(this).siblings('.lv_dobletWrapper');

  let parentArticle = lv_doublContent.closest('article');
  let grandParentContainer = parentArticle.closest('.container');


   if(grandParentContainer.hasClass('AP')){
    lv_homePosition = "lvHead";  // lvHead o bnHead
    
   } else if(grandParentContainer.hasClass('BN')){
    lv_homePosition = "bnHead";

   } 



   const lv_doublCont = 
`<div class="lv_doubl">
<div class="lv_doublItem lv_doublTop">
  <img src="./img/camera_mini.png" alt="" class="lv_doublImg">
  <div class="lv_DoblText">
    <span class="epiDobl"> Epígrafe </span>
    <h5 class="${lv_homePosition} lv_dobletTitle" contentEditable="true">Titular doblete</h5>
  </div>

</div>

<div class="lv_doublItem lv_doublBottom">
  <img src="./img/camera_mini.png" alt="" class="lv_doublImg">
  <div class="lv_DoblText">
    <span class="epiDobl"> Epígrafe </span>
    <h5 class="${lv_homePosition} lv_dobletTitle" contentEditable="true">Titular doblete</h5>
  </div>
</div>
</div>`;





  
  

  if ($(parentArticle).hasClass('doblete')) {
    $(this).empty().append(lv_dobletIcon);
    lv_doublContent.empty().append(lv_originalCont);
    parentArticle.removeClass("doblete");
    

  } else {
    $(this).empty().append(lv_noDobletIcon);
    lv_originalCont = lv_doublContent.html();
    lv_doublContent.empty().append(lv_doublCont);
    
    parentArticle.addClass("doblete");
  }



});












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
