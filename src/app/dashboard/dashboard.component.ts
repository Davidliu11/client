import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

    constructor() {
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
            this.currentTester.passed = true;
            if (!this.currentTester.passedCount) {
                this.currentTester.passedCount = 0;
            }
            this.currentTester.passedCount += 1;
            console.log(this.currentTester);
            this.currentTester = undefined;
            Swal.fire('Congratulation!', 'You passed this test!', 'success');
        }
        this.nextWords();
    }

    wrongAnswer() {
        this.currentTester.wrongAnswer += 1;
        if (this.testerLastStatus === false) {
            if (!this.currentTester.failedCount) {
                this.currentTester.failedCount = 0;
            }
            this.currentTester.failedCount += 1;
            this.currentTester = undefined;
            Swal.fire('Sorry!', 'You failed this test.', 'error');
        } else {
            this.testerLastStatus = false;
        }

        this.nextWords();
    }

    nextWords() {
        this.currentWordIndex = this.currentWordIndex + 2 > this.allWords.length ? 0 : this.currentWordIndex + 1;
    }

    startTest() {
        this.testStarted = true;
    }

    getClass(member: Tester) {
        return {
            'highlighted-menu-item': member === this.currentTester
        }
    }
}
