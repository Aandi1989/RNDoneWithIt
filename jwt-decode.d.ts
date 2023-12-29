declare module 'jwt-decode' {
    function jwtDecode(token: string): any;
    export = jwtDecode;
  }
  
// without this file occured error in file LoginScreen.js