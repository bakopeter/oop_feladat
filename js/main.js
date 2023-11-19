/*
Készítsen egy torta osztályt:
A torta adattagjai a következőek legyenek: torta neve, emeletek száma, 
meg van-e kenve krémmel (logikai).   
*/
class Torta {
    constructor(tortaNeve) {
        this._tortaNeve = tortaNeve;
        this._emeletekSzama = 0;
        this._megkenve = false;
        this._kaloria = 0;
    }
    get TortaNeve() {
        return this._tortaNeve;
    }
    get EmeletekSzama() {
        return this._emeletekSzama;
    }
    get Megkenve() {
        return this._megkenve;
    }
    get Kaloria() {
        return this._kaloria;
    }
    /*
    Az osztálynak legyen egy ujEmelet metódusa, ami nem vár paramétert, és 
    egy új emeletet rak a tortára. 
    */
    ujEmelet() {
        this._emeletekSzama++;
    }
    /*
    Az osztálynak legyen egy kremmelMegken metódusa, ami nem vár paramétert. 
    Ha a torta még nincs megkenve krémmel, úgy a metódus tegye ezt meg. 
    Térjen vissza logikai értékkel attól függően, hogy sikerült -e.  
    */
    kremmelMegken() {
        let sikerult = false;
        if (!this._megkenve) {
            this._megkenve = true;
            sikerult = true;
        }
        return sikerult;

    }
    /*
    Készítsen egy mennyiKaloria metódust az osztályhoz. A torta minden emelete 
    1000 kalória értékű, ha még krémmel is meg van kenve, akkor ennek a kétszerese. 
    */
    mennyiKaloria() {
        this._kaloria = !this._megkenve ? this._emeletekSzama * 1000 : this._emeletekSzama * 2000;
    }
}

let tortak = [];

function hozzaAd() {
    let tortaNeve = document.getElementById("tortaNeve").value;
    let torta = new Torta(tortaNeve);
    document.getElementById("tortaNeve").value = "";
    let selected = document.getElementById("emeletekSzama").value;
    for (let i = 0; i <= selected; i++) {
        torta.ujEmelet();
    }
    document.getElementById("emeletekSzama").value = 0;
    if (document.getElementById("megkenve").checked) {
        torta.kremmelMegken();
    }
    document.getElementById("megkenve").checked = false;
    torta.mennyiKaloria();
    tortak.push(torta);
}

function megJelenit() {
    document.getElementById("tablazat").style.display = "block";
    let tbody = document.getElementById("tablazatAdatok");
    tbody.innerHTML = "";
    for (let i=0; i<tortak.length; i++) {
        tbody.innerHTML += `<tr><th scope="row">${i+1}</th>
        <td>${tortak[i].TortaNeve}</td>
        <td>${tortak[i].EmeletekSzama}</td>
        <td>${megkenve = tortak[i].Megkenve ? "igen" : "nem"}</td>
        <td>${tortak[i].Kaloria}</td></tr>`
    }
}
/*
HTML: 
A fent említett feladathoz hozzon létre egy ürlapot amin fel tudja venni a 
torták adatait egy gomb lenyomására valamint egy másik gomb lenyomására 
jelenítse meg a tortákat egy táblázatban. (Bootstrap használata kell!)
*/