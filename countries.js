var сountrysH={ 'Германия':'Берлин', 'Венгрия':'Будапешт', 'Франция':'Париж' };

var сountryName=prompt('Введите название страны:');

    if ( сountryName in сountrysH )
        console.log( 'страна: ' + сountryName + ' столица: ' + сountrysH[сountryName] );
    else
        console.log( 'нет информации о стране ' + сountryName + '!' );
    
        function addCountry(countryName,capitalName) {
        countrysH[countryName]=capitalName;

                
    }
    var сountrysH={ 'Германия':'Берлин', 'Венгрия':'Будапешт', 'Франция':'Париж' };
    
        console.log( сountrysH );
    
        delete сountrysH[''];
    
        console.log( сountrysH );   
    function deleteCountry(countryName) {
        delete countrysH[countryName];
    }

    function getCountryInfo(countryName) {
        if ( countryName in countrysH )
            return 'страна: ' + countryName + ' столица: ' + countrysH[countryName] ;
        else
            return 'нет информации о стране ' + countryName + '!' ;
    }

    function listCountrys() {
        var res="";
        for ( var CN in countrysH )
            res+='\n'+getCountryInfo(CN);
        return res;
    }
    
    addCountry('Германия','Берлин');
    addCountry('Венгрия','Будапешт');
    addCountry('Франция','Париж');

    console.log( "список стран:" + listCountrys() );


