import { BiSolidLeaf } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiAustralia, GiNoodles, GiTacos, GiTurban } from "react-icons/gi";
import { IoScale } from "react-icons/io5";
import { PiBarbellFill, PiGrainsFill } from "react-icons/pi";

export const sortAndFilters = [
  {
    title: 'Sort',
    paramKey: 'sort',
    type: 'radio',
    options: [
      { label: 'Top sellers', slug: 'top-sellers' },
      { label: 'New', slug: 'new' },
      { label: 'Price (Low to High)', slug: 'price-low-to-high' },
      { label: 'Price (High to Low)', slug: 'price-high-to-low' },
      { label: 'Calories (Low to High)', slug: 'calories-low-to-high' },
      { label: 'Calories (High to Low)', slug: 'calories-high-to-low' },
      { label: 'Protein (Low to High)', slug: 'protein-low-to-high' },
      { label: 'Protein (High to Low)', slug: 'protein-high-to-low' },
      { label: 'Carbs (Low to High)', slug: 'carbs-low-to-high' },
      { label: 'Carbs (High to Low)', slug: 'carbs-high-to-low' },
      { label: 'Name A-Z', slug: 'name-az' },
    ],
  },
  {
    title: 'Preferences',
    paramKey: 'preferences',
    type: 'checkbox',
    options: [
      { label: 'Low Calorie', slug: 'low-calorie', icon: IoScale },
      { label: 'Low Carb', slug: 'low-carb', icon: PiGrainsFill },
      { label: 'Muscle Building', slug: 'muscle-building', icon: PiBarbellFill },
      { label: 'Plant Based', slug: 'plant-based', icon: BiSolidLeaf },
      { label: 'Italian', slug: 'italian', icon: FaPizzaSlice },
      { label: 'Asian', slug: 'asian', icon: GiNoodles },
      { label: 'Aussie Classics', slug: 'aussie-classics', icon: GiAustralia },
      { label: 'Mexican', slug: 'mexican', icon: GiTacos },
      { label: 'Indian', slug: 'indian', icon: GiTurban },
    ],
  },
  {
    title: 'Protein Type',
    paramKey: 'proteinType',
    type: 'checkbox',
    options: [
      { label: 'Beef', slug: 'beef' },
      { label: 'Chicken', slug: 'chicken' },
      { label: 'Lamb', slug: 'lamb' },
      { label: 'Pork', slug: 'pork' },
      { label: 'Turkey', slug: 'turkey' },
      { label: 'Kangaroo', slug: 'kangaroo' },
      { label: 'Vegetarian', slug: 'vegetarian' },
    ],
  },
  {
    title: 'Carbs',
    paramKey: 'carbs',
    type: 'checkbox',
    options: [
      { label: '<20g', slug: 'lt20g' },
      { label: '20–40g', slug: '20-40g' },
      { label: '>40g', slug: 'gt40g' },
    ],
  },
  {
    title: 'Calories',
    paramKey: 'calories',
    type: 'checkbox',
    options: [
      { label: '<400', slug: 'lt400' },
      { label: '400–500', slug: '400-500' },
      { label: '>500', slug: 'gt500' },
    ],
  },
  {
    title: 'Dietary',
    paramKey: 'dietary',
    type: 'checkbox',
    options: [
      { label: 'No Added Dairy', slug: 'no-added-dairy' },
      { label: 'No Added Eggs', slug: 'no-added-eggs' },
      { label: 'No Added Gluten', slug: 'no-added-gluten' },
      { label: 'No Added Nuts', slug: 'no-added-nuts' },
      { label: 'No Added Seafood', slug: 'no-added-seafood' },
    ],
  },
] as const;

export const DEFAULT_FILTER_VALUES = {
  sort: 'top-sellers',
  preferences: [],
  proteinType: [],
  carbs: [],
  calories: [],
  dietary: [],
} as const;