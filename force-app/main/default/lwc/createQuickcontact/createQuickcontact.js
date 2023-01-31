import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FName_field from '@salesforce/schema/Contact.FirstName';
import LName_field from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import Phone_field  from '@salesforce/schema/Contact.Phone';
export default class CreateQuickcontact extends LightningElement {
contactFields = [ FName_field,LName_field,Email,Phone_field];
    @api recordId;
    
    handleSuccess(event)
    {
        const evt = new ShowToastEvent({ 
        title: "Contact  Created",
        message: "Record Id -"+event.detail.id,
        variant: "success"
        });
        this.dispatchEvent(evt);
    }
}