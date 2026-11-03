import type { EmailTemplate } from '@shared/types';
import { reporterConfirmationHtml } from '../styles.js';

const cs: EmailTemplate = {
  subject: 'Vaše hlášení chyby bylo přijato: {{report.title}}',
  html: reporterConfirmationHtml({
    headerTitle: 'Hlášení přijato',
    intro: 'Děkujeme za nahlášení chyby. Náš tým hlášení přijal a brzy se jím bude zabývat.',
    labelStatus: 'Stav:',
    labelPriority: 'Priorita:',
    labelSubmitted: 'Odesláno:',
    outro: 'O změnách stavu vašeho hlášení vás budeme informovat e-mailem.',
  }),
};

export default cs;
