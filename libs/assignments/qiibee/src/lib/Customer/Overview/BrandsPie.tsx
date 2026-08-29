import dynamic from 'next/dynamic';

const Pie = dynamic(
  () => import('@ant-design/charts').then(mod => mod.Pie),
  { ssr: false },
);


const DemoPie = () => {
  const data: any = [
    {
      type: 'Category One',
      value: 27,
    },
    {
      type: 'Category Two',
      value: 25,
    },
    {
      type: 'Category Three',
      value: 18,
    },
    {
      type: 'Category Four',
      value: 15,
    },
    {
      type: 'Category Five',
      value: 10,
    },
    {
      type: 'other',
      value: 5,
    },
  ];

  const config: any = {
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    // v2 (G2 5): label.type/content -> label.text/position; appendPadding and
    // the interactions array are dropped (element/legend interactions are on by default).
    label: {
      text: 'type',
      position: 'outside',
    },
  };

  return <Pie {...config} />;
};

export default DemoPie;
