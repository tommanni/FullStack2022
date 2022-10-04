/* Tehtävä 2.1
Tee ohjelma, joka tallentaa yhden viikon viikonpäivät ja niitä vastaavat työtunnit
taulukkoon. Voit keksiä päiville haluamasi työtunnit, rehellinen pitää kuitenkin olla. */

const paivienTyöTunnit = () => {
    paivat = [{ "paiva": "Maanantai", "tunnit": 8 }, { "paiva": "Tiistai", "tunnit": 8 }, { "paiva": "Keskiviikko", "tunnit": 8 }, { "paiva": "Torstai", "tunnit": 8 }, { "paiva": "Perjantai", "tunnit": 8 }, { "paiva": " Lauantai", "tunnit": 4 }, { "paiva": "Sunnuntai", "tunnit": 4 }]


    /* Tehtävä 2.2
    Tee tehtävän 2.1 ohjelmaan lisäominaisuus, joka laskee työtuntien keskiarvon
    a) for-rakenteen (forEach, for-silmukka tai for of) avulla
    b) reduce -funktiolla */

    //a)
    tuntiSumma = 0
    paivat.forEach((paiva) => { tuntiSumma += paiva.tunnit })
    console.log(tuntiSumma / paivat.length)

    //b)
    const tuntiKeskiarvo2 = paivat.reduce((previousValue, currentValue) => previousValue + currentValue.tunnit, 0) / paivat.length
    console.log(tuntiKeskiarvo2)



}

paivienTyöTunnit()