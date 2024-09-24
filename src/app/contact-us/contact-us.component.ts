import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactUsService } from '../contact-us.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit{
  contactForm = new FormGroup({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    emailId: new FormControl('',Validators.required),
    age: new FormControl(Validators.required),
    gender: new FormControl('',Validators.required),
    mobilenumber: new FormControl(Validators.required),
    pan_no: new FormControl('',Validators.required),
    adhaar_no: new FormControl('',Validators.required)
  })

  contactList: any[] = []
  isEditDetails: boolean = false
  constructor(private contactservice: ContactUsService){

  }
  ngOnInit(): void {
    this.getContactsList()
  }

  onSubmit(){
    let data ={
      ...this.contactForm.value
    }
    this.isEditDetails ?
    this.contactservice.createContacts(data).subscribe((res)=>{
     this.contactForm.reset()
     this.getContactsList()
    }) : 
    this.contactservice.updateContactDetails(data).subscribe((res)=>{
      this.contactForm.reset()
      this.getContactsList()
    })
  }

  getContactsList(){
    this.contactservice.getContactList().subscribe((res)=>{
      this.isEditDetails = false
      this.contactList = res
    })
  }

  editContact(contact:any){
    if(contact){
      this.isEditDetails = true
      document.getElementById('form')?.scrollIntoView()
      this.contactForm.controls['first_name'].patchValue(contact.first_name)
      this.contactForm.controls['last_name'].patchValue(contact.first_name)
      this.contactForm.controls['age'].patchValue(contact.age)
      this.contactForm.controls['emailId'].patchValue(contact.emailId)
      this.contactForm.controls['gender'].patchValue(contact.gender)
      this.contactForm.controls['mobilenumber'].patchValue(contact.mobilenumber)
      this.contactForm.controls['adhaar_no'].patchValue(contact.adhaar_no)
      this.contactForm.controls['pan_no'].patchValue(contact.pan_no)
    }
  }

  deleteContact(contactId:string){
    this.contactservice.deleteContactDetail(contactId).subscribe((res)=>{
      this.getContactsList()
    })
  }
}
