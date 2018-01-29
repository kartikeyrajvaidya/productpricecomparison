import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ;

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  name: string;
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log('wecwec2ec2rc');
    this.name = form.value.name ;
    console.log(this.name);
  }

}
