class Kartya{
    constructor(elem,adat,index){
        //létrehozunk változokat az új elemhez
        this.elem=elem;
        //váltózokat az elem egyes grafikus 
        this.cim=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.adat=adat;
        this.adat.index=index;//
        

//        //konret elemeknek érteket adunk
//        this.cim.html(this.adat.cim);
//        this.kep.attr("src",this.adat.eleresiUt);//itt fontos,hogy az eleresiUt "script" fajlban lévő név objektumának a neve
//        this.leiras.html(this.adat.leiras);
        
        this.setAdatok(this.adat);
            
        //FŐKÉP MODOSÍTÁSA másik képekre
        this.elem.on("click",()=>{//ha az elemre rákkatintok,akkor váltodjon ki
           this.kepAtiras();//azon belül hívjuk meg a mi eseényünket,így tudunk komunikálni másik osztállyal
           
        });
        
        
    }
    //kiszervezzük egy beállító metodusba,amit meghívunk a script.js-ben
    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src",ertekek.eleresiUt);//itt fontos,hogy az eleresiUt "script" fajlban lévő név objektumának a neve
        this.leiras.html(ertekek.leiras);
    }
    
    
    //FŐKÉP MODOSÍTÁSA másik képekre
   kepAtiras(){
        let esemeny=new CustomEvent("kepreKattint",{detail:this.adat});
        window.dispatchEvent(esemeny);
    }

    
    
    
}


