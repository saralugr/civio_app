import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chamber, CongressMember } from '../../models/congress-member';
import { CongressService } from '../../services/congress.service';
import { LawService } from '../../services/law.service';

@Component({
  selector: 'app-congress-page',
  imports: [FormsModule],
  templateUrl: './congress-page.html',
  styleUrl: './congress-page.scss'
})
export class CongressPageComponent {
  private readonly congressService = inject(CongressService);
  private readonly lawService = inject(LawService);
  readonly members = this.congressService.members;
  readonly search = signal('');
  readonly chamber = signal('Todas');
  readonly party = signal('Todos');
  readonly commission = signal('Todas');
  readonly selectedMember = signal<CongressMember | null>(null);
  readonly parties = [...new Set([
    'Pacto Histórico', 'Cambio Radical', 'Centro Democrático', 'Alianza Verde', 'Partido Conservador', 'Comunes'
  ])];
  readonly commissions = ['Primera', 'Tercera'];
  readonly filteredMembers = computed(() => {
    const query = this.search().trim().toLocaleLowerCase('es');
    return this.members().filter(member =>
      (!query || `${member.name} ${member.party} ${member.seat}`.toLocaleLowerCase('es').includes(query)) &&
      (this.chamber() === 'Todas' || member.chamber === this.chamber()) &&
      (this.party() === 'Todos' || member.party === this.party()) &&
      (this.commission() === 'Todas' || member.commission === this.commission())
    );
  });
  readonly legalBasis = computed(() => this.lawService.laws().find(law => law.id === 'ley-5-1992'));

  setSearch(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  setChamber(event: Event): void {
    this.chamber.set((event.target as HTMLSelectElement).value);
  }

  setParty(event: Event): void {
    this.party.set((event.target as HTMLSelectElement).value);
  }

  setCommission(event: Event): void {
    this.commission.set((event.target as HTMLSelectElement).value);
  }

  clearFilters(): void {
    this.search.set('');
    this.chamber.set('Todas');
    this.party.set('Todos');
    this.commission.set('Todas');
  }

  officialLink(member: CongressMember): string {
    return member.chamber === 'Senado' ? 'https://www.senado.gov.co/' : 'https://www.camara.gov.co/';
  }

  initials(member: CongressMember): string {
    return member.displayName.split(' ').slice(0, 2).map(part => part[0]).join('').toLocaleUpperCase('es');
  }

  isChamber(value: string): value is Chamber {
    return value === 'Senado' || value === 'Cámara';
  }
}