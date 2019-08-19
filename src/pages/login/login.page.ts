import {Component, OnInit} from '@angular/core';
import {Facebook} from '@ionic-native/facebook/ngx';
import {SocialLoginEnum} from '../../enum/social-login.enum';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    fb = SocialLoginEnum.FACEBOOK;
    gg = SocialLoginEnum.GOOGLE;

    constructor(
        private  authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    async socialLogin(type: SocialLoginEnum) {
        try {
            await this.authService.socialAuth(type);
            this.router.navigate(['/main/events']);
        } catch (e) {

        }
    }

}
