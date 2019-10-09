import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  addForm: FormGroup;
  ngOnInit() {
  	this.addForm = this.formBuilder.group({
  	sId:   ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^[0-9]*$")]],
  	fName: ['', [Validators.required, Validators.maxLength(2)]],
  	lName: ['', Validators.required],
  	email: ['', Validators.required,]
  	});
  }

  onSubmit(){
  	console.log(this.addForm.value);
  }

}
