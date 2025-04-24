import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    'CSPM Executive Dashboard': [
      {
        id: nanoid(),
        type: 'pie',
        name: 'Cloud Accounts',
        data: {
          labels: ['Connected', 'Not Connected'],
          values: [2, 2],
        },
      },
      {
        id: nanoid(),
        type: 'pie',
        name: 'Cloud Account Risk Assessment',
        data: {
          labels: ['Failed', 'Warning', 'Not available', 'Passed'],
          values: [1859, 680, 36, 7251],
        },
      },
    ],
    'CWPP Dashboard': [],
    'Registry Scan': [],
  },
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { category, widget } = action.payload;
      state.categories[category].push({ ...widget, id: nanoid() });
    },
    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      state.categories[category] = state.categories[category].filter(
        (widget) => widget.id !== widgetId
      );
    },
  },
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
