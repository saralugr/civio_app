import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LawService } from '../../services/law.service';
import { Law } from '../../models/law';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePageComponent {
  private readonly lawService = inject(LawService);
  readonly laws = this.lawService.laws;
  private readonly featuredIds = ['salud-plan-cancer-2025', 'pgn-2027', 'proyecto-antifracking-2026', 'ciclo-electoral-2026'];
  readonly featured = computed(() => {
    const byId = new Map(this.laws().map(law => [law.id, law]));
    return this.featuredIds.map(id => byId.get(id)).filter((law): law is Law => Boolean(law));
  });

  readonly sections = [
    { key: 'salud', title: 'Sistema de Salud', description: 'Derecho a la salud, prevención y atención integral.', count: '04' },
    { key: 'economia', title: 'Economía y Pensiones', description: 'Presupuesto público, hacienda y protección a la vejez.', count: '02' },
    { key: 'ambiente', title: 'Ambiente y Sostenibilidad', description: 'Acción climática, biodiversidad y transición energética.', count: '04' },
    { key: 'elecciones', title: 'Elecciones 2026', description: 'Normas electorales y calendario de participación.', count: '03' }
  ];
}