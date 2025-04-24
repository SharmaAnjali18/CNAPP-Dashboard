import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../features/widgets/widgetSlice';

const AddWidgetModal = ({ category, onClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [textData, setTextData] = useState('');
  const [labels, setLabels] = useState('');
  const [values, setValues] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let data;
    if (type === 'text') {
      data = { text: textData };
    } else {
      data = {
        labels: labels.split(',').map((l) => l.trim()),
        values: values.split(',').map((v) => parseInt(v.trim())),
      };
    }

    dispatch(addWidget({ category, widget: { name, type, data } }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow">
        <h2 className="text-lg font-bold mb-4">Add Widget to "{category}"</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Widget Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="text">Text</option>
            <option value="pie">Pie Chart</option>
            <option value="bar">Bar Chart</option>
          </select>

          {type === 'text' ? (
            <textarea
              placeholder="Enter text..."
              value={textData}
              onChange={(e) => setTextData(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          ) : (
            <>
              <input
                type="text"
                placeholder="Labels (comma-separated)"
                value={labels}
                onChange={(e) => setLabels(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Values (comma-separated)"
                value={values}
                onChange={(e) => setValues(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </>
          )}

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-gray-500 px-4 py-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;
