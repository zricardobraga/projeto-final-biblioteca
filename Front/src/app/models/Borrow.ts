import { Books } from './Books';
import { Student } from './Students';

export class Borrow {
    _id?: string;
    borrowDate!: Date;
    returnDate!: Date;
    studentBorrow!: Student;
    borrowBooks!: Books[];
    
}