export class Hcps {

    constructor (
        public id: string,
        public created_at: string,
        public updated_at: string,
        public first_name: string,
        public last_name: string,
        public identification_number: string,
        public birth_date: string,
        public gender_id: string,
        public user_id: string,
        public register_number: string,
        public address: string,
        public phone: string,
        public speciality?:string
       
    ) { }

}