/**
 * Seed data — 24 продукта из дампа suncarhealthcare.kz
 * Для загрузки в Supabase таблицу products
 * Изображения: прямые URL с suncarhealthcare.kz/wp-content/uploads/
 */

const IMG = "https://suncarhealthcare.kz/wp-content/uploads/2021/10";

export const SEED_PRODUCTS = [
  // ── ЭЭГ (eeg) ──────────────────────────────────────────────────────────
  {
    sku: "NS015106.007",
    name_ru: "Электрод ЭЭГ мостиковый",
    description_ru: "Мостиковый ЭЭГ электрод представляет собой электродную систему состоящую из электрода, вмонтированного в пластмассовый корпус с внешней резьбой.",
    category_slug: "eeg",
    image_url: `${IMG}/Elektrod-EEG-mostikovyj.jpg`,
    is_featured: false,
  },
  {
    sku: "894591",
    name_ru: "Электрод ЭЭГ чашечковый с кабелем отведения",
    description_ru: "Чашечковые ЭЭГ электроды представляют собой пластину, заключенную в пластмассовый корпус.",
    category_slug: "eeg",
    image_url: `${IMG}/Elektrod-EEG-chashechkovyj-s-kabelem-otvedeniya.jpg`,
    is_featured: false,
  },
  {
    sku: "894601",
    name_ru: "Фотостимулятор светодиодный «ФС-1»",
    description_ru: "Фотостимулятор предназначен для генерации световых сигналов с заданными параметрами (яркостью, длительностью, частотой, цветом) под управлением многофункциональных компьютерных комплексов серий «Нейро».",
    category_slug: "eeg",
    image_url: `${IMG}/Fotostimulyator-svetodiodnyj-FS-1.jpg`,
    is_featured: true,
  },
  {
    sku: "894602",
    name_ru: "Фотостимулятор светодиодный «ФС-2»",
    description_ru: "Фотостимулятор предназначен для генерации световых сигналов с заданными параметрами (яркостью, длительностью, частотой, цветом) под управлением многофункциональных компьютерных комплексов серий «Нейро».",
    category_slug: "eeg",
    image_url: `${IMG}/Fotostimulyator-svetodiodnyj-FS-2.jpg`,
    is_featured: false,
  },
  {
    sku: "894605",
    name_ru: "Стойка напольная «СН-3»",
    description_ru: "Стойка предназначена только для установки на нее приборов, имеющих специальные крепежные устройства и выпускаемых ООО «Нейрософт».",
    category_slug: "eeg",
    image_url: `${IMG}/Stojka-napolnaya-SN-3.jpg`,
    is_featured: false,
  },
  {
    sku: "894606",
    name_ru: "Стойка напольная СН-7",
    description_ru: "Стойка предназначена только для установки на нее приборов, имеющих специальные крепежные устройства и выпускаемых ООО «Нейрософт».",
    category_slug: "eeg",
    image_url: `${IMG}/Stojka-napolnaya-SN-7.jpg`,
    is_featured: false,
  },

  // ── Сурдология (surdologiya) ────────────────────────────────────────────
  {
    sku: "894575",
    name_ru: "Подставка для Аудио-СМАРТ",
    description_ru: "",
    category_slug: "surdologiya",
    image_url: `${IMG}/Podstavka-dlya-Audio-SMART.jpg`,
    is_featured: false,
  },

  // ── ПСГ (psg) ──────────────────────────────────────────────────────────
  {
    sku: "894607", // MTLL230-9
    name_ru: "Переходник для назальной канюли MTLL230-9",
    description_ru: "",
    category_slug: "psg",
    image_url: `${IMG}/Perehodnik-dlya-nazalnoj-kanjuli-MTLL230-9.jpg`,
    is_featured: false,
  },

  // ── Реабилитация (reabilitaciya) ────────────────────────────────────────
  {
    sku: "894585",
    name_ru: "Средство перевязочное и фиксирующее Transpore",
    description_ru: "",
    category_slug: "reabilitaciya",
    image_url: `${IMG}/Sredstvo-perevyazochnoe-i-fiksirujushhee-Transpore.jpg`,
    is_featured: false,
  },

  // ── Психофизиология (psihofiziologiya) ─────────────────────────────────
  {
    sku: "894592",
    name_ru: "Блок электронный «Полирегистратор»",
    description_ru: "Оценка физиологических реакций и изменения психоэмоционального состояния человека в ответ на внешнее воздействие является важным инструментом диагностики адаптивных возможностей.",
    category_slug: "psihofiziologiya",
    image_url: `${IMG}/Blok-elektronnyj-Poliregistrator.png`,
    is_featured: true,
  },

  // ── Реография (reo) ─────────────────────────────────────────────────────
  {
    sku: "894598",
    name_ru: "Электрод для биполярной РЭГ",
    description_ru: "Электрод для регистрации РЭГ / Реоэнцефалография (20×15 мм).",
    category_slug: "reo",
    image_url: `${IMG}/Elektrod-dlya-bipolyarnoj-REG.jpg`,
    is_featured: false,
  },
  {
    sku: "894608",
    name_ru: "Заглушка калибровочная",
    description_ru: "",
    category_slug: "reo",
    image_url: `${IMG}/Zaglushka-kalibrovochnaya.jpg`,
    is_featured: false,
  },
  {
    sku: "894609",
    name_ru: "Электрод для регистрации реокардиографии по Кубичеку — рулетка «грудная»",
    description_ru: "Грудной электрод (рулетка) для регистрации реокардиографии по Кубечику.",
    category_slug: "reo",
    image_url: `${IMG}/Elektrod-dlya-registracii-reokardiografii-po-Kubicheku-ruletka-grudnaya.jpg`,
    is_featured: false,
  },
  {
    sku: "894610",
    name_ru: "Электрод для регистрации реокардиографии по Кубичеку — рулетка «шейная»",
    description_ru: "Шейный электрод (рулетка) для регистрации реокардиографии по Кубечику.",
    category_slug: "reo",
    image_url: `${IMG}/Elektrod-dlya-registracii-reokardiografii-po-Kubichekumdash-ruletka-shejnaya.jpg`,
    is_featured: false,
  },
  {
    sku: "894611",
    name_ru: "Кабель отведения для тетраполярного режима",
    description_ru: "Кабель отведения для подключения реографических электродов.",
    category_slug: "reo",
    image_url: `${IMG}/Kabel-otvedeniya-dlya-tetrapolyarnogo-rezhima.jpg`,
    is_featured: false,
  },

  // ── ТМС (tms) ──────────────────────────────────────────────────────────
  {
    sku: "894612",
    name_ru: "Кронштейн для размещения индуктора магнитного стимулятора К-8",
    description_ru: "",
    category_slug: "tms",
    image_url: `${IMG}/Kronshtejn-dlya-razmeshheniya-induktora-magnitnogo-stimulyatora-v-nerabochem-sostoyanii-K-8.jpg`,
    is_featured: false,
  },
  {
    sku: "894613",
    name_ru: "Лицензия на использование программы для ЭВМ «Нейро-МС.NET»",
    description_ru: "Программное обеспечение для транскраниальной магнитной стимуляции.",
    category_slug: "tms",
    image_url: `${IMG}/Licenziya-na-ispolzovanie-programmy-dlya-EVM-Nejro-MS.NET_.png`,
    is_featured: false,
  },

  // ── ЭКГ (ekg) ──────────────────────────────────────────────────────────
  {
    sku: "894614",
    name_ru: "Датчик артериального пульса ДАП-1 с кабелем и лентой",
    description_ru: "Датчик артериального пульса ДАП-1 необходим для регистрации и анализа скорости распространения пульсовой волны.",
    category_slug: "ekg",
    image_url: `${IMG}/Datchik-arterialnogo-pulsa-DAP-1-s-kabelem-i-lentoj.jpg`,
    is_featured: false,
  },
  {
    sku: "894615",
    name_ru: "Поли-Спектр-ВР",
    description_ru: "Программа и оборудование для регистрации и анализа поздних потенциалов желудочков.",
    category_slug: "ekg",
    image_url: `${IMG}/Poli-spektr-VR.png`,
    is_featured: true,
  },

  // ── ЭМГ (emg) ──────────────────────────────────────────────────────────
  {
    sku: "NS015106.018", // EST-1
    name_ru: "Электрод стимулирующий токовый вилочковый «ЭСТ-1» 2.5 м",
    description_ru: "",
    category_slug: "emg",
    image_url: `${IMG}/Elektrod-stimulirujushhij-tokovyj-vilochkovyj-EST-1-2.5-m.jpg`,
    is_featured: false,
  },
  {
    sku: "NS015106.015", // EST-2
    name_ru: "Электрод токовый стимулирующий вилочковый «ЭСТ-2» 2.5 м",
    description_ru: "",
    category_slug: "emg",
    image_url: `${IMG}/Elektrod-tokovyj-stimulirujushhij-vilochkovyj-EST-2-2.5-m.jpg`,
    is_featured: false,
  },
  {
    sku: "894616",
    name_ru: "Молоток неврологический",
    description_ru: "Подключается к USB-концентратору.",
    category_slug: "emg",
    image_url: `${IMG}/Molotok-nevrologicheskij.jpg`,
    is_featured: false,
  },
  {
    sku: "NS012302.005",
    name_ru: "Клавиатура функциональная КФ-01 в комплекте с кабелем и адаптером",
    description_ru: "Клавиатура функциональная для электромиографов.",
    category_slug: "emg",
    image_url: `${IMG}/Klaviatura-funkcionalnaya-KF-01-v-komplekte-s-kabelem-i-adapterom.jpg`,
    is_featured: false,
  },
  {
    sku: "NS005302.005-01",
    name_ru: "Клавиатура функциональная КФ-02 в комплекте с кабелем и адаптером",
    description_ru: "Клавиатура функциональная для электромиографов.",
    category_slug: "emg",
    image_url: `${IMG}/Klaviatura-funkcionalnaya-KF-02-v-komplekte-s-kabelem-i-adapterom.jpg`,
    is_featured: false,
  },
];

export default SEED_PRODUCTS;
