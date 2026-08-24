import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { SearchCriteria } from '../data/booking.data';

export class SearchHotelPage extends BasePage{
  readonly path = '/SearchHotel.php'
  private readonly locationDropdown: Locator = this.page.locator('#location');;
  private readonly hotelsDropdown: Locator = this.page.locator('#hotels');;
  private readonly roomTypeDropdown: Locator = this.page.locator('#room_type');;
  private readonly numberOfRoomsDropdown: Locator = this.page.locator('#room_nos');;
  private readonly checkInDateInput: Locator = this.page.locator('#datepick_in');;
  private readonly checkOutDateInput: Locator = this.page.locator('#datepick_out');;
  private readonly adultsPerRoomDropdown: Locator = this.page.locator('#adult_room');;
  private readonly childrenPerRoomDropdown: Locator = this.page.locator('#child_room');;
  private readonly searchButton: Locator = this.page.locator('#Submit');;
  private readonly resetButton: Locator = this.page.locator('#Reset');;
  readonly resultsTable: Locator = this.page.locator(`//tr[td[contains(., 'Select')]]//td[1]//table`).nth(1);
  private readonly expectedTitle: string = 'Search Hotel'; // Replace with the actual expected title


  async searchHotel(
    criteria: SearchCriteria
  ): Promise<void> {
    await this.locationDropdown.selectOption(criteria.location);
    await this.hotelsDropdown.selectOption(criteria.hotels);
    await this.roomTypeDropdown.selectOption(criteria.roomType);
    await this.numberOfRoomsDropdown.selectOption(criteria.numberOfRooms);
    await this.checkInDateInput.fill(criteria.checkInDate);
    await this.checkOutDateInput.fill(criteria.checkOutDate);
    await this.adultsPerRoomDropdown.selectOption(criteria.adultsPerRoom);
    await this.childrenPerRoomDropdown.selectOption(criteria.childrenPerRoom);
    await this.searchButton.click();
  }

  async resetForm(){
    await this.resetButton.click();
  }

  async verifySearchResultCount(rowCount: number): Promise<boolean>{
    //logic to verify search results table contain values based on the search criteria
    const tableRows = this.page.locator('table tbody').getByRole('row');

    // Assert that the table is not empty
    const rowCountValue = await tableRows.count();
    
    return rowCountValue === rowCount;
  }

  async verifyMandatoryErrorMessages(): Promise<boolean> {
    // Logic to verify mandatory error messages for each field
    const locationError = this.page.locator('location_span');
    const numberOfRoomsError = this.page.locator('#num_room_span');
    const checkInDateError = this.page.locator('#checkin_span');
    const checkOutDateError = this.page.locator('#checkout_span');
    const adultsPerRoomError = this.page.locator('#adults_room_span');
    const childrenPerRoomError = this.page.locator('#child_room_span');

    const isLocationErrorVisible = await locationError.isVisible();
    const isNumberOfRoomsErrorVisible = await numberOfRoomsError.isVisible();
    const isCheckInDateErrorVisible = await checkInDateError.isVisible();
    const isCheckOutDateErrorVisible = await checkOutDateError.isVisible();
    const isAdultsPerRoomErrorVisible = await adultsPerRoomError.isVisible();
    const isChildrenPerRoomErrorVisible = await childrenPerRoomError.isVisible();

    return (
      isLocationErrorVisible &&
      isNumberOfRoomsErrorVisible &&
      isCheckInDateErrorVisible &&
      isCheckOutDateErrorVisible &&
      isAdultsPerRoomErrorVisible &&
      isChildrenPerRoomErrorVisible
    ); 
    
  
  }
    async verifySearchPageTitle() {
    const actualTitle = await this.page.title();
    console.log('page title is'+ actualTitle);
    if(actualTitle == this.expectedTitle)
      return true;
   else
    return false;
  }




}

