import DataService from "../model/DataService.js";
import DataView from "../view/DataView.js";
import UrlapModel from "../model/Urlap.js";
import UrlapView from "../view/UrlapView.js";

class Controller {
    constructor() {
        this.dataService = new DataService();
        this.dataService.getData("http://localhost:8000/api/writers", this.megjelenit);

        const URLAPMODEL = new UrlapModel();
        const URLAPVIEW = new UrlapView($('.urlap'), URLAPMODEL.getLeiro());
        window.addEventListener('ujAdat', (event)=> {
            console.log("ott");
            console.log(event.detail);
            this.dataService.postData("http://localhost:8000/api/writers", {
                nev: event.detail[0].value,
                szul: event.detail[1].value + "-01-01",
              })
        })
    }

    megjelenit(lista){
        console.log('controllerben lista:', lista);
        new DataView(lista, $(".lista"))
    }
    
}

export default Controller;