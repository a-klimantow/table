import { RewardsModule } from './rewards'
import { UserModule } from './user'

export const modules = {
  user: UserModule,
  rewards: RewardsModule,
}

export type ModuleType = keyof typeof modules
