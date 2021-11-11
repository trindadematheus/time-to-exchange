import React from 'react'
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import { Database } from '@nozbe/watermelondb';
import Toast from 'react-native-toast-message';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Routes from './routes'
import schema from './database/schema';
import CoinSchedules from './database/models/CoinSchedules';

const adapter = new SQLiteAdapter({
  dbName: 'aperam',
  schema: schema,
});

const database = new Database({
  adapter,
  modelClasses: [CoinSchedules],
});

export default function App() {
  return (
    <>
      <DatabaseProvider database={database} >
        <>
          <Routes />
          <Toast />
        </>
      </DatabaseProvider>
    </>
  )
}