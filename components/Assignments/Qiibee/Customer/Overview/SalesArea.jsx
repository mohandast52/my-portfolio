import dynamic from 'next/dynamic';

const Area = dynamic(
  () => import('@ant-design/charts').then(mod => mod.Area),
  { ssr: false },
);

const DATA = [
  {
    Date: '2013-01',
    scales: 1255,
  },
  {
    Date: '2013-02',
    scales: 1429,
  },
  {
    Date: '2013-03',
    scales: 1398,
  },
  {
    Date: '2013-04',
    scales: 1678,
  },
  {
    Date: '2013-05',
    scales: 1524,
  },
  {
    Date: '2013-06',
    scales: 1688,
  },
  {
    Date: '2013-07',
    scales: 1500,
  },
  {
    Date: '2013-08',
    scales: 1670,
  },
  {
    Date: '2013-09',
    scales: 1734,
  },
  {
    Date: '2013-10',
    scales: 1699,
  },
  {
    Date: '2013-11',
    scales: 1508,
  },
  {
    Date: '2013-12',
    scales: 1680,
  },
  {
    Date: '2014-01',
    scales: 1750,
  },
  {
    Date: '2014-02',
    scales: 1602,
  },
  {
    Date: '2014-03',
    scales: 1834,
  },
  {
    Date: '2014-04',
    scales: 1722,
  },
  {
    Date: '2014-05',
    scales: 1430,
  },
  {
    Date: '2014-06',
    scales: 1280,
  },
  {
    Date: '2014-07',
    scales: 1367,
  },
  {
    Date: '2014-08',
    scales: 1155,
  },
  {
    Date: '2014-09',
    scales: 1289,
  },
  {
    Date: '2014-10',
    scales: 1104,
  },
  {
    Date: '2014-11',
    scales: 1246,
  },
  {
    Date: '2014-12',
    scales: 1098,
  },
  {
    Date: '2015-01',
    scales: 1189,
  },
  {
    Date: '2015-02',
    scales: 1276,
  },
  {
    Date: '2015-03',
    scales: 1033,
  },
  {
    Date: '2015-04',
    scales: 956,
  },
  {
    Date: '2015-05',
    scales: 845,
  },
  {
    Date: '2015-06',
    scales: 1089,
  },
  {
    Date: '2015-07',
    scales: 944,
  },
  {
    Date: '2015-08',
    scales: 1043,
  },
  {
    Date: '2015-09',
    scales: 893,
  },
  {
    Date: '2015-10',
    scales: 840,
  },
  {
    Date: '2015-11',
    scales: 934,
  },
  {
    Date: '2015-12',
    scales: 810,
  },
  {
    Date: '2016-01',
    scales: 782,
  },
  {
    Date: '2016-02',
    scales: 1089,
  },
  {
    Date: '2016-03',
    scales: 745,
  },
  {
    Date: '2016-04',
    scales: 680,
  },
  {
    Date: '2016-05',
    scales: 802,
  },
  {
    Date: '2016-06',
    scales: 697,
  },
  {
    Date: '2016-07',
    scales: 583,
  },
  {
    Date: '2016-08',
    scales: 456,
  },
  {
    Date: '2016-09',
    scales: 524,
  },
  {
    Date: '2016-10',
    scales: 398,
  },
  {
    Date: '2016-11',
    scales: 278,
  },
  {
    Date: '2016-12',
    scales: 195,
  },
  {
    Date: '2017-01',
    scales: 145,
  },
  {
    Date: '2017-02',
    scales: 207,
  },
];

const DemoArea = () => {
  const config = {
    data: DATA,
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    /*
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: { isArea: true },
    },
    */
  };

  return <Area {...config} />;
};

export default DemoArea;
