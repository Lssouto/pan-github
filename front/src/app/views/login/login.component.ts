import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Ensure that the background will be 100%
  private windowMinHeight: string;
  // Just binding value from environment
  private gitHubAuthUrl: string;
  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private routeParams: ActivatedRoute,
  ) {
    this.windowMinHeight = `${window.innerHeight}px`;
    this.gitHubAuthUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${environment.client_id}`;
  }

  public ngOnInit(): void {
    this.validateLogin();
    // Give a timeout before animate in case of having code from github
    setTimeout(() => {
      document.querySelector('.centered-container').classList.add('active');
    }, 500);
  }

  // Verify if page has code form github
  private validateLogin(): void {
    if (!!this.routeParams.snapshot.queryParams.code) {
      this.login(this.routeParams.snapshot.queryParams.code);
    }
  }

  // Login
  private login(code: string): void {
    this.authService.githubAuthenticate(code)
        .subscribe((response) => {
          if (!response) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate(['./repositorios']);
          }
        });
  }
}
