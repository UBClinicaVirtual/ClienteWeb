export class MedicalRecords {

    constructor (
        public id: string,
        public description: string,
        public clinic_id:string,
        public clinic_name:string,
        public speciality_id:string,
        public speciality_name:string,
        public hcp_id: string,
        public hcp_first_name: string,
        public hcp_last_name: string,
        public appointment_id: string,
        public appointment_date: string,
        public record_date: string
       
    ) { }

}