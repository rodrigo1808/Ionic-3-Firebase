import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/confirmPassword';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, public afAuth: AngularFireAuth) {

  	this.registerForm = this.formbuilder.group({
  		name: [null, [Validators.required, Validators.minLength(3)]],
  		email: [null, [Validators.required, Validators.email]],
  		password: [null, [Validators.required, Validators.minLength(6)]],
  		confirmPassword: [null, [Validators.required, Validators.minLength(6), ValidateConfirmPassword]],
  	});

  }

  ionViewDidLoad() {
    
  }

  submitForm() {
  	console.log(this.registerForm.value);
  	this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
  	.then((response)=> {
  		console.log("criou o usuário");
  	})
  	.catch((error)=>{
  		console.log("erro", error);
  	})

  }

}
