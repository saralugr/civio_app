import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LawSection } from '../../models/law';
import { LawService } from '../../services/law.service';

@Component({
  selector: 'app-law-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './law-form.html',
  styleUrl: './law-form.scss'
})
export class LawFormComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly lawService = inject(LawService);
  readonly feedback = signal('');
  readonly sections: { key: LawSection; label: string }[] = [
    { key: 'salud', label: 'Sistema de Salud' },
    { key: 'economia', label: 'Economía y Pensiones' },
    { key: 'ambiente', label: 'Ambiente y Sostenibilidad' }
  ];
  readonly draft = {
    section: 'salud' as LawSection,
    type: 'Proyecto de Ley Ordinaria',
    number: '',
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 10),
    title: '',
    author: '',
    details: '',
    status: 'Radicada para revisión ciudadana',
    stage: 'Radicación ciudadana',
    source: '',
    citation: ''
  };

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const section = params.get('section');
      if (this.sections.some(item => item.key === section)) this.draft.section = section as LawSection;
    });
  }

  cancelRoute(): string {
    return `/${this.draft.section}`;
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    if (!form.value['ethics']) {
      this.feedback.set('Confirma la declaración de neutralidad para continuar.');
      return;
    }
    this.feedback.set('');
    const saved = this.lawService.add({
      ...this.draft,
      citation: this.draft.citation || `${this.draft.author}. (${this.draft.date.slice(0, 4)}). ${this.draft.type}: ${this.draft.title}. ${this.draft.source}`
    });
    void this.router.navigate(['/', saved.section]);
  }
}