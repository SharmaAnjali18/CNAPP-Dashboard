import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ name, widgets }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3">{name}</h2>
      <div className="flex flex-wrap gap-4">
        {widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} category={name} />
        ))}

        <button
          className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded shadow"
          onClick={() => setShowModal(true)}
        >
          + Add Widget
        </button>
      </div>

      {showModal && <AddWidgetModal category={name} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Category;
