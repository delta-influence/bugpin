import type { EmailTemplate } from '@shared/types';
import { reporterAssignmentHtml } from '../styles.js';

const cs: EmailTemplate = {
  subject: '[{{project.name}}] Změna přiřazení hlášení: {{report.title}}',
  html: reporterAssignmentHtml({
    headerTitle: 'Přiřazení aktualizováno',
    introWithPrevious:
      'U vašeho hlášení došlo ke změně přiřazení z <strong>{{previousAssigneeName}}</strong> na <strong>{{assignee.name}}</strong>.',
    introWithoutPrevious: 'Vaše hlášení má nyní na starosti <strong>{{assignee.name}}</strong>.',
    labelProject: 'Projekt:',
    labelReport: 'Hlášení:',
    labelStatus: 'Stav:',
    ctaViewReport: 'Zobrazit hlášení',
    outro: 'Děkujeme za vaše hlášení. O dalších změnách vás budeme průběžně informovat.',
  }),
};

export default cs;
