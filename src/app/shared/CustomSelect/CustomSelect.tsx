import React from 'react';
import Select, { ControlProps, StylesConfig } from 'react-select';

interface CustomSelectProps {
  options: {
    value: number;
    label: string;
  }[];
  placeholder: string;
  field?: any;
}

export const CustomSelect = (props: CustomSelectProps) => {
  const { options, placeholder, field } = props;
  const colorStyles: StylesConfig = {
    control: (styles, state: ControlProps) => ({
      ...styles,
      borderRadius: 0,
      border: state.isFocused ? '1px solid #4D5053' : '1px solid #cccccc',
      boxShadow: state.isFocused ? '0px 0px 2px #4D5053' : 'none',
      '&:hover': {
        border: '1px solid #4D5053',
        boxShadow: '0px 0px 2px #4D5053',
      },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      color: '#4D5053',
      '&:hover': {
        color: '#4D5053',
      },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? '#4d5053cd'
          : isFocused
          ? '#a5a5a5'
          : undefined,
        color: isDisabled ? '#ccc' : isSelected ? 'white' : '#292F36',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled ? (isSelected ? '#4D5053' : '#4D5053') : undefined,
        },
      };
    },
    placeholder: (styles) => ({ ...styles, color: '#4D5053' }),
  };

  return <Select {...field} options={options} styles={colorStyles} isClearable placeholder={placeholder} />;
};
