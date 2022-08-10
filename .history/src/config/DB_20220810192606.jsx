'use strict';

import Dexie from 'dexie';

export const db = new Dexie('museumDb');
db.version(1).stores({
    logins: '++id, name, email, password, loggedAt'
});
