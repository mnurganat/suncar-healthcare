export interface CatNode {
  id: string;
  slug: string;
  name: string;
  parent_id: string | null;
  image_url: null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  children?: CatNode[];
}

const CATEGORIES: CatNode[] = [
  { id: "cat-01", slug: "eeg",            name: "Электроэнцефалография (ЭЭГ)",        parent_id: null, image_url: null, sort_order: 1,  is_active: true, created_at: "" },
  { id: "cat-02", slug: "emg",            name: "Электромиография (ЭМГ)",             parent_id: null, image_url: null, sort_order: 2,  is_active: true, created_at: "" },
  { id: "cat-03", slug: "ecg",            name: "Электрокардиография (ЭКГ)",          parent_id: null, image_url: null, sort_order: 3,  is_active: true, created_at: "" },
  { id: "cat-04", slug: "uzi",            name: "УЗИ диагностика",                   parent_id: null, image_url: null, sort_order: 4,  is_active: true, created_at: "" },
  { id: "cat-05", slug: "iom",            name: "Интраоперационный нейромониторинг", parent_id: null, image_url: null, sort_order: 5,  is_active: true, created_at: "" },
  { id: "cat-06", slug: "tms",            name: "Транскраниальная магн. стимуляция", parent_id: null, image_url: null, sort_order: 6,  is_active: true, created_at: "" },
  { id: "cat-07", slug: "psg",            name: "Полисомнография",                   parent_id: null, image_url: null, sort_order: 7,  is_active: true, created_at: "" },
  { id: "cat-08", slug: "spirografiya",   name: "Спирография",                       parent_id: null, image_url: null, sort_order: 8,  is_active: true, created_at: "" },
  { id: "cat-09", slug: "reografiya",     name: "Реография",                         parent_id: null, image_url: null, sort_order: 9,  is_active: true, created_at: "" },
  { id: "cat-10", slug: "surdologiya",    name: "Сурдология",                        parent_id: null, image_url: null, sort_order: 10, is_active: true, created_at: "" },
  { id: "cat-11", slug: "sluhovye",       name: "Слуховые аппараты",                 parent_id: null, image_url: null, sort_order: 11, is_active: true, created_at: "" },
  { id: "cat-12", slug: "reabilitatsiya", name: "Реабилитация",                      parent_id: null, image_url: null, sort_order: 12, is_active: true, created_at: "" },
  { id: "cat-13", slug: "biomekhanika",   name: "Биомеханика",                       parent_id: null, image_url: null, sort_order: 13, is_active: true, created_at: "" },
  { id: "cat-14", slug: "psikhofiziolog", name: "Психофизиология",                   parent_id: null, image_url: null, sort_order: 14, is_active: true, created_at: "" },
  { id: "cat-15", slug: "khirurgiya",     name: "Хирургическое оборудование",        parent_id: null, image_url: null, sort_order: 15, is_active: true, created_at: "" },
  { id: "cat-16", slug: "zashchita",      name: "Средства защиты",                   parent_id: null, image_url: null, sort_order: 16, is_active: true, created_at: "" },
  { id: "cat-17", slug: "elektrorg",      name: "Электроретинография (ЭРГ)",         parent_id: null, image_url: null, sort_order: 17, is_active: true, created_at: "" },
];

export default CATEGORIES;
