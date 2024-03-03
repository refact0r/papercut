import { persisted } from 'svelte-persisted-store';
export const sources = persisted('sources', [])