/* Tehtävä 2.1
Tee ohjelma, joka tallentaa yhden viikon viikonpäivät ja niitä vastaavat työtunnit
taulukkoon. Voit keksiä päiville haluamasi työtunnit, rehellinen pitää kuitenkin olla. */

const paivienTyöTunnit = () => {
    const paivat = [{ "paiva": "Maanantai", "tunnit": 11 }, { "paiva": "Tiistai", "tunnit": 7 }, { "paiva": "Keskiviikko", "tunnit": 8 }, { "paiva": "Torstai", "tunnit": 7 }, { "paiva": "Perjantai", "tunnit": 9 }, { "paiva": " Lauantai", "tunnit": 2 }, { "paiva": "Sunnuntai", "tunnit": 3 }]


    /* Tehtävä 2.2
    Tee tehtävän 2.1 ohjelmaan lisäominaisuus, joka laskee työtuntien keskiarvon
    a) for-rakenteen (forEach, for-silmukka tai for of) avulla
    b) reduce -funktiolla */

    //a)
    tuntiSumma = 0
    for (const paiva of paivat) {
        tuntiSumma += paiva.tunnit
    }
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

/* Tehtävä 2.4
    Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden palkkatulot kuukausittain.
    Kuukausipalkkaa korotetaan 50 %:lla. Ohjelma luo uuden taulukon, josta löytyvät korotetut
    palkat. */

palkkaKertoja = (palkat) => {
    return palkat.map(palkka => palkka * 1.50)
}
console.log("Kerrotut palkat:", palkkaKertoja([2000, 3500, 3300, 2600, 1900, 4500, 3000]))

/* Tehtävä 2.5
Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden bruttopalkat kuukausittain ja
veroprosentti. Ohjelma luo uuden taulukon ja laskee nettotulot vähentäen jokaisen
kuukauden bruttopalkasta verot. */

veroVähentäjä = (palkatJaVerot) => {
    return palkatJaVerot.map(palkkaJaVero => palkkaJaVero.palkka *= (100 - palkkaJaVero.veroprosentti) / 100)
}
console.log("Nettotulot:", veroVähentäjä([{ "palkka": 3000, "veroprosentti": 30 }, { "palkka": 4000, "veroprosentti": 40 }, { "palkka": 2700, "veroprosentti": 27 }]))

/* Tehtävä 2.6
Tee ohjelma, joka järjestää taulukon luvut [1,4,100,2,5,4] suuruusjärjestykseen. Käytä
JavaScriptin sort-funktiota oletustoteutuksella (ei omaa compare-funktiota) */

taulukkoJärjestäjä = () => {
    let taulukko = [1, 4, 100, 2, 5, 4]
    return taulukko.sort()
}
console.log("Järjestetty:", taulukkoJärjestäjä())

/* Tehtävä 2.7
Tee ohjelma, joka järjestää taulukon merkkijonot [“1”,”4”,”100”,”2”,”5”,”4”]
aakkosjärjestykseen. Käytä JavaScriptin sort-funktiota oletustoteutuksella (ei omaa
compare-funktiota) */

taulukkoJärjestäjä2 = () => {
    let taulukko = ["1", "4", "100", "2", "5", "4"]
    return taulukko.sort()
}
console.log("Järjestetty:", taulukkoJärjestäjä2())

/* Tehtävä 2.8
Selitä lyhyesti miten miten JavaScriptin sort-funktio toimii ja mitä tarkoittaa parametrina
annettava compare-funktio. */

//sort-funktio muuttaa taulukon arvot merkkijonoiksi ja järjestää ne vertaamalla niiden UTF-16 arvoja.
//parametrina annettava compare-funktio määrittää järjestelyn järjestyksen, jos sitä ei anna, niin järjestys tehdään yllä mainitulla tavalla.

/* Tehtävä 2.9
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa taulukon
objektit on järjestetty arvojen(values) mukaiseen järjestykseen. */

const objektiJärjestäjä = () => {
    const objektit = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }]
    return objektit.sort((a, b) => Object.values(a) - Object.values(b))
}
console.log("Järjestettynä arvojen mukaan:", objektiJärjestäjä())

/* Tehtävä 2.10
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa taulukon
kentät on järjestetty päivien(avaimet) mukaiseen järjestykseen periaatteella
ma&lt;ti&lt;ke&lt;to&lt;pe&lt;la&lt;su. */

const objektiJärjestäjä2 = () => {
    const objektit = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }]
    const paivat = { 'ma': 1, 'ti': 2, 'ke': 3, 'to': 4, 'pe': 5, 'la': 6 }
    return objektit.sort((a, b) => { return paivat[Object.keys(a)] - paivat[Object.keys(b)] })
}
console.log("Järjestettynä avainten mukaan:", objektiJärjestäjä2())

/* Tehtävä 2.11
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa on
mukana objektit, joissa on parillinen arvo. */

const parillisetObjektit = () => {
    const objektit = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }]
    return objektit.filter((objekti) => Object.values(objekti)[0] % 2 === 0)
}
console.log("Parillisen arvon omaavat objektit:", parillisetObjektit())

/* Tehtävä 2.12
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa on
mukana objektit, joiden avaimen toinen kirjain on e. */

const objektitJoissaE = () => {
    const objektit = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }]
    return objektit.filter((objekti) => Object.keys(objekti)[0][1] === "e")
}
console.log("Objektit, joiden avaimen toinen kirjain on e:", objektitJoissaE())

/* Tehtävä 2.13
Sinulla on {“ma”:44, “pe”:100, “ke”:21, “ti”: 66,”la”:22}. Tee ohjelma, joka muuttaa objektin
listaksi niin, että [{“ma”:44},{“pe”:100},...]. Ohje: käytä esim. Objectin keys ja values -
funktioita. */

const objektiListaksi = () => {
    const objekti = { "ma": 44, "pe": 100, "ke": 21, "ti": 66, "la": 22 }
    return Object.keys(objekti).map((i) => ({ [i]: objekti[i] }))

}
console.log("Objekti listana:", objektiListaksi())