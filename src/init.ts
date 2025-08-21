import type { ConfigSchema } from './utils/schema'
import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import { APP_PATH } from './utils/constants'

export async function init() {
  try {
    console.log('\n Initializing rn-alf...')

    const configPath = path.join(APP_PATH, 'rn-alf.json')

    const config: ConfigSchema = {
      atoms: {
        name: 'alf',
        path: 'src/styles/alf.ts',
      },
      spaces: {
        _2xs: 2,
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
        _2xl: 24,
        _3xl: 28,
        _4xl: 32,
        _5xl: 40,
      },
    }

    await fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8')

    console.log(chalk.bold('\n🎉 Config file initialized. Thanks for using rn-alf! 🎉'))
  }
  catch (cancelled: any) {
    console.log(cancelled?.message)
    process.exit(1)
  }
}
