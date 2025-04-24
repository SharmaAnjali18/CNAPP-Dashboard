import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/widgets/widgetSlice';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#E91E63'];

const Widget = ({ widget, category }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ category, widgetId: widget.id }));
  };

  const chartData =
    widget.data?.labels?.map((label, index) => ({
      name: label,
      value: widget.data.values[index],
    })) || [];

  return (
    <div className="bg-white rounded-xl p-4 shadow w-full max-w-md relative">
      <button
        className="absolute top-2 right-3 text-red-500 text-lg"
        onClick={handleRemove}
      >
        ×
      </button>
      <h4 className="text-lg font-semibold mb-2">{widget.name}</h4>

      {widget.type === 'text' && <p>{widget.data?.text || 'No content'}</p>}

      {widget.type === 'pie' && (
        <PieChart width={200} height={200}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
            label
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}

      {widget.type === 'bar' && (
        <BarChart width={250} height={200} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#00C49F" />
        </BarChart>
      )}
    </div>
  );
};

export default Widget;
