var countrysH={};

    function addCountry(countryName,capitalName) {
        countrysH[countryName]=capitalName;
    }

function myFunc() {
var countryName=prompt('Введите Страну');
var capitalName = prompt('Укажите столицу');
addCountry(countryName,capitalName);
}

function myFunc1(){
    
    var сountrysH=countrysH;

    var сountryName=prompt('Введите название страны:');

    if ( сountryName in сountrysH )
        alert( 'страна: ' + сountryName + ' столица: ' + сountrysH[сountryName] );
    else
        alert( 'нет информации о стране ' + сountryName + '!' );
    
}
  function myFunc2() {
var сountrysH=countrysH;
var сountryName=prompt('Введите название страны:');
  delete сountrysH[сountryName];
  }
    


function myFunc3() {

         var сountrysH=countrysH;
  
    for ( var CN in сountrysH )

         console.log( 'страна: ' + CN + ' столица: ' + сountrysH[CN] );
  }


  