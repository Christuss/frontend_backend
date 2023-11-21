import ListaView from "./ListaView.js";

class DataView {
    constructor(lista, szuloElem){
        this.szuloElem = szuloElem;
        new ListaView(szuloElem, lista).megjelenites();
    }
}

export default DataView;