import { LightningElement } from 'lwc';
export default class DataBinding extends LightningElement {
message= "Welcome to salesforce lwc";
handlechange(event){
    this.message=event.target.value;
}
}