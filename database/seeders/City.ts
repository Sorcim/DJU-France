import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import City from 'App/Models/City'

export default class CitySeeder extends BaseSeeder {
  public async run() {
    await City.createMany([
      {
        departmentNumber: '01',
        departmentName: 'Ain',
        owId: '3038422',
      },
      {
        departmentNumber: '02',
        departmentName: 'Aisne',
        owId: '3038375',
      },
      {
        departmentNumber: '03',
        departmentName: 'Allier',
        owId: '3038114',
      },
      {
        departmentNumber: '04',
        departmentName: 'Alpes-de-Haute-Provence',
        owId: '3038050',
      },
      {
        departmentNumber: '05',
        departmentName: 'Hautes-Alpes',
        owId: '3013738',
      },
      {
        departmentNumber: '06',
        departmentName: 'Alpes-Maritimes',
        owId: '3038049',
      },
      {
        departmentNumber: '07',
        departmentName: 'Ardèche',
        owId: '3037147',
      },
      {
        departmentNumber: '08',
        departmentName: 'Ardennes',
        owId: '3037136',
      },
      {
        departmentNumber: '09',
        departmentName: 'Ariège',
        owId: '3036965',
      },
      {
        departmentNumber: '10',
        departmentName: 'Aube',
        owId: '3036420',
      },
      {
        departmentNumber: '11',
        departmentName: 'Aude',
        owId: '3036264',
      },
      {
        departmentNumber: '12',
        departmentName: 'Aveyron',
        owId: '3035691',
      },
      {
        departmentNumber: '13',
        departmentName: 'Bouches-du-Rhône',
        owId: '3031359',
      },
      {
        departmentNumber: '14',
        departmentName: 'Calvados',
        owId: '3029094',
      },
      {
        departmentNumber: '15',
        departmentName: 'Cantal',
        owId: '3028791',
      },
      {
        departmentNumber: '16',
        departmentName: 'Charente',
        owId: '3026646',
      },
      {
        departmentNumber: '17',
        departmentName: 'Charente-Maritime',
        owId: '3026644',
      },
      {
        departmentNumber: '18',
        departmentName: 'Cher',
        owId: '3025480',
      },
      {
        departmentNumber: '19',
        departmentName: 'Corrèze',
        owId: '3023534',
      },
      {
        departmentNumber: '20',
        departmentName: 'Corse',
        owId: '3023519',
      },
      {
        departmentNumber: '21',
        departmentName: "Côte-d'Or",
        owId: '3023423',
      },
      {
        departmentNumber: '22',
        departmentName: "Côtes-d'Armor",
        owId: '3023414',
      },
      {
        departmentNumber: '23',
        departmentName: 'Creuse',
        owId: '3022516',
      },
      {
        departmentNumber: '24',
        departmentName: 'Dordogne',
        owId: '3021042',
      },
      {
        departmentNumber: '25',
        departmentName: 'Doubs',
        owId: '3020991',
      },
      {
        departmentNumber: '26',
        departmentName: 'Drôme',
        owId: '3020781',
      },
      {
        departmentNumber: '27',
        departmentName: 'Eure',
        owId: '3019317',
      },
      {
        departmentNumber: '28',
        departmentName: 'Eure-et-Loir',
        owId: '3019316',
      },
      {
        departmentNumber: '29',
        departmentName: 'Finistère',
        owId: '3018471',
      },
      {
        departmentNumber: '30',
        departmentName: 'Gard',
        owId: '3016670',
      },
      {
        departmentNumber: '31',
        departmentName: 'Haute-Garonne',
        owId: '3013767',
      },
      {
        departmentNumber: '32',
        departmentName: 'Gers',
        owId: '3016194',
      },
      {
        departmentNumber: '33',
        departmentName: 'Gironde',
        owId: '3015948',
      },
      {
        departmentNumber: '34',
        departmentName: 'Hérault',
        owId: '3013500',
      },
      {
        departmentNumber: '35',
        departmentName: 'Ille-et-Vilaine',
        owId: '3012849',
      },
      {
        departmentNumber: '36',
        departmentName: 'Indre',
        owId: '3012805',
      },
      {
        departmentNumber: '37',
        departmentName: 'Indre-et-Loire',
        owId: '3012804',
      },
      {
        departmentNumber: '38',
        departmentName: 'Isère',
        owId: '3012715',
      },
      {
        departmentNumber: '39',
        departmentName: 'Jura',
        owId: '3012051',
      },
      {
        departmentNumber: '40',
        departmentName: 'Landes',
        owId: '3007866',
      },
      {
        departmentNumber: '41',
        departmentName: 'Loir-et-Cher',
        owId: '2997856',
      },
      {
        departmentNumber: '42',
        departmentName: 'Loire ',
        owId: '2997870',
      },
      {
        departmentNumber: '43',
        departmentName: 'Haute-Loire',
        owId: '3013760',
      },
      {
        departmentNumber: '44',
        departmentName: 'Loire-Atlantique',
        owId: '2997861',
      },
      {
        departmentNumber: '45',
        departmentName: 'Loiret',
        owId: '2997857',
      },
      {
        departmentNumber: '46',
        departmentName: 'Lot',
        owId: '2997524',
      },
      {
        departmentNumber: '47',
        departmentName: 'Lot-et-Garonne',
        owId: '2997523',
      },
      {
        departmentNumber: '48',
        departmentName: 'Lozère',
        owId: '2997288',
      },
      {
        departmentNumber: '49',
        departmentName: 'Maine-et-Loire',
        owId: '2996663',
      },
      {
        departmentNumber: '50',
        departmentName: 'Manche',
        owId: '2996268',
      },
      {
        departmentNumber: '51',
        departmentName: 'Marne',
        owId: '2995603',
      },
      {
        departmentNumber: '52',
        departmentName: 'Haute-Marne',
        owId: '3013757',
      },
      {
        departmentNumber: '53',
        departmentName: 'Mayenne',
        owId: '2994932',
      },
      {
        departmentNumber: '54',
        departmentName: 'Meurthe-et-Moselle',
        owId: '2994111',
      },
      {
        departmentNumber: '55',
        departmentName: 'Meuse',
        owId: '2994106',
      },
      {
        departmentNumber: '56',
        departmentName: 'Morbihan',
        owId: '2991879',
      },
      {
        departmentNumber: '57',
        departmentName: 'Moselle',
        owId: '2991627',
      },
      {
        departmentNumber: '58',
        departmentName: 'Nièvre',
        owId: '2990371',
      },
      {
        departmentNumber: '59',
        departmentName: 'Nord',
        owId: '2990129',
      },
      {
        departmentNumber: '60',
        departmentName: 'Oise',
        owId: '2989663',
      },
      {
        departmentNumber: '61',
        departmentName: 'Orne',
        owId: '2989247',
      },
      {
        departmentNumber: '62',
        departmentName: 'Pas-de-Calais',
        owId: '2988430',
      },
      {
        departmentNumber: '63',
        departmentName: 'Puy-de-Dôme',
        owId: '2984986',
      },
      {
        departmentNumber: '64',
        departmentName: 'Pyrénées-Atlantiques',
        owId: '2984887',
      },
      {
        departmentNumber: '65',
        departmentName: 'Hautes-Pyrénées',
        owId: '3013726',
      },
      {
        departmentNumber: '66',
        departmentName: 'Pyrénées-Orientales',
        owId: '2984885',
      },
      {
        departmentNumber: '67',
        departmentName: 'Bas-Rhin',
        owId: '3034720',
      },
      {
        departmentNumber: '68',
        departmentName: 'Haut-Rhin',
        owId: '3013663',
      },
      {
        departmentNumber: '69',
        departmentName: 'Rhône',
        owId: '2987410',
      },
      {
        departmentNumber: '70',
        departmentName: 'Haute-Saône',
        owId: '3013737',
      },
      {
        departmentNumber: '71',
        departmentName: 'Saône-et-Loire',
        owId: '2976082',
      },
      {
        departmentNumber: '72',
        departmentName: 'Sarthe',
        owId: '2975926',
      },
      {
        departmentNumber: '73',
        departmentName: 'Savoie',
        owId: '3036015',
      },
      {
        departmentNumber: '74',
        departmentName: 'Haute-Savoie',
        owId: '3013736',
      },
      {
        departmentNumber: '75',
        departmentName: 'Paris',
        owId: '2988507',
      },
      {
        departmentNumber: '76',
        departmentName: 'Seine-Maritime',
        owId: '2975248',
      },
      {
        departmentNumber: '77',
        departmentName: 'Seine-et-Marne',
        owId: '2975249',
      },
      {
        departmentNumber: '78',
        departmentName: 'Yvelines',
        owId: '2967196',
      },
      {
        departmentNumber: '79',
        departmentName: 'Deux-Sèvres',
        owId: '3021501',
      },
      {
        departmentNumber: '80',
        departmentName: 'Somme',
        owId: '2974304',
      },
      {
        departmentNumber: '81',
        departmentName: 'Tarn',
        owId: '2973362',
      },
      {
        departmentNumber: '82',
        departmentName: 'Tarn-et-Garonne',
        owId: '2973357',
      },
      {
        departmentNumber: '83',
        departmentName: 'Var',
        owId: '2970749',
      },
      {
        departmentNumber: '84',
        departmentName: 'Vaucluse',
        owId: '2970554',
      },
      {
        departmentNumber: '85',
        departmentName: 'Vendée',
        owId: '2970140',
      },
      {
        departmentNumber: '86',
        departmentName: 'Vienne',
        owId: '2969280',
      },
      {
        departmentNumber: '87',
        departmentName: 'Haute-Vienne',
        owId: '3013719',
      },
      {
        departmentNumber: '88',
        departmentName: 'Vosges',
        owId: '2967681',
      },
      {
        departmentNumber: '89',
        departmentName: 'Yonne',
        owId: '2967222',
      },
      {
        departmentNumber: '90',
        departmentName: 'Territoire de Belfort',
        owId: '3033789',
      },
      {
        departmentNumber: '91',
        departmentName: 'Essonne',
        owId: '3019599',
      },
      {
        departmentNumber: '92',
        departmentName: 'Hauts-de-Seine',
        owId: '3013657',
      },
      {
        departmentNumber: '93',
        departmentName: 'Seine-Saint-Denis',
        owId: '2975246',
      },
      {
        departmentNumber: '94',
        departmentName: 'Val-de-Marne',
        owId: '2971090',
      },
      {
        departmentNumber: '95',
        departmentName: "Val-d'Oise",
        owId: '2971071',
      },
      {
        departmentNumber: '971',
        departmentName: 'Guadeloupe',
        owId: '6690363',
      },
      {
        departmentNumber: '972',
        departmentName: 'Martinique',
        owId: '3570311',
      },
      {
        departmentNumber: '973',
        departmentName: 'Guyane',
        owId: '6690605',
      },
      {
        departmentNumber: '974',
        departmentName: 'La Réunion',
        owId: '935317',
      },
      {
        departmentNumber: '976',
        departmentName: 'Mayotte',
        owId: '1024031',
      },
    ])
  }
}
