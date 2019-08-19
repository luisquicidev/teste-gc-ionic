import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
    private news: any[];

    constructor(
        private firebase: AngularFirestore,
        private router: Router
    ) {
    }

    async ngOnInit() {
        this.firebase.collection('news').valueChanges().subscribe(news => {
            this.news = news;
        });
    }

    goTo(s: string) {
        this.router.navigate([s]);
    }
}
