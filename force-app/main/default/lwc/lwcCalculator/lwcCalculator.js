import { LightningElement } from 'lwc';
export default class LwcCalculator extends LightningElement {
data1;
data2;
result;
handleClick(event){
    const button = event.target.name;
    if(button=='add'){
        this.result= parseInt(this.data1) + parseInt(this.data2);
    }
    else if(button=='subtract'){
       this.result= parseInt(this.data1) - parseInt(this.data2);
    }
    else if(button=='multiplication'){
       this.result= parseInt(this.data1) * parseInt(this.data2);

    }
    else if(button=='division'){
       this.result= parseInt(this.data1) / parseInt(this.data2);
    }
}
handlechange(event){
    const val = event.target.name;
    if(val=='input1'){
     this.data1=event.target.value;
    }
    else if(val=='input2'){
     this.data2=event.target.value;
    }
}
}