// ==UserScript==
// @name         GitLab improvements
// @namespace    http://tampermonkey.net/
// @version      2026-10-13
// @description  
// @author       Michael Engelhard
// @match        https://gitlab.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitlab.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
    /* Makes label select and other dropdowns larger */
    .gl-new-dropdown-container .gl-new-dropdown-inner {
      max-height: 65vh !important;
    }
    @container (width >= 768px) {
      .gl-detail-layout-container-has-sidebar > .gl-detail-layout-sidebar {
        height: 100% !important;
      }
    }
  `)
})();