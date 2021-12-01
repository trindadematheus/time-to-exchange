import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'coin_schedules',
      columns: [
        { name: 'coin_id', type: 'string' },
        { name: 'coin_symbol', type: 'string' },
        { name: 'coin_name', type: 'string' },
        { name: 'condition', type: 'string' },
        { name: 'modality', type: 'string' },
        { name: 'value', type: 'string' },
      ]
    }),
  ]
})