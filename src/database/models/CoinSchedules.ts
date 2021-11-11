import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class CoinSchedules extends Model {
  static table = 'coin_schedules'

  @field('coin_id') coin_id!: string
  @field('coin_symbol') coin_symbol!: string
  @field('coin_name') coin_name!: string
  @field('condition') condition!: string
  @field('modality') modality!: string
  @field('value') value!: number
}