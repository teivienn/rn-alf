import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { gen } from './gen'
import { init } from './init'

export function cli() {
  const processArgv = hideBin(process.argv)

  if (processArgv.includes('init'))
    return init()

  if (processArgv.includes('gen'))
    return gen()

  yargs(processArgv)
    .scriptName('rn-alf')
    .usage('$0 <cmd> [args]')
    .version()
    .alias('v', 'version')
    .help()
    .alias('h', 'help')
    .parse()
}
