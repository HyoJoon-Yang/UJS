import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'
import useUser from 'src/lib/useUser';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: '올해의 성장',
    },
  },
};

const labels = ['1월', '2월', '3월', '4월', '5월', '6월', '7월'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'User name의 점수',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: '#609966',
//       backgroundColor: '#9DC08B',
//     },
//     // {
//     //   label: 'Dataset 2',
//     //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//     //   borderColor: 'rgb(53, 162, 235)',
//     //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     // },
//   ],
// };

export default function AccountUserChart() {
  const { user } = useUser();
  const data = {
    labels,
    datasets: [
      {
        label: `${user?.nickname}님의 점수`,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#609966",
        backgroundColor: "#9DC08B",
      },
    ],
  };
  return <Line options={options} data={data} />;
}