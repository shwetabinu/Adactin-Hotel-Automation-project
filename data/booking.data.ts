// data/booking.data.ts
import { faker } from '@faker-js/faker';
import { addDays, formatForDatePicker } from '../utils/date-helper';
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
  creditCardype: string;
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
 
  const checkIn = faker.date.soon({ days: 7 });
  const checkInModified = formatForDatePicker(checkIn);
  // Adactin rejects a search when check-in and check-out fall on the same day, and
  // faker.date.soon() is inclusive of its reference date - always step at least a day on.
  const checkOut = addDays(checkIn, faker.number.int({ min: 1, max: 3 }));
  const checkOutModified = formatForDatePicker(checkOut);

  return {
    location: 'Sydney',
    hotels: 'Hotel Sunshine',
    roomType: 'Standard',
    numberOfRooms: '1 - One',
    checkInDate: checkInModified,
    checkOutDate: checkOutModified,
    adultsPerRoom: '1 - One',
    childrenPerRoom: '1 - One',
    ...overrides,
  };
}



export function invalidBlankSearchCriteria(overrides: Partial<SearchCriteria> = {}): SearchCriteria {
  const checkIn = faker.date.soon({ days: 7 }).toString();
  
 // const checkOut = faker.date.soon({ days: 3, refDate: checkIn }).toString();

  return {
    location: '- Select Location -',
    hotels: '- Select Hotel -',
    roomType: '- Select Room Type -',
    numberOfRooms: '- Select Number of Rooms -',
    checkInDate: '',
    checkOutDate: '',
    adultsPerRoom: '- Select Adults per Room -',
    childrenPerRoom: '1 - One',
    ...overrides,
  };
}

export function sameCheckInCheckOut(overrides: Partial<SearchCriteria> = {}): SearchCriteria {
  const checkIn = faker.date.soon({ days: 7 });
  const checkInModified = formatForDatePicker(checkIn);
  // const checkOut = faker.date.soon({ days: 3, refDate: checkIn });
  // const checkOutModified = formatForDatePicker(checkOut);
  console.log('')

  return {
    location: 'Sydney',
    hotels: 'Hotel Sunshine',
    roomType: 'Standard',
    numberOfRooms: '1 - One',
    checkInDate: checkInModified,
    checkOutDate: checkInModified,
    adultsPerRoom: '1 - One',
    childrenPerRoom: '1 - One',
    ...overrides,
  };
}

export function pastCheckoutDate(overrides: Partial<SearchCriteria> = {}): SearchCriteria {
  const checkIn = faker.date.soon({ days: 7 });
  const checkInModified = formatForDatePicker(checkIn);
   const pastDate = faker.date.recent({ days: 7 }); 
   const checkOutModified = formatForDatePicker(pastDate);

  return {
    location: 'Sydney',
    hotels: 'Hotel Sunshine',
    roomType: 'Standard',
    numberOfRooms: '1 - One',
    checkInDate: checkInModified,
    checkOutDate: checkOutModified,
    adultsPerRoom: '1 - One',
    childrenPerRoom: '1 - One',
    ...overrides,
  };
}

export function defaultSearchCriteria(overrides: Partial<SearchCriteria> = {}): SearchCriteria {
  const today = new Date();

// Australian/UK Format (DD/MM/YYYY) -> "24/08/2026"
const checkInDate = today.toLocaleDateString('en-GB');
const tomorrow = new Date(today);

// Add exactly 1 day
tomorrow.setDate(today.getDate() + 1);
const checkOutDate = tomorrow.toLocaleDateString('en-GB');
//const checkOut = faker.date.soon({ days: 3, refDate: checkIn }).toString();

  return {
    location: '- Select Location -',
    hotels: '- Select Hotel -',
    roomType: '- Select Room Type -',
    numberOfRooms: '1 - One',
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    adultsPerRoom: '1 - One',
    childrenPerRoom: '- Select Children per Room -',
    ...overrides,
  };
}
// --- Valid guest/payment details ---
export function validGuestDetails(overrides: Partial<GuestDetails> = {}): GuestDetails {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    creditCardNo: '4111111111111111', // standard test Visa number pattern
    creditCardype: 'VISA',
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