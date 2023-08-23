import $ from 'jquery';
import { throttle } from '../../../js/utils/debounce-throttle';

// Variables
const inputSearchSelector = '.js-bf-input-search';
const inputSearchClearButtonSelector = '.js-bf-input-search-clear-button';

// Toggle Button Visibility
const toggleButtonVisibility = () => {
    // Variables
    const button = $(inputSearchClearButtonSelector);
    const searchInput = $(inputSearchSelector);
    const searchInputValue = searchInput[0].value;

    // If the length of the search field value is higher than 0,
    // then we make the button visible,
    // if not, we hide it
    if (searchInputValue.length > 0) {
        button.removeClass('d-none');
        button.addClass('bf-visible');
    } else {
        button.addClass('d-none');
        button.removeClass('bf-visible');
    }
};

// Clear search field data
const clearSearchFieldData = () => {
    // Variables
    const searchInput = $(inputSearchSelector);

    // Remove data inserted in the field
    searchInput[0].value = '';

    // Move the focus on the input
    searchInput.trigger('focus');
};

/* ------------
    EXPORTS
------------ */

// Clear search input field
export const clearSearchFieldInit = () => {
    // Variables
    const searchInput = $(inputSearchSelector);
    const button = $(inputSearchClearButtonSelector);

    // On Button Click
    button.on('click', () => {
        clearSearchFieldData();
        toggleButtonVisibility();
    });

    // On Input KeyUp
    searchInput.on(
        'keyup',
        throttle(() => toggleButtonVisibility())
    );

    // Init after load
    toggleButtonVisibility();
};
