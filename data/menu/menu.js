'use strict';

let menu = {
  'Холодные закуски': [
    {
      name: 'АССОРТИ МАРИНОВАННЫХ ГРИБОВ',
      desc: 'Вешенки, опята, шампиньоны.',
      img: 'appetizer/mashrooms.jpg',
      descEn: 'Assorted pickled mushrooms (oyster mushrooms, honey agarics, cham-pignons.',
      weight: '220',
      price: '200'
    },
    {
      name: 'ОЛИВКИ',
      desc: 'Микс из европейских оливок : соленые, вяленые, каламаты.',
      img: 'appetizer/olives.jpg',
      descEn: 'Mix of European olives: salted, dried, kala-mata.',
      price: '250',
      weight: '100'
    },
    {
      name: 'РОСТБИФ ИЗ ГОВЯЖЬЕЙ ВЫРЕЗКИ',
      desc: 'С гарниром из смеси запеченных Чили и сладкого перца с вялеными оливками.',
      img: 'appetizer/roasted.jpg',
      descEn: 'Roasted beef fillet. Side dish - baked chili and bell pepper with dried olives.',
      price: '250',
      weight: '100'
    },
    {
      name: 'ПАШТЕТ ИЗ ПТИЦЫ',
      desc: 'Нежный паштет из куриного филе, бедра индейки и куриной печени.',
      img: 'appetizer/poultry.jpg',
      descEn: '',
      price: '460',
      weight: '200'
    },
    {
      name: 'ПАРМСКИЙ ОКОРОК',
      img: 'appetizer/parma.jpg',
      desc: 'С хурмой и хрустящей зеленью.',
      descEn: 'with persimmons and crispy greens.',
      price: '430',
      weight: '180'
    },
    {
      name: 'АССОРТИ МЯСНЫХ ИЗДЕЛИЙ',
      desc: 'Утиная грудка копченая и выдержаная в бальзамическом маринаде, мраморная говяжья грудинка горячего копчения, мягкая свиная шея запеченая в специях.',
      img: 'appetizer/assorty.jpg',
      descEn: 'Smoked duck breast seasoned in balsamic marinade; hot-smoked marble beef brisket; soft pork neck baked with spices.',
      price: '1300',
      weight: '340'
    },
    {
      name: 'СЫРНАЯ ТАРЕЛКА',
      desc: 'Шевр, сыр бри с белой плесенью, грана подано, горгонзола, рикота собственного копчения.',
      img: 'appetizer/cheese.jpg',
      descEn: 'Chevre, Brie salat with white mold, Grana Padano, Gorgonzola, smoked ricotta salat and crispy greens.',
      price: '1300',
      weight: '340'
    }
  ],
  'Горячие закуски': [
    {
      name: 'МОЗГОВЫЕ КОСТИ',
      img: 'hot/bones.jpg',
      desc: 'Запеченные на гриле с луком конфи.',
      descEn: 'Marrowbones grilled with onion confit.',
      price: '480',
      weight: '450/50'
    },
    {
      name: 'МИЛЬФЕЙ',
      desc: 'С ЖУЛЬЕНОМ ИЗ КРОЛИКА',
      img: 'hot/millefeuille.jpg',
      descEn: '',
      price: '750',
      weight: '190'
    },
    {
      name: 'СЫР КАМАМБЕР ЖАРЕНЫЙ',
      desc: 'на гриле с соусом пряная клюква, бразильским орехом и миксом салата.',
      img: 'hot/camaber.jpg',
      descEn: 'Grilled Camembert salat with spicy cranberry sauce, Brazil nut and lettuce mix.',
      price: '700',
      weight: '180'
    }
  ],
  'Салаты': [
    {
      name: 'САЛАТ С ДВУМЯ СЫРАМИ',
      desc: 'С жаренным сыром Бри и сыром рикота собственного копчения. Подаем с миксом салата, вяленными томатами, песто из базилика и кедровых орехов и томатным песто.',
      img: 'salat/2cheese.jpg',
      descEn: 'Salad with fried Brie salat and smoked ricotta salat. It is served with lettuce mix, dried tomatoes, basil and pine nuts pesto and pesto.',
      price: '530',
      weight: '210'
    },
    {
      name: 'САЛАТ С ИНДЕЙКОЙ',
      img: 'salat/ind.jpg',
      desc: 'В зеленой панировке, болгарским перцем, томатом черри, соусом руй из печеных болгарских сладких перцев, соусом кинзовый айоли и миксом салата.',
      descEn: 'Salad with turkey in green breading, bell pepper, cherry tomatoes, Ruy sauce made of baked bell pepper, coriander aioli sauce and lettuce mix.',
      price: '440',
      weight: '230'
    },
    {
      name: 'САЛАТ ИЗ ФИЛЕ КРОЛИКА',
      desc: 'Обжаренном в слайсах бекона. Подаем с кус-кусом, жаренным ассорти грибов, морковно-тминовым соусом, томатами черри, оливковым маслом, слайсами моркови.',
      img: 'salat/bugs.jpg',
      descEn: 'Salad with rabbit fillet fried in bacon slices. It is served with couscous, assorted fried mushrooms, carrot and caraway sauce, cherry tomatoes, olive oil, carrot slices.',
      price: '420',
      weight: '200'
    },
    {
      name: 'САЛАТ С ПАРМОЙ И ГРУШЕЙ',
      desc: 'приготовленной методом су-вид с копченой паприкой. Подаем с песто из базилика и кедрового ореха и томатным песто.',
      img: 'salat/parm.jpg',
      descEn: 'Salad with Parma and sous-vide pears with smoked paprika. It is served with basil and pine nuts pesto and tomato pesto.',
      price: '370',
      weight: '210'
    },
    {
      name: 'САЛАТ С МРАМОРНОЙ ГОВЯДИНОЙ',
      desc: 'слайсами свежего огурца, пармезана, оливковым маслом, свежей спаржей и сырным муссом.',
      img: 'salat/salat-beef.jpg',
      descEn: 'Salad with marble beef, slices of fresh cucumber and parmesan salat, olive oil, green asparagus and salat mousse.',
      price: '680',
      weight: '185'
    }
  ],
  'Супы': [
    {
      name: 'ТОМАТНЫЙ СУП ГУЛЯШ',
      img: 'soup/gul.jpg',
      desc: 'Бульон с говядиной подается с отрубом топ Блейд и классическим набором овощей, приготовленных методом су-вид.',
      descEn: 'Tomato goulash soup (beef broth is served with a Top Blade steak and classic set of sous-vide vegetables).',
      price: '680',
      weight: '350'
    },
    {
      name: 'ГРИБНОЙ КРЕМ-СУП',
      desc: 'С жаренным ассорти грибов и молочной пеной.',
      img: 'soup/mushroom.jpg',
      descEn: 'Mushroom cream soup with fried assorted mushrooms and cream foam.',
      price: '320',
      weight: '310'
    },
    {
      name: 'КРЕМ-СУП ИЗ БЕКОНА',
      desc: 'С луком порей, яйцом, муссом из лука порей и крошкой бекона.',
      img: 'soup/bacon.jpg',
      descEn: 'Bacon cream soup with leek, eggs, leek mousse and bacon chips.',
      price: '450',
      weight: '330'
    }
  ],
  'Хлеб': [
    {
      name: 'БРУСКЕТЫ',
      desc: 'С ТОМАТАМИ',
      img: 'bread/tomato.jpg',
      descEn: 'Tomato bruschetta.',
      price: '350',
      weight: '170'
    },
    {
      name: 'БРУСКЕТЫ',
      desc: 'С МЯСНЫМ АССОРТИ',
      img: 'bread/meat.jpg',
      descEn: 'Assorted meat bruschetta.',
      price: '500',
      weight: '150'
    }
  ],
  'Основные Блюда': [
    {
      name: 'КАРЕ ЯГНЕНКА',
      desc: 'C печеным шафрановым картофелем, муссом лук порей и соусом Дольче форте.',
      img: 'second/rackoflamb.jpg',
      descEn: 'Rack of lamb with baked saffron potato, leek mousse and Dolce Forte sauce.',
      price: '1600',
      weight: '390'
    },
    {
      name: 'ПРЯНЫЙ БАРАШЕК',
      desc: 'В дополнении булгура с вялеными томатами и соусом песто.',
      img: 'second/spicylamb.jpg',
      descEn: 'Spicy lamb with bulgur and dried tomatoes and pesto.',
      price: '950',
      weight: '370'
    },
    {
      name: 'ГОВЯЖЬИ РЕБРЫШКИ ГОРЯЧЕГО КОПЧЕНИЯ',
      desc: 'С соусом вишневый Деми глясс, запеченной свеклой и свекольным соусом.',
      img: 'second/smokedbeef.jpg',
      descEn: 'Hot smoked beef ribs with cherry demi-glace sauce,baked beet and beet sauce.',
      price: '1690',
      weight: '570'
    },
    {
      name: 'РУЛЬКА СВИНАЯ',
      desc: 'С ГАРНИРОМ ИЗ ТУШЕННОЙ В СЛИВКАХ СВЕКЛЕ С ГРЕЦКИМИ ОРЕХАМИ',
      img: 'second/pig.jpg',
      descEn: 'Pork knuckle. Side dish: beet stewed in cream with walnuts.',
      price: '1450',
      weight: '1000'
    },
    {
      name: 'ГОВЯЖЬИ ХВОСТЫ',
      desc: 'C соусом Деми Глясс, миксом овощей на гриле и копчёным сыром Риккота.',
      img: 'second/tails.jpg',
      descEn: 'Beef tails Demi iced sauce, mix vegetables grilled and smoked salat Rikkota.',
      price: '750',
      weight: '580'
    }
  ],
  'Бургеры': [
    {
      name: 'БУРГЕР С БАРАНИНОЙ',
      desc: 'С котлетой из баранины, салатом из печенного перца, красным луком, сыром сулугуни и соусом кинзовый айоле с добавлением соуса из 5 перцев.',
      img: 'burgers/lamp.jpg',
      descEn: 'Burger with lamb cutlet, baked peppers salad, red onion, Suluguni salat, coriander aioli sauce with five peppers sauce.',
      price: '830',
      weight: '300'
    },
    {
      name: 'БУРГЕР С ГОВЯДИНОЙ',
      desc: 'С рубленной котлетой из мраморной говядины, луком конфи, беконом, свежими ломтиками помидора и 2 соусами: Дольче Форте и Сальса.',
      img: 'burgers/beef.jpg',
      descEn: 'Burger with minced marble beef cutlet, onion confit, bacon, fresh tomato slices and two sauces: Dolce Forte and Salsa.',
      price: '950',
      weight: '470'
    },
    {
      name: 'БУРГЕР С КРЕВЕТКОЙ',
      desc: 'С котлетой из тигровых креветок, миксом салата, соусом вассаби, сыром пармезан и соусом гуакомоле.',
      img: 'burgers/shrimp.jpg',
      descEn: 'Burger with tiger shrimp steak, lettuce mix, wasabi sauce, parmesan salat and guacamole sauce.',
      price: '1050',
      weight: '280'
    }
  ],
  'Стейки': [
    {
      name: 'ТОМАГАВК',
      desc: 'Стейк Томагавк — это рибай на кости, у которого реберная кость сохранена почти полностью. Имеет насыщенный говяжий аромат и превосходную мраморную текстуру. По праву считается одним из самых нежных и сочных стейков',
      img: 'steak/tom.jpg',
      descEn: '',
      price: '790',
      weight: '100'
    },
    {
      name: 'РИБАЙ',
      desc: 'Обилие жировых прослоек, которые при жарке быстро тают, делает рибай самым премиальным и сочным из всех стейков.',
      img: 'steak/ribei.jpg',
      descEn: '',
      price: '1000',
      weight: '100'
    },
    {
      name: 'ФИЛЕ МИНЬОН',
      desc: 'Является самым нежным стейком. Постное, «элегант- ное» и изысканное мясо самого высокого качества. Прекрасная маслянистая текстура и нежный аромат.',
      img: 'steak/minion.jpg',
      descEn: '',
      price: '890',
      weight: '100'
    },
    {
      name: 'ШАТО БРИАН',
      desc: 'Толстый край центральной части говяжьей вырезки. Считается самым аристократическим стейком.',
      img: 'steak/briand.jpg',
      descEn: '',
      price: '860',
      weight: '100'
    },
    {
      name: 'ТИ БОН',
      desc: 'Получил свое название по виду мяса на т-образной кости. Он состоит из двух частей — филе-миньона и стриплойна, образуя необычную комбинацию двух вкусов.',
      img: 'steak/tibon.jpg',
      descEn: '',
      price: '750',
      weight: '100'
    },
    {
      name: 'СТРИПЛОЙН',
      desc: 'Тонкий филейный край, который состоит из крупных, нежных волокон и обладает более концентрированным и ярким говяжьим вкусом, за что его часто считают традиционно «мужским» блюдом.',
      img: 'steak/striploin.jpg',
      descEn: '',
      price: '720',
      weight: '100'
    }
  ],
  'Рыбные Блюда': [
    {
      name: 'УСТРИЦЫ',
      desc: '',
      descEn: '',
      price: '550',
      weight: '1',
      unit: 'шт'
    },
    {
      name: 'СИБАС НА ГРИЛЕ',
      desc: '',
      descEn: '',
      price: '450',
      weight: '100'
    },
    {
      name: 'ДОРАДО НА ГРИЛЕ',
      desc: '',
      descEn: '',
      price: '420',
      weight: '100'
    },
    {
      name: 'ФОРЕЛЬ НА ГРИЛЕ',
      desc: '',
      descEn: '',
      price: '370',
      weight: '100',
    }
  ]
}

module.exports = menu;