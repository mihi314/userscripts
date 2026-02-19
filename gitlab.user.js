// ==UserScript==
// @name         GitLab improvements
// @namespace    http://tampermonkey.net/
// @version      2025-10-22
// @description  
// @author       Michael Engelhard
// @match        https://gitlab.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitlab.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // Makes label select and other dropdowns larger
  GM_addStyle(`
    .gl-new-dropdown-container .gl-new-dropdown-inner {
      max-height: 65vh !important;
    }
  `)
})();