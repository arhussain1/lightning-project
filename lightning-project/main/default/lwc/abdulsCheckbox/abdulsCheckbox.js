import { LightningElement } from 'lwc';

export default class AbdulsCheckbox extends LightningElement {
    handleChange(event) {
        const isChecked = event.target.checked;
        // Perform any desired logic based on the checkbox value
        console.log('Checkbox value:', isChecked);
    }
}