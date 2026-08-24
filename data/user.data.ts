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

// --- Registration test data ---
// A fully random user, safe to register fresh each run — Adactin's demo
// backend doesn't require email verification, so faker data is fine here

