import {ApiHandler} from './../api/api-handler.service';
import {Component, OnInit, Inject} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import {AadharData} from '../models/AadharData';
import {environment as ENV} from '../../environments/environment';

@Component({
    selector: 'app-identityverify',
    templateUrl: './identityverify.component.html',
    styleUrls: ['./identityverify.component.css']
})
export class IdentityverifyComponent implements OnInit {
    firstName;
    lastName;
    ref_id;
    mobileNumber = localStorage.getItem('mobileNumber');
    emailId = localStorage.getItem('emailId');
    panNumber = localStorage.getItem('panNumber');
    DoB = localStorage.getItem('DoB');
    aadharData: AadharData;

    homeTown = sessionStorage.getItem('homeTown');
    pinCode = sessionStorage.getItem('pinCode');

    // tslint:disable-next-line: member-ordering
    postData;

    headers = new HttpHeaders({
        'account-id': '2ff5171b030d/4f60fe78-7feb-43eb-b4d8-e48ed4d02669',
        'api-key': '2ef800a8-7826-48bc-8f9a-798b26b12702',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });

    randomString() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    setRefId() {
        this.ref_id = this.randomString();
        console.log(this.ref_id);
    }

    getRefId() {
        return this.ref_id;
    }

    goToUrl(linkVariable): void {
        this.document.location.href = linkVariable;
    }

    constructor(private apiHandler: ApiHandler, @Inject(DOCUMENT) private document: Document) {
    }

    ngOnInit(): void {
        this.aadharData = JSON.parse(sessionStorage.getItem('aadharData'));
        const nameArr = this.aadharData.uidData.poi.name.split(' ');
        if (nameArr.length === 1) {
            this.firstName = nameArr[0];
            this.lastName = '';
        } else if (nameArr.length === 2) {
            this.firstName = nameArr[0];
            this.lastName = nameArr[1];
        } else if (nameArr.length === 3) {
            this.firstName = nameArr[0];
            this.lastName = nameArr[2];
        }
        this.setPostData();
        this.setRefId();
        console.log('Inside OnInit', this.ref_id);
    }

    setPostData() {
        this.postData = {
            'reference_id': this.randomString(),
            'config': {
                'id': 'e45ffd99-7e45-4339-bc5f-83909dc2aaa2'
            },
            'data': {
                'name': {
                    'first_name': this.firstName,
                    'last_name': this.lastName
                },
                'email_ids': [],
                'dob': this.DoB,
                'mobile_numbers': [this.mobileNumber],
                'ind_nsdl_details': {
                    'id_number': this.panNumber,
                    'name': {
                        'first_name': this.firstName,
                        'middle_name': '',
                        'last_name': this.lastName
                    }
                },
                'ind_driving_license_details': {}
            },
            'payload': {
                'security_questions': [
                    {
                        'question': 'What is your home town.',
                        'answer': this.homeTown
                    },
                    {
                        'question': 'What is your Pin code',
                        'answer': this.pinCode
                    }
                ]
            }
        };
    }

    callFunction(event, post) {
        console.log(post);
    }


    clickFunction() {
        console.log('Inside Click function', this.ref_id);
        console.log('post data', this.postData);
        this.apiHandler.callApi(ENV.IDFY + '/sync/profiles', 'post', this.postData, this.headers).subscribe(data => {
            console.log(data);
            console.log('data.profile_id', data.profile_id);
            localStorage.setItem('profileId', data.profile_id);
            // store profile Id in local storage.
            window.open(data.capture_link + '&redirect_uri=http://localhost:4200/verification-status', '_blank');
        });
    }
}
