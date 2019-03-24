import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private windowMinHeight: string;

  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private routeParams: ActivatedRoute
  ) { 
    this.windowMinHeight = `${window.innerHeight}px`;
  }

  ngOnInit() {
    setTimeout(() => {
      document.querySelector('.centered-container').classList.add('active')
      this.validateLogin();
    }, 500);
    
  }
  
  private validateLogin() {
    if (!!this.routeParams.snapshot.queryParams.code) {
      this.login(this.routeParams.snapshot.queryParams.code);
    }
  }
  
  private login(code: string): void {
    console.log('authing');
    this.authService.githubAuthenticate(code)
        .subscribe((response) => {
          if (!response) {
            this.router.navigate(['/'])
          } else {
            this.router.navigate(['./repositorios']);
          }
        });
  }
}
