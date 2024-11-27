export type UserRole = 'admin' | 'librarian' | 'member' | 'volunteer' | 'student' | 'child';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  status: 'available' | 'borrowed' | 'maintenance';
  location: string;
  coverImage?: string;
}

export interface Loan {
  id: string;
  bookId: string;
  userId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'active' | 'returned' | 'overdue';
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'workshop' | 'talk' | 'meeting';
  capacity: number;
  registeredAttendees: string[];
  organizer: string;
}