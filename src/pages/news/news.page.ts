import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    constructor(
        private firebase: AngularFirestore
    ) {
    }

    async ngOnInit() {
        const news  = await this.firebase.collection('news').get().toPromise();
        console.log(news);
    }

}
