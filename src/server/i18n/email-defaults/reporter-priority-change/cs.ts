import type { EmailTemplate } from '@shared/types';
import { reporterPriorityChangeHtml } from '../styles.js';

const cs: EmailTemplate = {
  subject: 'Změna priority vašeho hlášení chyby: {{report.title}}',
  html: reporterPriorityChangeHtml({
    headerTitle: 'Priorita hlášení aktualizována',
    intro: 'Priorita vašeho hlášení chyby se změnila.',
    outro: 'Děkujeme za vaše hlášení. O dalších změnách vás budeme průběžně informovat.',
  }),
};

export default cs;
