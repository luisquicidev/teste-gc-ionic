import {Injectable} from '@angular/core';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Facebook} from '@ionic-native/facebook/ngx';
import {SocialLoginEnum} from '../enum/social-login.enum';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import OAuthCredential = firebase.auth.OAuthCredential;

@Injectable()
export class AuthService {

    constructor(
        private facebook: Facebook,
        private google: GooglePlus,
        private fireAuth: AngularFireAuth
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
        this.firebaseLogin(SocialLoginEnum.GOOGLE, res.accessToken);
    }

    async facebookLogin() {
        const res = await this.facebook.login(['email']);
        this.firebaseLogin(SocialLoginEnum.FACEBOOK, res.authResponse.accessToken);
    }

    async firebaseLogin(type: SocialLoginEnum, accessToken: string) {
        let credential: OAuthCredential;
        if (type === SocialLoginEnum.FACEBOOK) {
            credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
        } else {
            credential = firebase.auth.GoogleAuthProvider.credential(null, accessToken);
        }

        const user = await this.fireAuth.auth.signInWithCredential(credential);
    }

    async auth(credentials: { email: string, password: string }) {
        const user = await this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
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
