import {makeAutoObservable} from "mobx";

class User{
    name=''
    picture=''
    constructor() {
        makeAutoObservable(this)
    }

    changeName(name){
        this.name=name
    }
    changePicture(picture){

        this.picture=picture
    }
}
export default new User()