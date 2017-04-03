export class User {

    loginId: string;
    password: string;
    email: string;
    balance: string = '100.00';
    lastLoginDate: string;

    userData: {
        name: string;
        surname: string;
        patronymic: string;
        passport: string;
        birthDay: string;
        gender: string;
        address: string;
        city: string;
        country: string;
        telephone: string;
    }

}