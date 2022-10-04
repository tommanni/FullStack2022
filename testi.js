/* Tehtävä 2.1
Tee ohjelma, joka tallentaa yhden viikon viikonpäivät ja niitä vastaavat työtunnit
taulukkoon. Voit keksiä päiville haluamasi työtunnit, rehellinen pitää kuitenkin olla. */

const paivienTyöTunnit = () => {
    paivat = [{ "paiva": "Maanantai", "tunnit": 11 }, { "paiva": "Tiistai", "tunnit": 7 }, { "paiva": "Keskiviikko", "tunnit": 8 }, { "paiva": "Torstai", "tunnit": 7 }, { "paiva": "Perjantai", "tunnit": 9 }, { "paiva": " Lauantai", "tunnit": 2 }, { "paiva": "Sunnuntai", "tunnit": 3 }]


    /* Tehtävä 2.2
    Tee tehtävän 2.1 ohjelmaan lisäominaisuus, joka laskee työtuntien keskiarvon
    a) for-rakenteen (forEach, for-silmukka tai for of) avulla
    b) reduce -funktiolla */

    //a)
    tuntiSumma = 0
    paivat.forEach((paiva) => { tuntiSumma += paiva.tunnit })
    let tuntiKeskiarvo = tuntiSumma / paivat.length
    console.log("Tuntien keskiarvo forEachilla:", tuntiKeskiarvo)

    //b)
    const tuntiKeskiarvo2 = paivat.reduce((previousValue, currentValue) => previousValue + currentValue.tunnit, 0) / paivat.length
    console.log("Tuntien keskiarvo reducella:", tuntiKeskiarvo2)

    /* Tehtävä 2.3
    Lisää ohjelmaan 2.2 minimin ja maksimin selvittävä osuus.
    a) for-rakenteen (forEach, for-silmukka tai for of) avulla
    b) reduce -funktiolla */

    //a)
    let pienin = paivat[0].tunnit
    let suurin = paivat[0].tunnit
    paivat.forEach((paiva) => paiva.tunnit < pienin ? pienin = paiva.tunnit : pienin = pienin)
    paivat.forEach((paiva) => paiva.tunnit > suurin ? suurin = paiva.tunnit : suurin = suurin)
    console.log("Pienin tuntimäärä forEachilla:", pienin)
    console.log("Suurin tuntimäärä forEachilla:", suurin)

    //b)
    let pienin2 = paivat.reduce((acc, currentValue) => currentValue.tunnit < acc ? currentValue.tunnit : acc, paivat[0].tunnit)
    let suurin2 = paivat.reduce((acc, currentValue) => currentValue.tunnit > acc ? currentValue.tunnit : acc, paivat[0].tunnit)
    console.log("Pienin tuntimäärä reducella:", pienin2)
    console.log("Suurin tuntimäärä reducella:", suurin2)
}

paivienTyöTunnit();