import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

declare const sha256: any;
declare const $: any;
interface Tester {
    name: string;
    rightAnswer: number;
    wrongAnswer: number;
    passed: boolean;
    passedCount?: number;
    failedCount?: number;
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
    allWords = require('../../assets/words/main.json');
    currentWordIndex = 0;

    currentTester: Tester;
    onlineMembers: Tester[] = [
        {
            name: 'Amy Zhang',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Charles Yu',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'David Liu',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Vivian Shen',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Jack Chen',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Novia Na',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Han Li',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Sander Li',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'TaoLue Liu',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Joey Li',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        },
        {
            name: 'Ginny Fan',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false,
            passedCount: 0,
        }
    ];

    testerLastStatus = true;
    testStarted = false;

    countDownConfig: CountdownConfig = {
        leftTime: 60,
    };

    youdaoApi = 'http://openapi.youdao.com/api';

    appKey = 'xxxxx';
    key = 'xxxx';
    salt = (new Date()).getTime();
    from = 'en';
    to = 'zh-CHS';

    constructor(private http: HttpClient) {
    }

    ngOnInit() {}

    selectMember(member: Tester) {
        if (member === this.currentTester) {
            this.currentTester = undefined;
            if (!member.passed) {
                this.resetTestStatus(member);
            }
            return;
        }
        this.currentTester = this.resetTestStatus(member);
    }

    resetTestStatus(member: Tester) {
        member.passed = false;
        member.rightAnswer = 0;
        member.wrongAnswer = 0;
        this.testerLastStatus = true;
        this.testStarted = false;
        return member;
    }

    toggleNav() {
        this.sideMenuOpened = !this.sideMenuOpened;
    }

    rightAnswer() {
        this.testerLastStatus = true;
        this.currentTester.rightAnswer += 1;
        if (this.currentTester.rightAnswer === 3) {
            this.testStarted = false;
            this.currentTester.passed = true;
            if (!this.currentTester.passedCount) {
                this.currentTester.passedCount = 0;
            }
            this.currentTester.passedCount += 1;
            console.log(this.currentTester);
            this.currentTester = undefined;
            Swal.fire({
                title: 'Congratulations!',
                text: 'You passed this test!',
                html: `<img width=auto height=150 src="../client/assets/img/bonus.jpg"/>`,
                icon: 'success'
            });
        }
        this.nextWords();
    }

    wrongAnswer() {
        this.currentTester.wrongAnswer += 1;
        if (this.testerLastStatus === false) {
            this.terminateTest('You failed this test.');
        } else {
            this.testerLastStatus = false;
        }

        this.nextWords();
    }

    terminateTest(reason: string) {
        this.testStarted = false;
        if (!this.currentTester.failedCount) {
            this.currentTester.failedCount = 0;
        }
        this.currentTester.failedCount += 1;
        this.currentTester = undefined;
        Swal.fire('Sorry, test failed!', reason, 'error');
        Swal.fire({
            title: 'Sorry, test failed!',
            html: `<img width=auto height=150 src="../client/assets/img/whatsup.jpeg"/>`,
            icon: 'error'
        });
    }

    async nextWords() {
        // await this.translate();
        this.currentWordIndex = this.currentWordIndex + 2 > this.allWords.length ? 0 : this.currentWordIndex + 1;
    }

    startTest() {
        this.testStarted = true;
    }


    truncate = (q: string) => {
        const len = q.length;
        if (len <= 20) {
            return q;
        }
        return q.substring(0, 10) + len + q.substring(len - 10, len);
    }


    // async translate() {
    //     const query = this.allWords[this.currentWordIndex];
    //     const curTime = Math.round(new Date().getTime());
    //     const sign = sha256(this.appKey + this.truncate(query) + this.salt + Math.round(new Date().getTime()) + this.key);

    //     $.ajax({
    //         url: this.youdaoApi,
    //         type: 'post',
    //         dataType: 'jsonp',
    //         data: {
    //             q: query,
    //             appKey: this.appKey,
    //             salt: this.salt,
    //             from: this.from,
    //             to: this.to,
    //             sign,
    //             signType: 'v3',
    //             curTime
    //         },
    //         success: (data) => {
    //             console.log(data);
    //         }
    //     });
    // }

    getClass(member: Tester) {
        return {
            'highlighted-menu-item': member === this.currentTester
        };
    }

    countDownEvent(event: CountdownEvent) {
        if (event.action === 'done') {
            this.terminateTest('Time up!');
        }
    }
}
