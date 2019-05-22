export class Reimbursement {

    reimbursement_id: number
    reimbursement_author: number
    reimbursement_amount: number
    date_submitted: number
    date_resolved: number
    description: string
    resolver: number
    status: number
    type_reimb: number

    constructor(reimbursement_id: number, reimbursement_author: number, reimbursement_amount: number, date_submitted: number,
        date_resolved: number, description: string, resolver: number, status: number, type_reimb: number) {

            this.reimbursement_id = reimbursement_id
            this.reimbursement_author = reimbursement_author
            this.reimbursement_amount = reimbursement_amount
            this.date_submitted = date_submitted
            this.date_resolved = date_resolved
            this.description = description
            this.resolver = resolver
            this.status = status
            this.type_reimb = type_reimb
    }
    
}