import { LightningElement } from 'lwc';
export default class Getupdemo extends LightningElement {
data='My life full damage';
get toUppercase(){
    return(this.data).toUpperCase();
}
}