import React from 'react';
import "../css/structure.css"
import str_1 from "../components/images/structure/1.jpg";
import str_2 from "../components/images/structure/2.jpg";
import str_3 from "../components/images/structure/3.jpg";
import str_4 from "../components/images/structure/4.jpg";
import str_5 from "../components/images/structure/5.jpg";
import str_6 from "../components/images/structure/6.jpg";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import "../css/about.css"
import About from "./about";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <About />
            <div className="krao">
            <h2 className="gr">Структурные подразделения (органы управления)</h2>
            <p> Наименования структурных подразделений (органов управления),
                руководители структурных подразделений, места нахождения структурных подразделений,
                адреса официальных сайтов в информационно-телекоммуникационной сети «Интернет»
                структурных подразделений (при наличии), адреса электронной почты структурных подразделений (при наличии),
                сведения о наличии положений о структурных подразделениях (органах управления) с приложением копий
                указанных положений (при наличии), режим и график работы.
            </p>
        </div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}><h2 className="lt">Органы управления</h2></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Ф.И.О</th>
                                <th>Должность</th>
                                <th>Контактный телефон</th>
                                <th>Адрес электронной почты</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Ректорат</td>
                                <td>Шакеева Чинара Асановна</td>
                                <td>Ректор</td>
                                <td>+996312418262</td>
                                <td>krao@elcat.kg</td>
                            </tr>
                            <tr>
                                <td>Ректорат</td>
                                <td>Наралиева Динар Баисбековна</td>
                                <td>Проректор по учебно-воспитательной работе</td>
                                <td>+996 555202171</td>
                                <td>Naralievad@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Ректорат</td>
                                <td>Кененбаева Гулайым Мекишевна</td>
                                <td>Проректор по научной работе и развитию</td>
                                <td>+996500154453</td>
                                <td>gkenenbaeva@mail.ru</td>
                            </tr>
                            <tr>
                                <td>Ректорат</td>
                                <td>Базарбаев Талантбек Аскерович</td>
                                <td>Проректор по административно-хозяйственной части</td>
                                <td>+996 704735531</td>
                                <td>talanta@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Ректорат</td>
                                <td>Ким Наталья Игоревна</td>
                                <td>Начальник отдела по качеству образования, лицензирования и аккредитации</td>
                                <td>+996 701009565</td>
                                <td>kimtata78@mail.ru</td>
                            </tr>
                            <tr>
                                <td>Секретариат ректората</td>
                                <td>Кашкарбаева Бегай Тобокеловна</td>
                                <td>Начальник отдела по информационным технологиям и дистанционному обучению</td>
                                <td>+996707070077</td>
                                <td>beka410525@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Ученый совет</td>
                                <td>Илларионова Лина Михайловна</td>
                                <td>секретарь Ученого Совета</td>
                                <td>+996 556103301</td>
                                <td>tanecha_i@mail.ru</td>
                            </tr>
                            </tbody>
                        </table>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}><h2>
                        Структурные подразделения</h2></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>ФИО</th>
                                <th>должность</th>
                                <th>Адрес, график работы</th>
                                <th>Контактная информация</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Учебно-методическое управление</td>
                                <td>Байгазиева Нурипа Аманбаевна</td>
                                <td>Начальник</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00

                                </td>
                                <td>тел: +996700707833
                                     baigazieva@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Учебный отдел</td>
                                <td>
                                    Ноздрачева Татьяна Владимировна
                                </td>
                                <td>Начальник</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996 556103301
                                    tanecha_i@mail.ru
                                </td>
                            </tr>
                            <tr>
                                <td>Отдел по информационным технологиям и организации дистанционного обучения</td>
                                <td>
                                    Нищадим Илья Владимирович
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996553260401
                                    nishadm01@mail.ru

                                </td>
                            </tr>
                            <tr>
                                <td>Отдел по делам молодежи и воспитательной работе</td>
                                <td>
                                    Тилекматова Айжан
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996709747177
                                    aizhantilekmatova@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Отдел по организации приема студентов</td>
                                <td>
                                    Эгембердиева Айзада Пансатовна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996553474555
                                    aizadaegem@gmail.com

                                </td>
                            </tr>
                            <tr>
                                <td>Библиотека</td>
                                <td>
                                    Жуманова Каныкей
                                </td>
                                <td>Заведующий</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418262
                                    krao@elcat.kg
                                </td>
                            </tr>
                            <tr>
                                <td>Центр карьерного роста</td>
                                <td>
                                    Петровская Надежда Александровна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996709910513
                                    kompass1305@gmail.com

                                </td>
                            </tr>
                            <tr>
                                <td>Кафедра экономики и менеджмента</td>
                                <td>
                                    Назарбекова Эмилия Умбетовна
                                </td>
                                <td>Заведующий</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996702555551
                                    emnazarbekova@gmail.com


                                </td>
                            </tr>
                            <tr>
                                <td>Кафедра информационных технологий и естественно-технических наук</td>
                                <td>
                                    Кабаева Зарина Сарыгуловна
                                </td>
                                <td>Заведующий</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996708003159
                                    akbar2505-78@mail.ru
                                </td>
                            </tr>
                            <tr>
                                <td>Кафедра ГиМУ и ЮП</td>
                                <td>
                                    Гуронов Осмоналы Ниязович
                                </td>
                                <td>Заведующий</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996778878840
                                    guronov2021@gmail.com

                                </td>
                            </tr>
                            <tr>
                                <td>Кафедра психологии и педагогических наук</td>
                                <td>
                                    Шакеева Чинара Асановна
                                </td>
                                <td>Заведующий</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418262
                                    krao@elcat.kg
                                </td>
                            </tr>
                            <tr>
                                <td>Кафедра лингвистики и государственного языка</td>
                                <td>
                                    Кыркбаева Гульмайрам Надырбековна
                                </td>
                                <td>Заведующий</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996704735296
                                    kyrkbaevagulmairam@gmail.com

                                </td>
                            </tr>
                            <tr>
                                <td>Отдел по развитию и инновационной деятельности</td>
                                <td>
                                    Базарбаева Венера Кадыракуновна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996709662444
                                    bazarbaevakrao2021@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Отдел аспирантуры, магистратуры, докторантуры и PhD</td>
                                <td>
                                    Мамырбаева Зульфия Анарбековна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996555761311
                                    kraomamirbaeva2021@gmail.com

                                </td>
                            </tr>
                            <tr>
                                <td>Отдел управления информацией (медиацентр)</td>
                                <td>
                                    Сариева Елена Токбаевна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996555129955
                                    sarievae20@gmail.com

                                </td>
                            </tr>
                            <tr>
                                <td>Отдел маркетинга</td>
                                <td>
                                    Сыдыкбеков Уларбек Каныбекович
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996709930908
                                    sydykbekov20@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Юридическая служба</td>
                                <td>
                                    Кулматова Венера Шаарпековна
                                </td>
                                <td>юрист</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996701461658
                                    kulmatova0@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Планово-финансовый отдел</td>
                                <td>
                                    Джазымкулова Асель
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418262
                                    krao@elcat.kg
                                </td>
                            </tr>
                            <tr>
                                <td>Отдел кадров</td>
                                <td>
                                    Апрошкина Татьяна Борисовна
                                </td>
                                <td>Начальник</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996558755015
                                    borisovna20@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Отдел международного сотрудничества</td>
                                <td>
                                    Десятова Екатерина Александровна
                                </td>
                                <td>координатор</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996555168892
                                    minna771@mail.ru
                                </td>
                            </tr>
                            <tr>
                                <td>Отдел экономики, бухгалтерского учета, отчетности и контроля</td>
                                <td>
                                    Молдарынова Айгуль Кубанычбековна
                                </td>
                                <td>Начальник отдела, главный бухгалтер</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996701950551
                                    aigul.moldarynova@gmail.com

                                </td>
                            </tr>
                            <tr>
                                <td>Центр контроля качества образовательного процесса</td>
                                <td>
                                    Жылкычиева Жылдыз Сапарбековна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996508158815
                                    js_jylkychieva83@mail.ru
                                </td>
                            </tr>
                            <tr>
                                <td>Центр регионального развития</td>
                                <td>
                                    Жанабилова Бурмаш Айдарбековна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996704350044
                                    burmashjanabilova8@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Центр непрерывного образования</td>
                                <td>
                                    Горева Галина Ильинична
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418262
                                    krao@elcat.kg
                                </td>
                            </tr>
                            <tr>
                                <td>Редакционно-издательский центр</td>
                                <td>
                                    Тургунова Гулиза Алимомуновна
                                </td>
                                <td>Главный редактор</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996501484642
                                    turgunovaguliza99@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Центр технической поддержки</td>
                                <td>
                                    Сазанова Анжелика Тилековна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996709985851
                                    anzelikatilekovna@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Центр мультимедийных технологий</td>
                                <td>
                                    Привезенцев Константин Андреевич
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    тел: +996555811013
                                    privezentsev_02@mail.ru
                                </td>
                            </tr>
                            <tr>
                                <td>Центр поддержки и администрирования информационных систем</td>
                                <td>
                                    Неживых Александра Васильевна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418262
                                    krao@elcat.kg
                                </td>
                            </tr>
                            <tr>
                                <td>Лаборатория инф-вычислительной техники кафедры «ИТ и ЕТН»</td>
                                <td>
                                    Токтосунова Жанара Насирбековна
                                </td>
                                <td>Заведующий лабораторией</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418262
                                    krao@elcat.kg
                                </td>
                            </tr>
                            <tr>
                                <td>Колледж</td>
                                <td>
                                    Тулегабылова Нуржамал Мухтаровна
                                </td>
                                <td>Директор</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996558110269
                                    nurjamal1169@mail.ru
                                </td>
                            </tr>
                            <tr>
                                <td>Автошкола</td>
                                <td>
                                    Жумабеков Улан Куштарбекович
                                </td>
                                <td>Директор</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996 0708225504
                                </td>
                            </tr>
                            <tr>
                                <td>Курсы по дополнительному проф.образованию</td>
                                <td>
                                    Горева Галина Ильинична
                                </td>
                                <td>Директор</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418262
                                    krao@elcat.kg

                                </td>
                            </tr>
                            <tr>
                                <td>Отдел снабжения и эксплуатации зданий</td>
                                <td>
                                    Жумабеков Куштарбек Мамырканович
                                </td>
                                <td>Комендант</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418084
                                </td>
                            </tr>
                            <tr>
                                <td>Административно-хозяйственные службы</td>
                                <td>
                                    Сыдыкова Жаныл Турсунбековна
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418084
                                </td>
                            </tr>
                            <tr>
                                <td>Медицинский пункт</td>
                                <td>
                                    Сабаева Гулбарчын Саадашовна
                                </td>
                                <td>Мед.работник</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996704350044
                                </td>
                            </tr>
                            <tr>
                                <td>Пункт общественного питания</td>
                                <td>
                                    Катунина Анастасия Викторовна
                                </td>
                                <td>Работник общественного питания</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418084
                                </td>
                            </tr>
                            <tr>
                                <td>Служба противопожарной защиты, местной обороны и санитарно-эпидемиологического обеспечения</td>
                                <td>
                                    Жылдызбек уулу Нурадин
                                </td>
                                <td>Руководитель</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418084
                                </td>
                            </tr>
                            <tr>
                                <td>Архив</td>
                                <td>
                                    Акулуева Фариза Мукашевна
                                </td>
                                <td>Заведующий</td>
                                <td>
                                    720009, Кыргызская Республика, г.Бишкек, ул. Л. Толстого,  210
                                    Пн-Пт  9-00 – 17-00
                                </td>
                                <td>
                                    +996312418084
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        <div className="img">
            <h2>СТРУКТУРА КРАО</h2>
            <img className="structure" src={str_1} alt="str_1" />
            <img className="structure1" src={str_2} alt="str_2" />
            <img className="structure2" src={str_3} alt="str_3" />
            <img className="structure3" src={str_4} alt="str_4" />
            <img className="structure4" src={str_5} alt="str_5" />
            <img className="structure5" src={str_6} alt="str_6" />
        </div>
   </div>
    );
};
