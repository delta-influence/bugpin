import type { EmailTemplate } from '@shared/types';
import { reporterStatusChangeHtml } from '../styles.js';

const cs: EmailTemplate = {
  subject: 'Aktualizace vašeho hlášení chyby: {{report.title}}',
  html: reporterStatusChangeHtml({
    headerTitle: 'Stav hlášení aktualizován',
    intro: 'Stav vašeho hlášení chyby se změnil.',
    teamMessageLabel: 'Zpráva od týmu:',
    outro: 'Děkujeme za vaše hlášení. O dalších změnách vás budeme průběžně informovat.',
  }),
};

export default cs;
