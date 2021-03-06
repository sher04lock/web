import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userModel: User = new User();
  editForm: boolean = false;
  editOrCancel = "Edytuj";

  userId: number = parseInt(localStorage.getItem("id"));

  @ViewChild('form') form: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    //this.userService.getById(this.userId)
    //  .subscribe(user => {this.userModel = user; console.log(this.userModel)} );
    // this.form.form.disable();
    console.log(this.router.url);

  }

  enableForm() {
    this.editForm = !this.editForm;
    this.editOrCancel = this.editForm ? "Edytuj" : "Anuluj";

  }

  onSubmit() {
    this.userService.update(this.userModel, this.userId).subscribe(
      () => {

      },
      error => {
        console.log(error);
      }
    );
  }

  //funkcja sprawdzajaca czy sciezka nalezy do /profile/favourites, czy tylko do /profile
  //obsluzone tylko dla /profile/favourites, bo nie wiem czy chcecie zeby byl wyswietlany komponent user_profile dla
  // innych sciezek powiazanych z /profile np. +/info
  // isShowProfile() {
  //   let response = true;

  //   if (this.router.url === "/profile/favourite-routes") response = false;

  //   return response;
  // }

}
