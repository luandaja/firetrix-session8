// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAijUBbvelzBH5ChnFVeoswxJ-AFD4HK-Y',
    authDomain: 'firetrix-teacher-app.firebaseapp.com',
    databaseURL: 'https://firetrix-teacher-app.firebaseio.com',
    projectId: 'firetrix-teacher-app',
    storageBucket: 'firetrix-teacher-app.appspot.com',
    messagingSenderId: '971482280813'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
