import {makeAutoObservable} from "mobx";

class SideBarMenu{
    sideBarActive=false
    constructor() {
        makeAutoObservable(this)
    }
    changeSideBarActive(bool){
        this.sideBarActive=bool
    }
}
export default new SideBarMenu()