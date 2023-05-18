import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SKILLS_FIELD from '@salesforce/schema/OpportunityLineItem.Skills__c';

export default class OpportunityProductSkillsManager extends LightningElement {
    @api recordId;
    @track selectedSkills = [];

    @wire(getRecord, { recordId: '$recordId', fields: [SKILLS_FIELD] })
    opportunityProduct;

    get skills() {
        if (this.opportunityProduct.data && this.opportunityProduct.data.fields.Skills__c.value) {
            return this.opportunityProduct.data.fields.Skills__c.value.split(', ');
        }
        return [];
    }

    get skillOptions() {
        return this.skills.map(skill => ({ label: skill, value: skill }));
    }

    handleSkillsChange(event) {
        this.selectedSkills = event.detail.value;
    }
}
