import { LightningElement } from 'lwc';

export default class AbdulsCheckbox extends LightningElement {
    handleChange(event) {
        const isChecked = event.target.checked;
        const checkboxName = event.target.name;
    
        console.log(`${checkboxName} is ${isChecked ? 'checked' : 'unchecked'}`);
      }
}
