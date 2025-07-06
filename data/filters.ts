export const filters = [
  {
    title: 'Sort',
    type: 'radio',
    options: [
      'Featured',
      'Top sellers',
      'Most liked',
      'New',
      'Price (Low to High)',
      'Price (High to Low)',
      'Calories (Low to High)',
      'Calories (High to Low)',
      'Protein (Low to High)',
      'Protein (High to Low)',
      'Carbs (Low to High)',
      'Carbs (High to Low)',
      'Name A-Z',
    ],
  },
  {
    title: 'Preferences',
    type: 'checkbox',
    options: ['Keto', 'Vegan', 'Dairy-Free'],
  },
  {
    title: 'Protein Type',
    type: 'checkbox',
    options: ['Chicken', 'Beef', 'Plant'],
  },
  {
    title: 'Carbs',
    type: 'checkbox',
    options: ['<20g', '20–40g', '>40g'],
  },
  {
    title: 'Calories',
    type: 'checkbox',
    options: ['<300', '300–500', '>500'],
  },
  {
    title: 'Dietary',
    type: 'checkbox',
    options: ['Gluten-Free', 'No Added Sugar'],
  },
] as const;
