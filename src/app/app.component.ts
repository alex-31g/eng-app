import { Component } from '@angular/core';

import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	user: SocialUser = new SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) { }

	ngOnInit() {
    this.authService.authState.subscribe((user) => {
			console.log('Social User Data =>', user)
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

	logIn(): void {
		console.log('PROVIDER_ID =>', GoogleLoginProvider.PROVIDER_ID)
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.authService.signOut();
  }

	refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
