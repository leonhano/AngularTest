import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { states } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  states = states;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      // nameInFormGroup: 'angular test', // <--- the FormControl called "name"
      nameInFormGroup: ['', Validators.required], 
      street: '',
      city: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}

/*
export class HeroDetailComponent {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      // nameInFormGroup: 'angular test', // <--- the FormControl called "name"
      nameInFormGroup: ['', Validators.required], 
      statusInFormGroup: ['true', Validators.required], 
    });
  }
}

export class HeroDetailComponent implements OnInit {

  heroForm = new FormGroup ({
    nameInFormGroup: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
*/

/*
export class HeroDetailComponent1 {
  name = new FormControl();
}

export class HeroDetailComponent2 {
  heroForm = new FormGroup ({
    nameInFormGroup: new FormControl()
  });
}
*/