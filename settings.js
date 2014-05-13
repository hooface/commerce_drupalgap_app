window.localStorage.clear();

/* Specify DrupalGap Mobile Application Settings Here */

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/
 
/* Drupal Paths */
 
// Site Path (do not use a trailing slash)
Drupal.settings.site_path = 'http://localhost/commerce'; // e.g. http://www.example.com

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Public Files Directory Path
Drupal.settings.file_public_path = 'sites/default/files';

// The Default Language Code
Drupal.settings.language_default = 'und';

/* Drupal Caching */

// Set to true to enable local storage caching.
Drupal.settings.cache.entity.enabled = false;
Drupal.settings.cache.views.enabled = false;

// Number of seconds before cached copy expires. Set to 0 to cache forever, set
// to 60 for one minute, etc.
Drupal.settings.cache.entity.expiration = 3600;
Drupal.settings.cache.views.expiration = 3600;


/*********************|
 * DrupalGap Settings |
 *********************/

/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = 'Commerce DrupalGap';
 
// App Front Page
//drupalgap.settings.front = 'dashboard';
//drupalgap.settings.front = 'node/33';
drupalgap.settings.front = 'cart';

// Theme
drupalgap.settings.theme = 'easystreet3';

// Logo
drupalgap.settings.logo = 'themes/easystreet3/images/drupalgap.jpg';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
  loading: {
    text: 'Loading...',
    textVisible: true,
    theme: 'b'
  },
  saving: {
    text: 'Saving...',
    textVisible: true,
    theme: 'b'
  },
  deleting: {
    text: 'Deleting...',
    textVisible: true,
    theme: 'b'
  }
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

/** Contributed Modules - www/app/modules **/

Drupal.modules.contrib['commerce'] = {};

/** Custom Modules - www/app/modules/custom **/

Drupal.modules.custom['example'] = {};

/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {}; // Do not remove this line.

// User Menu Anonymous
drupalgap.settings.menus['user_menu_anonymous'] = {
  links:[
    {
      title: 'Login',
      path: 'user/login',
      options: {
        attributes: {
          'data-theme': 'b'
        }
      }
    },
    {
      title: 'Register',
      path: 'user/register',
      options: {
        attributes: {
          'data-theme': 'b'
        }
      }
    }
  ]
};

// User Menu Authenticated
drupalgap.settings.menus['user_menu_authenticated'] = {
  links:[
    {
      title: 'My Account',
      path: 'user',
      options: {
        attributes: {
          'data-theme': 'b'
        }
      }
    },
    {
      title: 'Logout',
      path: 'user/logout',
      options: {
        attributes: {
          'data-theme': 'b'
        }
      }
    }
  ]
};

// Main Menu
drupalgap.settings.menus['main_menu'] = {
  links:[
    { title: 'To carry', path: 'collection/carry/all' },
    { title: 'To drink with', path: 'collection/drink/all' },
    { title: 'To geek out', path: 'collection/geek/all' },
    { title: 'To wear', path: 'collection/wear/all' }
  ]
};

/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {}; // Do not remove this line.

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.easystreet3 = {
  header:{
    title:{}
  },
  navigation:{
    user_menu_anonymous:{
      roles:{
        value:['anonymous user'],
        mode:'include',
      }
    },
    user_menu_authenticated:{
      roles:{
        value:['authenticated user'],
        mode:'include',
      }
    }
  },
  sub_navigation:{
    main_menu:{ },
    /*primary_local_tasks:{},*/
  },
  content:{
    commerce_cart: {
      pages: {
        mode: 'exclude',
        value: ['cart']
      }
    },
    messages: {},
    main:{}
  },
  footer:{
    powered_by:{}
  }
};

/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {}; // Do not remove this line.

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
  links:[
    /* Home Button */
    {
      title:'Home',
      path:'',
      options:{
        attributes:{
          "data-icon":"home",
          "class":"ui-btn-left"
        }
      },
      pages:{
        value:[''],
        mode:"exclude"
      }
    },
    /* Back Button */
    {
      title:'Back',
      options:{
        attributes:{
          "data-icon":"back",
          "class":"ui-btn-right",
          "onclick":"javascript:drupalgap_back();"
        }
      },
      pages:{
        value:[''],
        mode:"exclude"
      }
    }
  ]
};

/*********|
 * Camera |
 **********/
drupalgap.settings.camera = {
  quality: 50
};

/**************|
 * Development |
 **************/

// Debug
//   PhoneGap 3.0.0 and above note, you must install a plugin to see console
//   log messages. See the 'Debug console' section here:
//   http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface
Drupal.settings.debug = true; /* Set to true to see console.log debug
                                  information. Set to false when publishing
                                  app! */

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

