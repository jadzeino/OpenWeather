import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type UnitsToggleButtonProps = {
  values: string[];
  selectedValue: string;
  handleChange: (newValue: string) => void;
};

const ToggleButtonSet: React.FC<UnitsToggleButtonProps> = ({ values, selectedValue, handleChange }) => {
  const handleToggleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue) {
      handleChange(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedValue}
      exclusive
      onChange={handleToggleChange}
      aria-label="units"
    >
      {values.map(value => (
        <ToggleButton key={value} value={value} aria-label={value} color='primary'>
          {value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ToggleButtonSet;