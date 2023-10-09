#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const figlet = require('figlet');
const argv = require('yargs').argv;

const paddingDefault = (str) => str.padStart(4, ' ');

const lang = argv.lang || 'en';

const color = '#0560bc';

const optionsBoxen = {
  padding: 1,
  margin: 1,
  dimBorder: false,
  float: 'left',
  textAlignment: 'left',
  borderStyle: 'double',
  borderColor: '#0560bc',
};

const optionsFiglet = {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  whitespaceBreak: false,
  width: undefined,
};

const data = {
  logo: chalk.white(figlet.textSync("ARitzel", optionsFiglet)),
  name: chalk.white('Arthur Ritzel'),
  mail: chalk.hex(color)('ritzelarthur@gmail.com'),
  work: {
    en: chalk.white('Developer'),
    pt: chalk.white('Desenvolvedor'),
  },
  web: chalk.hex(color)('https://arthurritzel.github.io/portifolio'),
  linkedin: chalk.hex(color)('https://www.linkedin.com/in/arthur-ritzel'),
  instagram: chalk.hex(color)('https://www.instagram.com/arthur_ritzel'),
  github: chalk.hex(color)('https://github.com/arthurritzel'),
};

const defaultLabel = {
  work: chalk.white.bold(paddingDefault('Work:')),
  web: chalk.white.bold(paddingDefault('Web:')),
  linkedin: chalk.white.bold(paddingDefault('Linkedin:')),
  instagram: chalk.white.bold(paddingDefault('Instagram:')),
  github: chalk.white.bold(paddingDefault('GitHub:')),
};

const label = {
  en: { ...defaultLabel },
  pt: {
    ...defaultLabel,
    work: chalk.white.bold('  Trabalho:'),
  },
};


const output = `${data.logo}

${data.name}
${data.mail}


${label[lang].work}  ${data.work[lang]}

${label[lang].web}  ${data.web}
${label[lang].linkedin}  ${data.linkedin}
${label[lang].instagram}  ${data.instagram}
${label[lang].github}  ${data.github}`;

console.clear();
console.log(chalk.magenta(boxen(output, optionsBoxen)));
