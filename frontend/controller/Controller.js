import DataService from "../model/DataService.js";
import DataView from "../view/DataView.js";

class Controller {
    constructor() {
        this.dataService = new DataService();
        this.dataService.getData("http://localhost:8000/api/writers", this.megjelenit);
    }

    megjelenit(lista){
        console.log('controllerben lista:', lista);
        new DataView(lista, $(".lista"))
    }
    
}

export default Controller;