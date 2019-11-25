import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

interface Tester {
    name: string;
    rightAnswer: number;
    wrongAnswer: number;
    passed: boolean;
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
    currentWordIndex = 0;

    currentTester: Tester;
    onlineMembers: Tester[] = [
        {
            name: 'Amy',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'Charles',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'David',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'Vivian',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'Jack',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'Novia',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'HanLi',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'Sander',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'TaoLue',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'Joey',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
        },
        {
            name: 'Ginny',
            rightAnswer: 0,
            wrongAnswer: 0,
            passed: false
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
            this.currentTester = undefined;
            Swal.fire('Confrats!', 'You passed this test!', 'success');
        }
        this.nextWords();
    }

    wrongAnswer() {
        this.currentTester.wrongAnswer += 1;
        if (this.testerLastStatus === false) {
            this.currentTester = undefined;
            Swal.fire('Failed', 'You failed this test.', 'error');
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
            'highlighted-menu-item': member === this.currentTester,
            'passed-effect': member.passed,
            'failed-effect ': !member.passed && member.wrongAnswer > 0
        }
    }
}
