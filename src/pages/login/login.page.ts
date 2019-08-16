import {Component, OnInit} from '@angular/core';
import {Facebook} from '@ionic-native/facebook/ngx';
import {SocialLoginEnum} from '../../enum/social-login.enum';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    fb = SocialLoginEnum.FACEBOOK;
    gg = SocialLoginEnum.GOOGLE;

    constructor(
        private  authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    async socialLogin(type: SocialLoginEnum) {
        this.authService.socialAuth(type);
    }

}
