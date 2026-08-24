//import { expect } from '@playwright/test';
import { test, expect } from '../../fixtures';

import { ElementUtilities } from '../../utils/element-utilities';
import { SearchHotelPage } from '../../pages/search-hotel.page';
import { validSearchCriteria } from '../../data/booking.data';

  test('To verify if the user is able to search hotels with valid criteria', async ({ searchHotelPage , selectHotelPage}) => {
    
    //Navigating to logged in search hotel page 
    await searchHotelPage.goto();

    //Verifying that navigation bar is visible
    expect(await searchHotelPage.navBar.isVisible()).toBe(true);
    
    //Verifying page title is correct
    expect(searchHotelPage.verifySearchPageTitle()).toBeTruthy;

    //Loading the search criteria from Test data
    const search = validSearchCriteria();
    await searchHotelPage.searchHotel(search);

    // Verify that the search results table contains values based on the search criteria
    await expect(searchHotelPage.resultsTable).toBeVisible();
    //expect(await searchHotelPage.hasResults()).toBe(true); 

  });

  

  
