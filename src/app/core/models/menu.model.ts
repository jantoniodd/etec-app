export interface Menu {
  id: number;
  label: string;
  level: number;
  link?: string;
  items?: Menu[];
  onSelected?: Function;
  icon?: string;
}
