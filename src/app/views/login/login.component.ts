import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticateService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  private login(): void {
    this.authService.githubAuthenticate()
        .subscribe((response) => {
          console.log(response);
          if(response) {
            this.router.navigate(['./repositorios']);
          }
        });
  }
}
