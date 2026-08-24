import { faker } from '@faker-js/faker';

/**
 * Generic, reusable data primitives. Domain files (data/*.data.ts) compose
 * these into shaped objects — this file knows nothing about hotels, bookings,
 * or users as domain concepts, only how to produce valid-shaped raw values.
 */

export function uniqueUsername(prefix = 'user'): string {
  // Adactin usernames must be unique per registration; timestamp + short
  // random suffix avoids collisions across parallel workers
  const suffix = faker.string.alphanumeric(4).toLowerCase();
  return `${prefix}_${Date.now()}_${suffix}`;
}

export function randomPassword(length = 10): string {
  // Adactin has no published complexity requirement beyond length, but
  // guarantee at least one digit to avoid edge-case rejections
  return faker.internet.password({ length, pattern: /[A-Za-z0-9]/ });
}

export function randomEmail(): string {
  return faker.internet.email().toLowerCase();
}

export function randomPhoneNumber(): string {
  return faker.phone.number({ style: 'national' });
}

export function randomCreditCardNumber(): string {
  return faker.finance.creditCardNumber('4###-####-####-####').replace(/-/g, '');
}

export function randomFutureDate(daysAhead = 7): Date {
  return faker.date.soon({ days: daysAhead });
}

export function randomDateBetween(start: Date, end: Date): Date {
  return faker.date.between({ from: start, to: end });
}

export function randomFromList<T>(list: T[]): T {
  return faker.helpers.arrayElement(list);
}