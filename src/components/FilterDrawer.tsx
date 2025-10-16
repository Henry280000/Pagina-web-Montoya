import React from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import {
  Close,
  ExpandMore,
  FilterList,
} from '@mui/icons-material';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  setCategory,
  setPriceRange,
  setSizes,
  setColors,
  resetFilters,
} from '../store/filtersSlice';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const categories = [
    'Vestidos',
    'Blusas',
    'Pantalones',
    'Faldas',
    'Abrigos',
    'Chaquetas',
    'Accesorios',
    'Zapatos',
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { name: 'Negro', hex: '#000000' },
    { name: 'Blanco', hex: '#FFFFFF' },
    { name: 'Dorado', hex: '#d4af37' },
    { name: 'Plata', hex: '#C0C0C0' },
    { name: 'Rojo', hex: '#DC143C' },
    { name: 'Azul', hex: '#4169E1' },
    { name: 'Verde', hex: '#228B22' },
    { name: 'Rosa', hex: '#FF69B4' },
  ];

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];
    dispatch(setCategory(newCategories));
  };

  const handleSizeChange = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    dispatch(setSizes(newSizes));
  };

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    dispatch(setColors(newColors));
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    const [min, max] = newValue as number[];
    dispatch(setPriceRange({ min, max }));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const activeFiltersCount =
    filters.category.length +
    filters.sizes.length +
    filters.colors.length +
    (filters.priceRange.min !== 0 || filters.priceRange.max !== 10000 ? 1 : 0);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '85%', sm: 350 },
          backgroundColor: '#fafafa',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FilterList />
            <Typography variant="h6" fontWeight={600}>
              Filtros
            </Typography>
            {activeFiltersCount > 0 && (
              <Chip
                label={activeFiltersCount}
                size="small"
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'black',
                  fontWeight: 600,
                }}
              />
            )}
          </Box>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>

        {/* Filters */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
          {/* Categorías */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>Categoría</Typography>
              {filters.category.length > 0 && (
                <Chip
                  label={filters.category.length}
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {categories.map((category) => (
                  <FormControlLabel
                    key={category}
                    control={
                      <Checkbox
                        checked={filters.category.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        sx={{
                          color: 'primary.main',
                          '&.Mui-checked': {
                            color: 'secondary.main',
                          },
                        }}
                      />
                    }
                    label={category}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 1 }} />

          {/* Rango de Precio */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>Precio</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ px: 1 }}>
                <Typography variant="body2" gutterBottom>
                  ${filters.priceRange.min} - ${filters.priceRange.max} MXN
                </Typography>
                <Slider
                  value={[filters.priceRange.min, filters.priceRange.max]}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10000}
                  step={100}
                  sx={{
                    color: 'secondary.main',
                    '& .MuiSlider-thumb': {
                      backgroundColor: 'secondary.main',
                    },
                  }}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 1 }} />

          {/* Tallas */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>Talla</Typography>
              {filters.sizes.length > 0 && (
                <Chip
                  label={filters.sizes.length}
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {sizes.map((size) => (
                  <Chip
                    key={size}
                    label={size}
                    onClick={() => handleSizeChange(size)}
                    variant={filters.sizes.includes(size) ? 'filled' : 'outlined'}
                    sx={{
                      backgroundColor: filters.sizes.includes(size)
                        ? 'secondary.main'
                        : 'transparent',
                      color: filters.sizes.includes(size) ? 'black' : 'inherit',
                      borderColor: 'secondary.main',
                      fontWeight: filters.sizes.includes(size) ? 600 : 400,
                      '&:hover': {
                        backgroundColor: filters.sizes.includes(size)
                          ? 'secondary.dark'
                          : 'rgba(212, 175, 55, 0.1)',
                      },
                    }}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 1 }} />

          {/* Colores */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>Color</Typography>
              {filters.colors.length > 0 && (
                <Chip
                  label={filters.colors.length}
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {colors.map((color) => (
                  <Box
                    key={color.name}
                    onClick={() => handleColorChange(color.name)}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: color.hex,
                      border: filters.colors.includes(color.name)
                        ? '3px solid'
                        : '2px solid',
                      borderColor: filters.colors.includes(color.name)
                        ? 'secondary.main'
                        : 'divider',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: filters.colors.includes(color.name)
                        ? '0 0 10px rgba(212, 175, 55, 0.5)'
                        : 'none',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      },
                    }}
                    title={color.name}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            p: 2,
            backgroundColor: 'white',
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={handleResetFilters}
            disabled={activeFiltersCount === 0}
          >
            Limpiar
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={onClose}
            sx={{
              backgroundColor: 'secondary.main',
              color: 'black',
              '&:hover': {
                backgroundColor: 'secondary.dark',
              },
            }}
          >
            Aplicar
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
