import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  states: string[] = ['AR', 'AL', 'CA', 'DC'];
  form!: FormGroup;
  userNameLength = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: [null,[Validators.required, Validators.pattern('.{3,}')]],
      email: [null, [Validators.required, Validators.email]],
      password: [null ,[Validators.required,Validators.pattern(
        '(?=.*[A-Za-z])(?=.*[A-Z])(?!.* )(?=.*[0-9])[A-Za-z0-9d$@].{5,}'
      )
      ]],
      confirmPassword: [null, Validators.required],
      gender: [null, Validators.required],
      address: this.fb.group({
        city: [null , Validators.required],
        state: [null, Validators.required],
        zipCode: [null , [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      }),
    });

    this.form.get('userName')?.valueChanges.subscribe((value: string) => {
      this.userNameLength = value.length;
    });
  }

  laodData() {
    this.form.patchValue({
      userName: 'DivFaisal',
      email: 'test@test.com',
      password: '12345',
      confirmPassword: '12345',
      gender: 'male',
      address: {
        city: 'Riyadh',
        state: 'AL',
        zipCode: '876786',
      },
    });
  }
  save() {
    this.loopThroughControls(this.form);
       }

    loopThroughControls(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach((key: string) => {
     const controlName = formGroup.get(key);
       if (controlName instanceof FormGroup) {
     this.loopThroughControls(controlName);
     } else {
      console.log(`${key} - ${controlName?.value}`)
     }
      });
    }


  get userName() {
   return this.form.get('userName');
   }
  get email() {
   return this.form.get('email');
    }
    get password() {
   return this.form.get('password');
  }
    get confirmPassword() {
     return this.form.get('confirmPassword');
  }
    get gender() {
    return this.form.get('gender');
   }
   get address(){
    return this.form.get('address');

    }
    get city() {
  return this.form.get('address')?.get('city');
     }
    get state() {
      return this.form.get('address')?.get('state');
    }
     get zipCode(){
      return this.form.get('address')?.get('zipCode');
     }

     messageValidation={
      userName: {
     required:'اسم المستخدم مطلوب',
    minlength:'اسم المستخدم على االقل ثالث خانات' },
    email: {
      required:'البريد اإللكتروني مطلوب',
      email: 'صيغة البريد اإللكتروني غير صحيحة' },
      password:{
        required:'كلمة االسر مطلوبة',
        pattern:'كلمة السر ست خانات ارقام وحروف وعلى االقل حرف واحد كبير بدون مسافات'
      },
      confirmPassword : {
        required:'الحقل مطلوب'
      },
      city: {
        required:'حقل اسم المدينة مطلوب'
      },
      state:{
        required: 'حقل المنطقة مطلوب'
      },
      zipCode:{
        required:'حقل الرمز البريدي مطلوب' ,
        pattern:' الرمز البريدي لابد أن يكون قيمة رقمية من خمس خانات'
      }

      };
      currentMessageValidation = {
        userName: '',
        email: '',
         password: '',
        confirmPassword: '',
        gender: '',
       city: '',
        state: '',
        zipCode: ''
        };



     }



