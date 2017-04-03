import {GenericReply} from "../_models/generic-reply";
import {Transaction} from "../_models/transaction";

export class TransactionReply extends GenericReply{
    transactions: Transaction[];
}