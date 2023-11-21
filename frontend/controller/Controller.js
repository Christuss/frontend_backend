import DataService from "../model/DataService.js";
import DataView from "../view/DataView.js";
import UrlapModel from "../model/Urlap.js";
import UrlapView from "../view/UrlapView.js";

class Controller {
    constructor() {
        this.dataService = new DataService();
        this.url = "http://localhost:8000/api/writers";
        this.dataService.getData(this.url, this.megjelenit);

        const URLAPMODEL = new UrlapModel();
        const URLAPVIEW = new UrlapView($('.urlap'), URLAPMODEL.getLeiro());
        window.addEventListener('ujAdat', (event)=> {
            console.log("ott");
            console.log(event.detail);
            this.dataService.postData(this.url, {
                nev: event.detail[0].value,
                szul: event.detail[1].value + "-01-01",
              })
        })
        window.addEventListener('torol', (event) => {
            this.dataService.deleteData(this.url, event.detail.id);
        })
        window.addEventListener('kesz', (eventk) => {
            window.addEventListener('csereAdat', (event)=> {
                console.log(event.detail);
                this.dataService.putData(this.url, {
                    id: eventk.detail.id,
                    nev: event.detail[0].value,
                    szul: event.detail[1].value + "-01-01",
                  })
            })
        })
    }

    megjelenit(lista){
        console.log('controllerben lista:', lista);
        new DataView(lista, $(".lista"))
    }
    
}

export default Controller;