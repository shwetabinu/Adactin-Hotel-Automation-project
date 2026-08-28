import { Page,Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { PathLike } from 'fs';
import { GuestDetails, validBookingRequest } from '../data/booking.data';

export class BookHotelPage extends BasePage{
    readonly path = '/BookHotel.php';
    private readonly firstNameInput: Locator = this.page.locator('#first_name');;
    private readonly lastNameInput: Locator = this.page.locator('#last_name');
    private readonly addressInput: Locator = this.page.locator('#address');
    private readonly creditCardNumberInput: Locator = this.page.locator('#cc_num');
    private readonly creditCardTypeSelect: Locator = this.page.locator('#cc_type');
    private readonly expiryMonthSelect: Locator = this.page.locator('#cc_exp_month');
    private readonly expiryYearSelect: Locator = this.page.locator('#cc_exp_year');
    private readonly cvvNumberInput: Locator = this.page.locator('#cc_cvv');
    private readonly bookNowButton: Locator = this.page.locator('#book_now');
    private readonly cancelButton: Locator = this.page.locator('#cancel');
    private readonly expectedTitle: string = 'Book Hotel'; // Replace with the actual expected title
    



async bookHotel(guest: GuestDetails
  ): Promise<void> {
    this.page.waitForLoadState('load');
    await this.firstNameInput.fill(guest.firstName);
    await this.lastNameInput.fill(guest.lastName);
    await this.addressInput.fill(guest.billingAddress);
    await this.creditCardNumberInput.fill(guest.creditCardNo);
    await this.creditCardTypeSelect.selectOption(guest.creditCardype)
    await this.expiryMonthSelect.selectOption(guest.creditCardExpiryMonth);
    await this.expiryYearSelect.selectOption(guest.creditCardExpiryYear);
    await this.cvvNumberInput.fill(guest.cvvNo);
    
  }

  async clickOnBookNow(){
    await this.bookNowButton.click();
  }

  async clickOnCancelButton(){
    await this.cancelButton.click();
  }

  async verifyMandatoryMessages(): Promise<boolean>{
    
    const mandatoryFirstNameError = await this.page.getByText('Please Enter your First Name');
    
    const mandatoryLastNameError = await this.page.getByText('Please Enter you Last Name');
    const mandatoryAddressError = await this.page.getByText('Please Enter your Address');
    const mandatoryCCNumberError = await this.page.getByText('Please Enter your 16 Digit Credit Card Number');
    const mandatoryCctypeError = await this.page.getByText('Please Select your Credit Card Type');
    const mandatoryccexpirymonthError = await this.page.getByText('Please Select your Credit Card Expiry Month');
    const mandatorycvvnumberError = await this.page.getByText('Please Enter your Credit Card CVV Number');
   
    const isFirstNameErrorVisible = await mandatoryFirstNameError.isVisible();
    const isLastNameErrorVisible = await mandatoryLastNameError.isVisible();
    const isAddressErrorVisible = await mandatoryAddressError.isVisible();
    const isCCNumberErrorVisible = await mandatoryCCNumberError.isVisible();
    const isCCTypeErrorVisible = await mandatoryCctypeError.isVisible();
    const isCCExpiryErrorVisible = await mandatoryccexpirymonthError.isVisible();
    const isCvvnumberErrorVisible = await mandatorycvvnumberError.isVisible();

    return (isFirstNameErrorVisible && 
        isLastNameErrorVisible && 
        isAddressErrorVisible &&
        isCCNumberErrorVisible &&
        isCCTypeErrorVisible &&
        isCCExpiryErrorVisible &&
        isCvvnumberErrorVisible
     ) ;
       
    
  }

  async verifyMandatoryErrorMessageForInvalidCCExpiry()
  {
    this.page.once('dialog', async (dialog) => {
    // 2. Extract the text message inside the popup
    const message = dialog.message();
    await dialog.accept(); 
      return (message == ' Expiry year cannot be in Past')
    
  });}

  async verifyIncompleteCCError():Promise<boolean>
  {
    const errortextVisible =  this.page.getByText("Please Enter your 16 Digit Credit Card Number");
    const isErrorVisible = await errortextVisible.isVisible();
    return isErrorVisible;
  }
   

  
}