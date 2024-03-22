import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectPackage({packs,onChangePack,width=300}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([packs[0]?.size]);

  React.useEffect(() => {
    setPersonName([packs[0]?.size])
  }, [packs])
  

  const handleChange = (event) => {
    packs.forEach(element => {
        if (element.size == event.target.value) {
            onChangePack(element.price)
        }
    });
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: width }}>
        <InputLabel id="demo-multiple-chip-label">Select</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          defaultValue={packs[0]?.size}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value,id) => (
                <Chip key={id} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {packs.map((name) => (
            <MenuItem
              key={name?.size}
              value={name?.size}
              style={getStyles(name?.size, personName, theme)}
              onChange={()=>onChangePack(name?.price)}
            >
              {name?.size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}