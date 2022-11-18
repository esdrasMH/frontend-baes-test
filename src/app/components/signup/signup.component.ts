import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.signUp(this.user).subscribe(
      ({ token }: any) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
