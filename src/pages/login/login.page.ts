import {Component, OnInit} from '@angular/core';
import {Facebook} from '@ionic-native/facebook/ngx';
import {SocialLoginEnum} from '../../enum/social-login.enum';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    fb = SocialLoginEnum.FACEBOOK;
    gg = SocialLoginEnum.GOOGLE;
    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    constructor(
        private  authService: AuthService,
        private router: Router,
        private loading: LoadingController,
        private toast: ToastController
    ) {
    }

    ngOnInit() {
    }

    async socialLogin(type: SocialLoginEnum) {
        const loading = await this.loading.create({message: 'Autenticando...'});
        await loading.present();
        try {
            await this.authService.socialAuth(type);
            this.router.navigate(['/main/events']);
        } catch (e) {
            const toast = await this.toast.create({message: 'Não foi possível fazer o login agora. Tente novamente'});
            await toast.present();
        }

        await loading.dismiss();
    }

    async login() {

        if (this.form.invalid) {
            return;
        }

        const loading = await this.loading.create({message: 'Autenticando...'});
        await loading.present();

        try {
            await this.authService.auth(this.form.value);
            this.router.navigate(['/main/events']);
        } catch (e) {
            const toast = await this.toast.create({message: 'Usuário ou senha inválidos.'});
            await toast.present();
        }

        await loading.dismiss();

    }

}
