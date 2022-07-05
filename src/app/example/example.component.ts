import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})



export class ExampleComponent implements OnInit {



  constructor() {

  }
  displayVal: string = '';
  

    

  getvalue(val: string) {
    console.warn(val)
    this.displayVal = val
  }


  ngOnInit(): void {

  }

}
