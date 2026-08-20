import { expect } from '@playwright/test';
import { test } from '../../fixtures/page-fixtures';
import { ElementUtilities } from '../../utils/element-utilities';
import { SearchHotelPage } from '../../pages/search-hotel.page';


  // test('To verify if the user is able to search hotels with valid criteria', async ({ loginPage , searchHotelPage }) => {
  //  //verify page title
   

  //   // Create an instance of the SearchHotelPage
  //   const searchHotelPage = new SearchHotelPage(loginPage.page);

  //   const isTitleCorrect = await searchHotelPage.verifySearchPageTitle(loginPage.page);
  //   await expect(isTitleCorrect).toBe(true);
  //   // Perform the search with valid criteria
  //   await searchHotelPage.searchHotel('Sydney', 'Hotel Creek', 'Standard', '1 - One', '11/12/2028','13/12/2028','1 - One','1 - One'  );

  //   // Verify that the search results table contains values based on the search criteria
  //   const isSearchResultValid = await searchHotelPage.verifySearchResultCount(1);
  //   console.log('Search Result Valid:', isSearchResultValid);
  //   await expect(isSearchResultValid).toBe(true);   

  // });
