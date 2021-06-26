import { Books} from './Books';
import { Student } from './Student';

export class Borrow {
    
    _id?: string;
    returnDate!: Date;
    studentBorrow!: Student[];
    booksBorrow!: Books[];
    
}