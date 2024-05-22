import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"proyectoprobando-b1f08","appId":"1:1033539466255:web:a32e2ba0341b02cc501f7a","storageBucket":"proyectoprobando-b1f08.appspot.com","apiKey":"AIzaSyA1hkpqI0IijX1zM9Ksx8sd4cyjtypvybY","authDomain":"proyectoprobando-b1f08.firebaseapp.com","messagingSenderId":"1033539466255"})), provideFirestore(() => getFirestore())]
};
