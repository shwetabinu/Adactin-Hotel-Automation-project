import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { SearchCriteria } from '../data/booking.data';


export class SearchHotelPage extends BasePage{
  readonly path = 'SearchHotel.php'
  private readonly locationDropdown: Locator = this.page.locator('#location');
  private readonly hotelsDropdown: Locator = this.page.locator('#hotels');
  private readonly roomTypeDropdown: Locator = this.page.locator('#room_type');
  private readonly numberOfRoomsDropdown: Locator = this.page.locator('#room_nos');
  private readonly checkInDateInput: Locator = this.page.locator('#datepick_in');
  private readonly checkOutDateInput: Locator = this.page.locator('#datepick_out');
  private readonly adultsPerRoomDropdown: Locator = this.page.locator('#adult_room');
  private readonly childrenPerRoomDropdown: Locator = this.page.locator('#child_room');
  private readonly searchButton: Locator = this.page.locator('#Submit');
  private readonly resetButton: Locator = this.page.locator('#Reset');;
  readonly resultsTable: Locator = this.page.locator(`//tr[td[contains(., 'Select')]]//td[1]//table`).nth(1);
  private readonly expectedTitle: string = 'Search Hotel'; // Replace with the actual expected title


  async searchHotel(
    criteria: SearchCriteria
  ): Promise<void> {
    await this.locationDropdown.selectOption(criteria.location);
    console.log('Location selected is' + criteria.location)
    await this.hotelsDropdown.selectOption(criteria.hotels);
    console.log('Hotel selected is'+criteria.hotels);
    await this.roomTypeDropdown.selectOption(criteria.roomType);
    await this.numberOfRoomsDropdown.selectOption(criteria.numberOfRooms);
    await this.checkInDateInput.fill(criteria.checkInDate);
    console.log('checkin date is'+ criteria.checkInDate);
    await this.checkOutDateInput.fill(criteria.checkOutDate);
    console.log('checkout date is' + criteria.checkOutDate);
    await this.adultsPerRoomDropdown.selectOption(criteria.adultsPerRoom);
    await this.childrenPerRoomDropdown.selectOption(criteria.childrenPerRoom);
    
  }

  async searchHotelMandatory(){
     await this.locationDropdown.selectOption("Sydney");
  }

  async clickOnSubmit(){
    await this.searchButton.click();
  }

  
  async resetForm(){
    await this.resetButton.click();
  }

  async verifyResettedForm(criteria: SearchCriteria
  ): Promise<boolean> {
    const actualLocationDropdown = await this.locationDropdown.locator('option:checked').innerText();
    console.log('actual location dropdown is'+actualLocationDropdown);
    
    const actualHotelsdropdown = await this.hotelsDropdown.locator('option:checked').innerText();
    console.log('actual hotels dropdown is '+ actualHotelsdropdown);
    
    const actualroomTypeDropDown = await this.roomTypeDropdown.locator('option:checked').innerText();
    console.log('actual room type dropdown is '+ actualroomTypeDropDown);
    
    const actualnumberOfRoomsDropDown = await this.numberOfRoomsDropdown.locator('option:checked').innerText();
    console.log('actual number of rooms dropdown is '+ actualnumberOfRoomsDropDown);
   
    await this.checkInDateInput.waitFor({ state: 'visible', timeout: 5000 });

    const actualcheckInDateInput = await this.checkInDateInput.inputValue();
    console.log('actual checkin date input is '+actualcheckInDateInput);
    
    await this.checkOutDateInput.waitFor({ state: 'visible', timeout: 5000 });

    const actualcheckOutDateInput = await this.checkOutDateInput.inputValue();
    console.log('actual checkout date input is '+actualcheckOutDateInput);
    
    const actualadultsPerRoomDropdown = await this.adultsPerRoomDropdown.locator('option:checked').innerText();
    console.log('actual adults per room input is '+ actualadultsPerRoomDropdown);
    
    const actualchildrenPerRoomDropdown = await this.childrenPerRoomDropdown.locator('option:checked').innerText()
    console.log('actual children per room input is '+ actualchildrenPerRoomDropdown);


    return(
      actualHotelsdropdown.trim() == criteria.hotels && 
      actualLocationDropdown.trim() == criteria.location && 
      actualroomTypeDropDown.trim() == criteria.roomType &&
      actualnumberOfRoomsDropDown.trim() == criteria.numberOfRooms &&
      actualcheckInDateInput.trim() == criteria.checkInDate &&
      actualcheckOutDateInput.trim() == criteria.checkOutDate &&
      actualadultsPerRoomDropdown.trim() == criteria.adultsPerRoom &&
      actualchildrenPerRoomDropdown.trim() == criteria.childrenPerRoom
  
    )
      
    

  }


  async verifySearchResultCount(rowCount: number): Promise<boolean>{
    //logic to verify search results table contain values based on the search criteria
    const tableRows = this.page.locator('table tbody').getByRole('row');

    // Assert that the table is not empty
    const rowCountValue = await tableRows.count();
    
    return rowCountValue === rowCount;
  }

  async verifyMandatoryErrorMessages(){
    // Logic to verify mandatory error messages for each field
    // const locationError = this.page.locator('location_span');
    // const numberOfRoomsError =  this.page.locator('#num_room_span');
    // const checkInDateError =  this.page.locator('#checkin_span');
    // const checkOutDateError =  this.page.locator('#checkout_span');
    // const adultsPerRoomError =  this.page.locator('#adults_room_span');
    // const childrenPerRoomError =  this.page.locator('#child_room_span');
    
    const isLocationErrorVisible = await this.page.locator('#location_span').isVisible();
    console.log('Location error visible is'+ isLocationErrorVisible);
    const isNumberOfRoomsErrorVisible = await this.page.locator('#num_room_span').isVisible();
    console.log('number of rooms error is'+ isNumberOfRoomsErrorVisible);
    const isCheckInDateErrorVisible = await this.page.locator('#checkin_span').isVisible();
    console.log('checkin date error is'+ isCheckInDateErrorVisible);
    const isCheckOutDateErrorVisible = await this.page.locator('#checkout_span').isVisible();
    console.log('checkout date error is'+ isCheckOutDateErrorVisible);
    const isAdultsPerRoomErrorVisible = await this.page.locator('#adults_room_span').isVisible();
   // const isChildrenPerRoomErrorVisible = await childrenPerRoomError.isVisible();
     console.log('adults per room error is'+ isCheckOutDateErrorVisible);
    return (
      isLocationErrorVisible &&
      isNumberOfRoomsErrorVisible &&
      isCheckInDateErrorVisible &&
      isCheckOutDateErrorVisible &&
      isAdultsPerRoomErrorVisible
      //isChildrenPerRoomErrorVisible
    ); 
    
  
  }

  async verifyMandatoryErrorMessageForSameCheckinCheckout(){
   // const errormessage = this.page.locator('#checkin_span');
   
    const isErrorMessageVisible = await this.page.locator('#checkin_span').isVisible();
     console.log("error message for same checkin checkout is"+ isErrorMessageVisible)
    return isErrorMessageVisible;
  }

  async verifyMandatoryErrorMessageForPastCheckout(){
    //const errormessage = this.page.locator('#checkout_span');
    const isErrorMessageVisible = await this.page.locator('#checkout_span').isVisible();
    console.log("error message for checkout past"+isErrorMessageVisible);
    return isErrorMessageVisible;
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

