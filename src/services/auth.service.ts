import {Injectable} from '@angular/core';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Facebook} from '@ionic-native/facebook/ngx';
import {SocialLoginEnum} from '../enum/social-login.enum';
import {ɵNgStyleR2Impl} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private facebook: Facebook,
        private google: GooglePlus,
    ) {
    }

    async socialAuth(type: SocialLoginEnum) {
        try {
            switch (type) {
                case SocialLoginEnum.FACEBOOK:
                    await this.facebookLogin();
                    break;
                case SocialLoginEnum.GOOGLE:
                    await this.googleLogin();
                    break;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async googleLogin() {
        const res = await this.google.login({}) as GoogleLoginResponse;
        console.log(res);
    }

    async facebookLogin() {
        const res = await this.facebook.login(['email']);
        console.log(res);
    }
}

interface GoogleLoginResponse {
    accessToken: string;
    displayName: string;
    email: string;
    expires: number;
    expires_in: number;
    familyName: string;
    givenName: string;
    imageUrl: string;
    userId: string;
}
