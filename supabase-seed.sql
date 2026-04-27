-- ============================================================
-- Suncar Healthcare — Supabase seed data (v1)
-- 18 категорий + 24 продукта из дампа suncarhealthcare.kz
-- Run in: Supabase → SQL Editor → Run
-- ON CONFLICT DO UPDATE → safe to re-run
-- ============================================================

-- ── КАТЕГОРИИ ────────────────────────────────────────────────────────────────

insert into categories (id, slug, sort_order)
values
  ('cat-01', 'eeg',                              1),
  ('cat-02', 'emg',                              2),
  ('cat-03', 'ekg',                              3),
  ('cat-04', 'uzi',                              4),
  ('cat-05', 'iom',                              5),
  ('cat-06', 'tms',                              6),
  ('cat-07', 'psg',                              7),
  ('cat-08', 'spiro',                            8),
  ('cat-09', 'reo',                              9),
  ('cat-10', 'surdologiya',                     10),
  ('cat-11', 'sluhovye-apparaty',               11),
  ('cat-12', 'reabilitaciya',                   12),
  ('cat-13', 'biomehanika',                     13),
  ('cat-14', 'psihofiziologiya',                14),
  ('cat-15', 'hirurgiya',                       15),
  ('cat-16', 'sredstva-individualnoj-zashhity', 16),
  ('cat-17', 'erg',                             17),
  ('cat-18', 'sfigmografiya',                   18)
on conflict (id) do update set slug=excluded.slug, sort_order=excluded.sort_order;

-- Названия категорий (ru)
insert into translations (entity_type, entity_id, locale, field, value)
values
  ('category','cat-01','ru','name','Электроэнцефалография (ЭЭГ)'),
  ('category','cat-02','ru','name','Электромиография (ЭМГ)'),
  ('category','cat-03','ru','name','Электрокардиография (ЭКГ)'),
  ('category','cat-04','ru','name','Ультразвуковая диагностика (УЗИ)'),
  ('category','cat-05','ru','name','Интраоперационный нейромониторинг (ИОМ)'),
  ('category','cat-06','ru','name','Транскраниальная магнитная стимуляция (ТМС)'),
  ('category','cat-07','ru','name','Полисомнография (ПСГ)'),
  ('category','cat-08','ru','name','Спирография'),
  ('category','cat-09','ru','name','Реография (РЕО)'),
  ('category','cat-10','ru','name','Сурдология'),
  ('category','cat-11','ru','name','Слуховые аппараты'),
  ('category','cat-12','ru','name','Реабилитация'),
  ('category','cat-13','ru','name','Биомеханика'),
  ('category','cat-14','ru','name','Психофизиология'),
  ('category','cat-15','ru','name','Хирургия'),
  ('category','cat-16','ru','name','Средства индивидуальной защиты'),
  ('category','cat-17','ru','name','Электроретинография (ЭРГ)'),
  ('category','cat-18','ru','name','Сфигмография')
on conflict (entity_type, entity_id, locale, field) do update set value=excluded.value;

-- ── ПРОДУКТЫ ─────────────────────────────────────────────────────────────────

