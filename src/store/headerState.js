import {makeAutoObservable} from "mobx";

class HeaderMenu{
    headerActive=false
    constructor() {
        makeAutoObservable(this)
    }
    changeHeaderActive(bool){
        this.headerActive=bool
    }
}
export default new HeaderMenu()