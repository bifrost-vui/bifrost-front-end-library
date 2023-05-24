import $ from 'jquery';
import { clearSearchFieldInit } from './clear-field';

$(function () {
    // Variables
    const inputSearchSelector = '.js-bf-input-search';
    const searchInput = $(inputSearchSelector);
    const hasClearButton = searchInput.hasClass('has-button-clear');

    // Call functions for the first time
    if (hasClearButton) clearSearchFieldInit();
});
