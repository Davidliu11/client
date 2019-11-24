import { Component, OnInit } from '@angular/core';

interface Tester {
    name: string;
    rightAnswer: number;
    wrongAnswer: number;
    failed: boolean;
}
declare var require: any;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
    sideMenuOpened = true;
    currentTest: string;
    allWords = require('./words.json');
    currentWord = this.allWords[0];

    currentTester: Tester;
    onlineMembers: Tester[] = [
        {
            name: 'Amy',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'Charles',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'David',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'Vivian',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'Jack',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'Novia',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'HanLi',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'Sander',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'TaoLue',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'Joey',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        },
        {
            name: 'Ginny',
            rightAnswer: 0,
            wrongAnswer: 0,
            failed: false
        }
    ];

    constructor() {
    }

    ngOnInit() {}

    selectMember(member: Tester) {
        this.currentTester = member;
    }
}
