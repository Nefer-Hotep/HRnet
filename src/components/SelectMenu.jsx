import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';

SelectMenu.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

function SelectMenu({ label, name, value, options, handleChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={label + 'Id'}>{label}</InputLabel>
      <Select
        labelId={label + 'Id'}
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMenu;