insert into products (id, slug, category_id, sku, images, is_featured)
values
-- ЭЭГ
('prod-01','elektrod-eeg-mostikovyj',          'cat-01','NS015106.007',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Elektrod-EEG-mostikovyj.jpg'], false),
('prod-02','elektrod-eeg-chashechkovyj',        'cat-01','894591',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Elektrod-EEG-chashechkovyj-s-kabelem-otvedeniya.jpg'], false),
('prod-03','fotostimulyator-fs-1',              'cat-01','894601',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Fotostimulyator-svetodiodnyj-FS-1.jpg'], true),
('prod-04','fotostimulyator-fs-2',              'cat-01','894602',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Fotostimulyator-svetodiodnyj-FS-2.jpg'], false),
('prod-05','stojka-napolnaya-sn-3',             'cat-01','894605',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Stojka-napolnaya-SN-3.jpg'], false),
('prod-06','stojka-napolnaya-sn-7',             'cat-01','894606',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Stojka-napolnaya-SN-7.jpg'], false),
-- Сурдология
('prod-07','podstavka-dlya-audio-smart',        'cat-10','894575',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Podstavka-dlya-Audio-SMART.jpg'], false),
-- ПСГ
('prod-08','perehodnik-nazalnaya-kanyulya',     'cat-07','894607',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Perehodnik-dlya-nazalnoj-kanjuli-MTLL230-9.jpg'], false),
-- Реабилитация
('prod-09','transpore-perevyazochnoe',          'cat-12','894585',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Sredstvo-perevyazochnoe-i-fiksirujushhee-Transpore.jpg'], false),
-- Психофизиология
('prod-10','blok-elektronnyj-poliregistrator',  'cat-14','894592',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Blok-elektronnyj-Poliregistrator.png'], true),
-- Реография
('prod-11','elektrod-dlya-bipolyarnoj-reg',     'cat-09','894598',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Elektrod-dlya-bipolyarnoj-REG.jpg'], false),
('prod-12','zaglushka-kalibrovochnaya',         'cat-09','894608',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Zaglushka-kalibrovochnaya.jpg'], false),
('prod-13','elektrod-reokardiografii-grudnoj',  'cat-09','894609',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Elektrod-dlya-registracii-reokardiografii-po-Kubicheku-ruletka-grudnaya.jpg'], false),
('prod-14','elektrod-reokardiografii-shejnyj',  'cat-09','894610',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Elektrod-dlya-registracii-reokardiografii-po-Kubichekumdash-ruletka-shejnaya.jpg'], false),
('prod-15','kabel-tetrapolyarnyj',              'cat-09','894611',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Kabel-otvedeniya-dlya-tetrapolyarnogo-rezhima.jpg'], false),
-- ТМС
('prod-16','kronshtejn-induktora-k8',           'cat-06','894612',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Kronshtejn-dlya-razmeshheniya-induktora-magnitnogo-stimulyatora-v-nerabochem-sostoyanii-K-8.jpg'], false),
('prod-17','licenziya-nejro-ms-net',            'cat-06','894613',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Licenziya-na-ispolzovanie-programmy-dlya-EVM-Nejro-MS.NET_.png'], false),
-- ЭКГ
('prod-18','datchik-arterialnogo-pulsa-dap-1',  'cat-03','894614',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Datchik-arterialnogo-pulsa-DAP-1-s-kabelem-i-lentoj.jpg'], false),
('prod-19','poli-spektr-vr',                    'cat-03','894615',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Poli-spektr-VR.png'], true),
-- ЭМГ
('prod-20','elektrod-est-1',                    'cat-02','NS015106.018',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Elektrod-stimulirujushhij-tokovyj-vilochkovyj-EST-1-2.5-m.jpg'], false),
('prod-21','elektrod-est-2',                    'cat-02','NS015106.015',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Elektrod-tokovyj-stimulirujushhij-vilochkovyj-EST-2-2.5-m.jpg'], false),
('prod-22','molotok-nevrologicheskij',           'cat-02','894616',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Molotok-nevrologicheskij.jpg'], false),
('prod-23','klaviatura-kf-01',                  'cat-02','NS012302.005',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Klaviatura-funkcionalnaya-KF-01-v-komplekte-s-kabelem-i-adapterom.jpg'], false),
('prod-24','klaviatura-kf-02',                  'cat-02','NS005302.005-01',
  ARRAY['https://suncarhealthcare.kz/wp-content/uploads/2021/10/Klaviatura-funkcionalnaya-KF-02-v-komplekte-s-kabelem-i-adapterom.jpg'], false)
on conflict (id) do update
  set slug=excluded.slug, category_id=excluded.category_id,
      sku=excluded.sku, images=excluded.images, is_featured=excluded.is_featured;

-- ── ПЕРЕВОДЫ ТОВАРОВ (ru) ────────────────────────────────────────────────────

insert into translations (entity_type, entity_id, locale, field, value)
values
('product','prod-01','ru','name','Электрод ЭЭГ мостиковый'),
('product','prod-01','ru','description','Мостиковый ЭЭГ электрод представляет собой электродную систему состоящую из электрода, вмонтированного в пластмассовый корпус с внешней резьбой.'),
('product','prod-01','ru','manufacturer','Нейрософт'),

('product','prod-02','ru','name','Электрод ЭЭГ чашечковый с кабелем отведения'),
('product','prod-02','ru','description','Чашечковые ЭЭГ электроды представляют собой пластину, заключенную в пластмассовый корпус.'),
('product','prod-02','ru','manufacturer','Нейрософт'),

('product','prod-03','ru','name','Фотостимулятор светодиодный «ФС-1»'),
('product','prod-03','ru','description','Фотостимулятор предназначен для генерации световых сигналов с заданными параметрами (яркостью, длительностью, частотой, цветом) под управлением многофункциональных компьютерных комплексов серий «Нейро».'),
('product','prod-03','ru','manufacturer','Нейрософт'),

('product','prod-04','ru','name','Фотостимулятор светодиодный «ФС-2»'),
('product','prod-04','ru','description','Фотостимулятор предназначен для генерации световых сигналов с заданными параметрами (яркостью, длительностью, частотой, цветом) под управлением многофункциональных компьютерных комплексов серий «Нейро».'),
('product','prod-04','ru','manufacturer','Нейрософт'),

('product','prod-05','ru','name','Стойка напольная «СН-3»'),
('product','prod-05','ru','description','Стойка предназначена только для установки на нее приборов, имеющих специальные крепежные устройства и выпускаемых ООО «Нейрософт».'),
('product','prod-05','ru','manufacturer','Нейрософт'),

('product','prod-06','ru','name','Стойка напольная СН-7'),
('product','prod-06','ru','description','Стойка предназначена только для установки на нее приборов, имеющих специальные крепежные устройства и выпускаемых ООО «Нейрософт».'),
('product','prod-06','ru','manufacturer','Нейрософт'),

('product','prod-07','ru','name','Подставка для Аудио-СМАРТ'),
('product','prod-07','ru','manufacturer','Нейрософт'),

('product','prod-08','ru','name','Переходник для назальной канюли MTLL230-9'),

('product','prod-09','ru','name','Средство перевязочное и фиксирующее Transpore'),
('product','prod-09','ru','manufacturer','3M'),

('product','prod-10','ru','name','Блок электронный «Полирегистратор»'),
('product','prod-10','ru','description','Оценка физиологических реакций и изменения психоэмоционального состояния человека в ответ на внешнее воздействие является важным инструментом диагностики адаптивных возможностей.'),
('product','prod-10','ru','manufacturer','Нейрософт'),

('product','prod-11','ru','name','Электрод для биполярной РЭГ'),
('product','prod-11','ru','description','Электрод для регистрации РЭГ / Реоэнцефалография (20×15 мм).'),
('product','prod-11','ru','manufacturer','Нейрософт'),

('product','prod-12','ru','name','Заглушка калибровочная'),
('product','prod-12','ru','manufacturer','Нейрософт'),

('product','prod-13','ru','name','Электрод для регистрации реокардиографии по Кубичеку — рулетка «грудная»'),
('product','prod-13','ru','description','Грудной электрод (рулетка) для регистрации реокардиографии по Кубечику.'),
('product','prod-13','ru','manufacturer','Нейрософт'),

('product','prod-14','ru','name','Электрод для регистрации реокардиографии по Кубичеку — рулетка «шейная»'),
('product','prod-14','ru','description','Шейный электрод (рулетка) для регистрации реокардиографии по Кубечику.'),
('product','prod-14','ru','manufacturer','Нейрософт'),

('product','prod-15','ru','name','Кабель отведения для тетраполярного режима'),
('product','prod-15','ru','description','Кабель отведения для подключения реографических электродов.'),
('product','prod-15','ru','manufacturer','Нейрософт'),

('product','prod-16','ru','name','Кронштейн для размещения индуктора магнитного стимулятора К-8'),
('product','prod-16','ru','manufacturer','Нейрософт'),

('product','prod-17','ru','name','Лицензия на использование программы для ЭВМ «Нейро-МС.NET»'),
('product','prod-17','ru','description','Программное обеспечение для транскраниальной магнитной стимуляции.'),
('product','prod-17','ru','manufacturer','Нейрософт'),

('product','prod-18','ru','name','Датчик артериального пульса ДАП-1 с кабелем и лентой'),
('product','prod-18','ru','description','Датчик артериального пульса ДАП-1 необходим для регистрации и анализа скорости распространения пульсовой волны.'),
('product','prod-18','ru','manufacturer','Нейрософт'),

('product','prod-19','ru','name','Поли-Спектр-ВР'),
('product','prod-19','ru','description','Программа и оборудование для регистрации и анализа поздних потенциалов желудочков.'),
('product','prod-19','ru','manufacturer','Нейрософт'),

('product','prod-20','ru','name','Электрод стимулирующий токовый вилочковый «ЭСТ-1» 2.5 м'),
('product','prod-20','ru','manufacturer','Нейрософт'),

('product','prod-21','ru','name','Электрод токовый стимулирующий вилочковый «ЭСТ-2» 2.5 м'),
('product','prod-21','ru','manufacturer','Нейрософт'),

('product','prod-22','ru','name','Молоток неврологический'),
('product','prod-22','ru','description','Подключается к USB-концентратору.'),
('product','prod-22','ru','manufacturer','Нейрософт'),

('product','prod-23','ru','name','Клавиатура функциональная КФ-01 в комплекте с кабелем и адаптером'),
('product','prod-23','ru','description','Клавиатура функциональная для электромиографов.'),
('product','prod-23','ru','manufacturer','Нейрософт'),

('product','prod-24','ru','name','Клавиатура функциональная КФ-02 в комплекте с кабелем и адаптером'),
('product','prod-24','ru','description','Клавиатура функциональная для электромиографов.'),
('product','prod-24','ru','manufacturer','Нейрософт')
on conflict (entity_type, entity_id, locale, field) do update set value=excluded.value;
