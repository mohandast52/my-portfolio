import dynamic from 'next/dynamic';

const Pie = dynamic(
  () => import('@ant-design/charts').then(mod => mod.Pie),
  { ssr: false },
);


const DemoPie = () => {
  const data = [
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

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };

  return <Pie {...config} />;
};

export default DemoPie;
