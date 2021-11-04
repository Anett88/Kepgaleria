$(function () {
    const kepAdat = [//egy tömbe rakjuk az adatokat,nem akarom megváltoztatni azért const
        {
            cim: "1.kép címe",
            eleresiUt: "kepek/kep1.jpg",
            leiras: "1 kép részletes leirasa"
        },

        {
            cim: "2.kép címe",
            eleresiUt: "kepek/kep2.jpg",
            leiras: "2 kép részletes leirasa"
        },
        {
            cim: "3.kép címe",
            eleresiUt: "kepek/kep3.jpg",
            leiras: "3 kép részletes leirasa"
        }

    ];
    let aktIndex=0;
    //van egy sablon elem 
    //sablon elemet klonozzuk 
    // hozzá csataljuk a szülő elemhez
    //végig megyünk a tömbön és a klonozott elemmel és a tömb adataival példányosítjuk a kártyánkat 

        //KISKÉPEK MEGJELENITÉSE
    const galeriaSzulo = $("#galeria");
    let sablonElem = $(".kartya");
//    const ujElem=sablonElem.clone().appendTo(galeriaSzulo);
//    const ujKartya=new Kartya(ujElem,kepAdat[0]); //ez bekerült a for ciklusba:

    for (let index = 0; index < kepAdat.length; index++) {
        const ujElem = sablonElem.clone().appendTo(galeriaSzulo);
        const ujKartya = new Kartya(ujElem, kepAdat[index],index);

    }

    //forEach-el
//   kepAdat.forEach(function(elem){
//    const ujElem=sablonElem.clone().appendTo(galeriaSzulo);
//    const ujKartya=new Kartya(ujElem,kepAdat[elem]);
//   });

    //FŐKÉP MEGJELENIT

    const fokepSzulo = $("#fokep");
    const ujElem = sablonElem.clone().appendTo(fokepSzulo);
    const nagyKartya = new Kartya(ujElem, kepAdat[aktIndex],aktIndex);


    sablonElem.remove();//törölni kell a sablonelemet

    //FŐKÉP MODOSÍTÁSA másik képekre

    $(window).on("kepreKattint", (event) => {
//        $("#fokep img").attr("src", event.detail.eleresiUt);
//        $("#fokep h3").html(event.detail.cim);
//        $("#fokep p").html(event.detail.leiras);

    nagyKartya.setAdatok(event.detail);
    aktIndex=event.detail.index;

    });
    
    //GOMBOKRA KATTINTÁS

    $("#bal").click(balra);
    $("#jobb").click(jobbra);

function balra() {
    
    aktIndex--;
    if(aktIndex<0){
        aktIndex=kepAdat.length-1;
    }
    nagyKartya.setAdatok(kepAdat[aktIndex]);
}

function jobbra(){
    aktIndex++;
    if(aktIndex>kepAdat.length-1){
        aktIndex=0;
    }
    nagyKartya.setAdatok(kepAdat[aktIndex]);
    
}

});


