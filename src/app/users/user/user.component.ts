import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    var self = this;
    this.route.params.subscribe(function(params: Params){
      self.user.id = params['id'];
      self.user.name = params['name'];
      
      // You can use an arrow function to avoid using "self"

    });
    // this.user.name = this.route.params['name'];
  }

}
