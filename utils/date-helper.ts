/**
 * Date formatting/arithmetic for Adactin's date fields. Page objects call
 * these when filling date pickers — keeps format assumptions in one place
 * so a UI format change is a one-file fix, not a hunt through page objects.
 */

export function formatForDatePicker(date: Date): string {
  // Adactin's check-in/check-out fields expect dd/MM/yyyy
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function isDateRangeValid(checkIn: Date, checkOut: Date): boolean {
  // used by tests asserting expected validation behavior, not by the app itself
  return checkOut.getTime() > checkIn.getTime();
}

export function daysBetween(checkIn: Date, checkOut: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((checkOut.getTime() - checkIn.getTime()) / msPerDay);
}

export function today(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}