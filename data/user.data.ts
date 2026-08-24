// data/users.data.ts
import { faker } from '@faker-js/faker';

export interface LoginCredentials {
  username: string;
  password: string;
}

// --- Negative-login test data ---
// Used in login.spec.ts to verify validation without touching the real test account
export const invalidCredentials: LoginCredentials[] = [
  { username: '', password: '' },
  { username: 'invalidUser123', password: 'invalidPass123' },
  { username: '', password: 'somePassword' },
  { username: 'someUsername', password: '' },
];
