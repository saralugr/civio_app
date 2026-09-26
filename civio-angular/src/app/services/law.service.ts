import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Law, NewLaw } from '../models/law';

@Injectable({ providedIn: 'root' })
export class LawService {
  private readonly storageKey = 'civico.iniciativas.v1';
  readonly laws = signal<Law[]>([]);

  constructor(private readonly http: HttpClient) {
    this.http.get<Law[]>('/data/leyes.json').subscribe({
      next: laws => this.laws.set(this.merge(laws, this.readSaved())),
      error: () => this.laws.set(this.readSaved())
    });
  }

  add(law: NewLaw): Law {
    const saved = this.readSaved();
    const created: Law = { ...law, id: law.id || `ciudadana-${crypto.randomUUID()}` };
    const nextSaved = [...saved, created];
    localStorage.setItem(this.storageKey, JSON.stringify(nextSaved));
    this.laws.update(current => this.merge(current, [created]));
    return created;
  }

  private readSaved(): Law[] {
    try {
      const value: unknown = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
      return Array.isArray(value) ? value as Law[] : [];
    } catch {
      return [];
    }
  }

  private merge(base: Law[], added: Law[]): Law[] {
    const unique = new Map<string, Law>();
    [...base, ...added].forEach(law => unique.set(law.id, law));
    return [...unique.values()];
  }
}