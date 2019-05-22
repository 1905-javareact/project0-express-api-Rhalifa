import { Reimbursement } from "../models/reimbursement";
import { ReimbursementDTO } from "../dtos/reimbursement.dto";

export function sqlUserReimbursementToJsUserReimbursement(sqluserReimbursement:ReimbursementDTO):Reimbursement{
     return new Reimbursement(sqluserReimbursement.reimbursement_id, sqluserReimbursement.reimbursement_author, 
          sqluserReimbursement.reimbursement_amount, sqluserReimbursement.date_submitted, sqluserReimbursement.date_resolved, 
          sqluserReimbursement.description, sqluserReimbursement.resolver, sqluserReimbursement.status,
          sqluserReimbursement.type_reimb)
}