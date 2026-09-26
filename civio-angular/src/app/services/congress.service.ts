import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CongressMember } from '../models/congress-member';

@Injectable({ providedIn: 'root' })
export class CongressService {
  readonly members = signal<CongressMember[]>([]);

  constructor(http: HttpClient) {
    http.get<CongressMember[]>('/data/congresistas.json').subscribe({
      next: members => this.members.set(members),
      error: () => this.members.set([])
    });
  }
}