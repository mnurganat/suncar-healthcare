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

// Категории из дампа suncarhealthcare.kz (wsp_terms)
const CATEGORIES: CatNode[] = [
  { id: "cat-01", slug: "eeg",                        name: "Электроэнцефалография (ЭЭГ)",                   parent_id: null, image_url: null, sort_order: 1,  is_active: true, created_at: "" },
  { id: "cat-02", slug: "emg",                        name: "Электромиография (ЭМГ)",                        parent_id: null, image_url: null, sort_order: 2,  is_active: true, created_at: "" },
  { id: "cat-03", slug: "ekg",                        name: "Электрокардиография (ЭКГ)",                     parent_id: null, image_url: null, sort_order: 3,  is_active: true, created_at: "" },
  { id: "cat-04", slug: "uzi",                        name: "Ультразвуковая диагностика (УЗИ)",              parent_id: null, image_url: null, sort_order: 4,  is_active: true, created_at: "" },
  { id: "cat-05", slug: "iom",                        name: "Интраоперационный нейромониторинг (ИОМ)",       parent_id: null, image_url: null, sort_order: 5,  is_active: true, created_at: "" },
  { id: "cat-06", slug: "tms",                        name: "Транскраниальная магнитная стимуляция (ТМС)",   parent_id: null, image_url: null, sort_order: 6,  is_active: true, created_at: "" },
  { id: "cat-07", slug: "psg",                        name: "Полисомнография (ПСГ)",                         parent_id: null, image_url: null, sort_order: 7,  is_active: true, created_at: "" },
  { id: "cat-08", slug: "spiro",                      name: "Спирография",                                   parent_id: null, image_url: null, sort_order: 8,  is_active: true, created_at: "" },
  { id: "cat-09", slug: "reo",                        name: "Реография (РЕО)",                               parent_id: null, image_url: null, sort_order: 9,  is_active: true, created_at: "" },
  { id: "cat-10", slug: "surdologiya",                name: "Сурдология",                                    parent_id: null, image_url: null, sort_order: 10, is_active: true, created_at: "" },
  { id: "cat-11", slug: "sluhovye-apparaty",          name: "Слуховые аппараты",                             parent_id: null, image_url: null, sort_order: 11, is_active: true, created_at: "" },
  { id: "cat-12", slug: "reabilitaciya",              name: "Реабилитация",                                  parent_id: null, image_url: null, sort_order: 12, is_active: true, created_at: "" },
  { id: "cat-13", slug: "biomehanika",                name: "Биомеханика",                                   parent_id: null, image_url: null, sort_order: 13, is_active: true, created_at: "" },
  { id: "cat-14", slug: "psihofiziologiya",           name: "Психофизиология",                               parent_id: null, image_url: null, sort_order: 14, is_active: true, created_at: "" },
  { id: "cat-15", slug: "hirurgiya",                  name: "Хирургия",                                      parent_id: null, image_url: null, sort_order: 15, is_active: true, created_at: "" },
  { id: "cat-16", slug: "sredstva-individualnoj-zashhity", name: "Средства индивидуальной защиты",           parent_id: null, image_url: null, sort_order: 16, is_active: true, created_at: "" },
  { id: "cat-17", slug: "erg",                        name: "Электроретинография (ЭРГ)",                     parent_id: null, image_url: null, sort_order: 17, is_active: true, created_at: "" },
  { id: "cat-18", slug: "sfigmografiya",              name: "Сфигмография",                                  parent_id: null, image_url: null, sort_order: 18, is_active: true, created_at: "" },
];

export default CATEGORIES;
