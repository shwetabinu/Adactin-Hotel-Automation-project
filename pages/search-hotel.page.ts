import { Page, Locator } from '@playwright/test';

export class SearchHotelPage {
  readonly page: Page;
  readonly locationDropdown: Locator;
  readonly hotelsDropdown: Locator;
  readonly roomTypeDropdown: Locator;
  readonly numberOfRoomsDropdown: Locator;
  readonly checkInDateInput: Locator;
  readonly checkOutDateInput: Locator;
  readonly adultsPerRoomDropdown: Locator;
  readonly childrenPerRoomDropdown: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly expectedTitle: string = 'Search Hotel'; // Replace with the actual expected title

  constructor(page: Page) {
    this.page = page;
    this.locationDropdown = page.locator('#location');
    this.hotelsDropdown = page.locator('#hotels');
    this.roomTypeDropdown = page.locator('#room_type');
    this.numberOfRoomsDropdown = page.locator('#room_nos');
    this.checkInDateInput = page.locator('#datepick_in');
    this.checkOutDateInput = page.locator('#datepick_out');
    this.adultsPerRoomDropdown = page.locator('#adult_room');
    this.childrenPerRoomDropdown = page.locator('#child_room');
    this.searchButton = page.locator('#Submit');
    this.resetButton = page.locator('#Reset');
  }

  async searchHotel(
    location: string,
    hotel: string,
    roomType: string,
    numberOfRooms: string,
    checkInDate: string,
    checkOutDate: string,
    adultsPerRoom: string,
    childrenPerRoom: string
  ): Promise<void> {
    await this.locationDropdown.selectOption(location);
    await this.hotelsDropdown.selectOption(hotel);
    await this.roomTypeDropdown.selectOption(roomType);
    await this.numberOfRoomsDropdown.selectOption(numberOfRooms);
    await this.checkInDateInput.fill(checkInDate);
    await this.checkOutDateInput.fill(checkOutDate);
    await this.adultsPerRoomDropdown.selectOption(adultsPerRoom);
    await this.childrenPerRoomDropdown.selectOption(childrenPerRoom);
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
    async verifySearchPageTitle(page: any): Promise<boolean> {
    const actualTitle = await page.title();
    return actualTitle === this.expectedTitle;
  }




}

