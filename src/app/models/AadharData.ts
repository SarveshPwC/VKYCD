export interface Poi {
    dob: string;
    emailHash: string;
    mobileHash: string;
    gender: string;
    name: string;
}

export interface Poa {
    careOf: string;
    country: string;
    district: string;
    house: string;
    landmark: string;
    location: string;
    pinCode: string;
    state: string;
    street: string;
    villageTownCity: string;
}

export interface UidData {
    poi: Poi;
    poa: Poa;
    photo: string;
}

export interface AadharData {
    uidData: UidData;
}


