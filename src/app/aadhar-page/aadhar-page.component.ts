import {Component, OnInit} from '@angular/core';
import {ApiHandler} from '../api/api-handler.service';
import {HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment as ENV} from '../../environments/environment';

@Component({
    selector: 'app-aadhar-page',
    templateUrl: './aadhar-page.component.html',
    styleUrls: ['./aadhar-page.component.css']
})
export class AadharPageComponent implements OnInit {
    fileToUpload: any;
    fileUploadError = false;
    fileName: string;
    aadharVerificationFormGroup: FormGroup;
    showLoader = false;

    constructor(private apiHandler: ApiHandler, private router: Router) {
    }

    ngOnInit(): void {
        this.aadharVerificationFormGroup = new FormGroup({
            fileUploadFormControl: new FormControl('', [Validators.required]),
            shareCodeFormControl: new FormControl('', {validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4)]})
        });
    }

    visitAadharPortal() {
        window.open('https://resident.uidai.gov.in/offline-kyc', '_blank');
    };

    uploadAadharXml(event) {
        const file = event.target.files[0] as File;
        const isValidFile = this.validateFileType(file.name);
        if (!isValidFile) {
            this.removeFile();
            this.fileUploadError = true;
            return;
        }
        const aadhar = {
            flag: true,
            file: event
        };

        this.fileToUpload = file;
        this.fileName = this.fileToUpload.name;
    }

    private validateFileType(fileName: string): boolean {
        switch (fileName.split('.').pop()) {
            case 'zip':
            case 'zipx':
                return true;
        }
        return false;
    }

    removeFile() {
        this.fileToUpload = null;
        this.fileName = '';
    }


    oSubmitAadhar() {
        this.showLoader = true;
        const formData: FormData = new FormData();
        formData.append('aadharZipFile', this.fileToUpload);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('code', this.aadharVerificationFormGroup.get('shareCodeFormControl').value);
        httpHeaders = httpHeaders.set('customerId', '2');
        this.apiHandler.callApi(ENV.KYC_AADHAR + '/v1/ekyc/aadhaarDetails', 'post', formData, httpHeaders).subscribe(data => {
            console.log(data);
            sessionStorage.setItem('aadharData', JSON.stringify(data));
            sessionStorage.setItem('pinCode', JSON.stringify(data.uidData.poa.pinCode));
            sessionStorage.setItem('homeTown', JSON.stringify(data.uidData.poa.district));
            this.showLoader = false;
            this.router.navigate(['/identity-verify']);
        });
    }
}
