import type { EmailTemplate } from '@shared/types';
import { reporterMessageHtml } from '../styles.js';

const cs: EmailTemplate = {
  subject: 'Zpráva k vašemu hlášení chyby: {{report.title}}',
  html: reporterMessageHtml({
    headerTitle: 'Zpráva k vašemu hlášení',
    intro: '<strong>{{sender.name}}</strong> vám posílá zprávu k vašemu hlášení chyby.',
  }),
};

export default cs;
