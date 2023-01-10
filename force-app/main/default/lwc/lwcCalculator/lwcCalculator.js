import { LightningElement } from 'lwc';
export default class LwcCalculator extends LightningElement {
data1;
data2;
result;
handlechange(event){
    if(event.target.name== 'input1'){ 
        
    }   this.data1=event.target.value;
}
}