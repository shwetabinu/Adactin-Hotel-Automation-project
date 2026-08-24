// data/booking.data.ts
import { faker } from '@faker-js/faker';

export interface SearchCriteria {
  location: string;
  hotels: string;
  roomType: string;
  numberOfRooms: string;
  checkInDate: string;
  checkOutDate: string;
  adultsPerRoom: string;
  childrenPerRoom: string;
}

export interface GuestDetails {
  firstName: string;
  lastName: string;
  creditCardNo: string;
  creditCardExpiryMonth: string;
  creditCardExpiryYear: string;
  cvvNo: string;
  billingAddress: string;
}

export interface BookingRequest {
  search: SearchCriteria;
  guest: GuestDetails;
}

// --- Standard valid search criteria ---
export function validSearchCriteria(overrides: Partial<SearchCriteria> = {}): SearchCriteria {
  const checkIn = faker.date.soon({ days: 7 }).toString();
  
  const checkOut = faker.date.soon({ days: 3, refDate: checkIn }).toString();

  return {
    location: 'Sydney',
    hotels: 'Hotel Sunshine',
    roomType: 'Standard',
    numberOfRooms: '1 - One',
    checkInDate: checkIn,
    checkOutDate: checkOut,
    adultsPerRoom: '1 - One',
    childrenPerRoom: '1 - One',
    ...overrides,
  };
}

// --- Valid guest/payment details ---
export function validGuestDetails(overrides: Partial<GuestDetails> = {}): GuestDetails {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    creditCardNo: '4111111111111111', // standard test Visa number pattern
    creditCardExpiryMonth: '12',
    creditCardExpiryYear: String(new Date().getFullYear() + 2),
    cvvNo: faker.finance.creditCardCVV(),
    billingAddress: faker.location.streetAddress(),
    ...overrides,
  };
}

// --- Defect-linked invalid variants (tie back to build.config.ts DEF-00x) ---

/** Feeds DEF-001: booking confirmed despite an invalid/reversed date range */
export function invalidDateRangeCriteria(): SearchCriteria {
  return validSearchCriteria({
    checkInDate: faker.date.soon({ days: 3 }).toString(),
    checkOutDate: faker.date.recent({ days: 3 }).toString(), // checkout BEFORE checkin
  });
}

/** Feeds DEF-003: booking confirmed despite an already-expired card */
export function expiredCreditCardDetails(): GuestDetails {
  return validGuestDetails({
    creditCardExpiryMonth: '01',
    creditCardExpiryYear: String(new Date().getFullYear() - 1), // already expired
  });
}

// --- Convenience: a full ready-to-submit booking ---
export function validBookingRequest(): BookingRequest {
  return {
    search: validSearchCriteria(),
    guest: validGuestDetails(),
  };
}