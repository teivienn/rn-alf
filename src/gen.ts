import fs from 'node:fs'
import path from 'node:path'
import prettier from 'prettier'
import { alf } from './alf'
import { APP_PATH } from './utils/constants'
import { getConfig } from './utils/helpers'

export async function gen() {
  const config = await getConfig(process.cwd())
  const styles = alf(config.spaces)

  const atomsPath = path.join(APP_PATH, config.atoms.path)

  const fileContent = `
  import { StyleSheet } from 'react-native';
  
  /**
   * Auto-generated atomic styles
   */
  export const ${config.atoms.name} = StyleSheet.create(${styles});
    `.trim()

  fs.writeFileSync(
    atomsPath,
    (await prettier.format(fileContent, {
      parser: 'babel',
      singleQuote: true,
    })).toString(),
    'utf8',
  )
  console.log(`✅ Styles generated to ${atomsPath}`)
}
