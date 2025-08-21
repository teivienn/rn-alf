import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { gen } from './gen'
import { init } from './init'

export function cli() {
  const processArgv = hideBin(process.argv)

  yargs(processArgv)
    .scriptName('rn-alf')
    .usage('$0 <cmd>')
    .command('init', 'Initialize rn-alf.json config file', init)
    .command('gen', 'Generate alf styles', gen)
    .version()
    .alias('v', 'version')
    .help()
    .alias('h', 'help')
    .parse()
}
