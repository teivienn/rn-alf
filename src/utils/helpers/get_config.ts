import { cosmiconfig } from 'cosmiconfig'
import { configSchema } from '../schema'

export async function getConfig(cwd: string) {
  const explorer = cosmiconfig('rn-alf', {
    searchPlaces: ['rn-alf.json'],
  })

  try {
    const configResult = (await explorer.search(cwd))!
    return configSchema.parse(configResult.config)
  }
  catch (error) {
    throw new Error(`Invalid configuration found in ${cwd}/rn-alf.json. Error - ${error}`)
  }
}
