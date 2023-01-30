import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { LightningElement } from 'lwc';
import Name_field from '@salesforce/schema/Account.Name';
import Type_field from '@salesforce/schema/Account.Type';
export default class LightningRecordwithFormLayout extends NavigationMixin(LightningElement){
accountfields = [Name_field,Type_field];

handleSuccess(event)
    {
        const evt = new ShowToastEvent({ 
        title: "Account Created",
        message: "Record Id -"+event.detail.id,
        variant: "success"
        });
        this.dispatchEvent(evt);

        this[NavigationMixin.Navigate]
        ({
   
             type: 'standard__recordPage',
             attributes:{
                recordId : event.detail.id,
                objectApiName:'Account',
                actionName : 'view'
            },
         });
}}