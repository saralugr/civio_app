import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    @if (!isCreatePage()) {
      <header class="site-header">
        <a class="brand" routerLink="/inicio" aria-label="Cívico, inicio"><span>Cívico</span><i></i></a>
        <nav aria-label="Navegación principal">
          <a routerLink="/inicio" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
          <a routerLink="/congreso" routerLinkActive="active">Congreso</a>
          <a routerLink="/salud" routerLinkActive="active">Sistema de Salud</a>
          <a routerLink="/economia" routerLinkActive="active">Economía y Pensiones</a>
          <a routerLink="/ambiente" routerLinkActive="active">Ambiente y Sostenibilidad</a>
          <a routerLink="/elecciones" routerLinkActive="active">Elecciones 2026</a>
          @if (showCreateLink()) { <a class="create-nav" routerLink="/nueva-iniciativa">＋ Nueva iniciativa</a> }
        </nav>
      </header>
    }
    <div class="app-main"><router-outlet /></div>
  `,
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);
  private readonly path = signal(this.router.url.split('?')[0]);
  readonly isCreatePage = computed(() => this.path() === '/nueva-iniciativa');
  readonly showCreateLink = computed(() => ['/salud', '/economia', '/ambiente'].includes(this.path()));

  constructor() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      if (event instanceof NavigationEnd) this.path.set(event.urlAfterRedirects.split('?')[0]);
    });
  }
}
