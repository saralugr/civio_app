import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LawSection } from '../../models/law';
import { LawService } from '../../services/law.service';

interface ModuleInfo {
  key: LawSection;
  title: string;
  eyebrow: string;
  description: string;
  authority: string;
}

const modules: Record<string, ModuleInfo> = {
  salud: { key: 'salud', title: 'Sistema de Salud', eyebrow: 'Derecho fundamental · Ley Estatutaria 1751 de 2015', description: 'Iniciativas, marcos normativos y seguimiento ciudadano a la salud pública en Colombia.', authority: 'MinSalud · SuperSalud' },
  economia: { key: 'economia', title: 'Economía y Pensiones', eyebrow: 'Hacienda pública · Protección a la vejez', description: 'Presupuesto nacional, reglas fiscales y protección económica para la ciudadanía.', authority: 'Ministerio de Hacienda' },
  ambiente: { key: 'ambiente', title: 'Ambiente y Sostenibilidad', eyebrow: 'Sistema Nacional Ambiental · Ley 99 de 1993', description: 'Legislación ambiental, transición energética y compromisos climáticos.', authority: 'MinAmbiente · ANLA' },
  elecciones: { key: 'elecciones', title: 'Elecciones 2026', eyebrow: 'Registraduría · Consejo Nacional Electoral', description: 'Normas y calendario para la renovación del Congreso y la elección presidencial.', authority: 'Registraduría · CNE' }
};

@Component({
  selector: 'app-module-page',
  imports: [RouterLink],
  templateUrl: './module-page.html',
  styleUrl: './module-page.scss'
})
export class ModulePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly lawService = inject(LawService);
  readonly module = signal<ModuleInfo>(modules['salud']);
  readonly laws = computed(() => this.lawService.laws().filter(law => law.section === this.module().key));

  constructor() {
    this.route.data.subscribe(data => {
      const key = String(data['section'] || 'salud');
      this.module.set(modules[key] || modules['salud']);
    });
  }
}