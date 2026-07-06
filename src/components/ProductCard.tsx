import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  IconButton, 
  TextField, 
  Button 
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { type productType } from '../types/productType';
import useCartStore from '../store/useCartStore';

const ProductCard = ({ product }: { product: productType }) => {

  const addToCart = useCartStore((state) => state.addToCart);

  const [quantity, setQuantity] = useState<number | ''>(1);
  const minQuantity = 1;
  const maxQuantity = 99;


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setQuantity('');
      return;
    }
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= minQuantity && num <= maxQuantity) {
      setQuantity(num);
    }
  };

  const handleBlur = () => {
    if (quantity === '' || Number(quantity) < minQuantity) {
      setQuantity(minQuantity);
    }
  };

  const increment = () => {
    setQuantity((prev) => {
      const current = prev === '' ? minQuantity : prev;
      return current < maxQuantity ? Number(current) + 1 : current;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      const current = prev === '' ? minQuantity : prev;
      return current > minQuantity ? Number(current) - 1 : current;
    });
  };

  const handleAddToCart = (id: number, quantity: number) => {
    addToCart({ productId: id, quantity });
  };

  return (
    <Card 
      elevation={0} 
      sx={{ 
        maxWidth: 320,
        backgroundColor: 'transparent',
        borderRadius: 0, 
        overflow: 'visible' 
      }}
    >

      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="320"
          image={product.images[0]}
          alt={product.title}
          sx={{
            transition: 'transform 0.4s ease',
            '&:hover': {
              transform: 'scale(1.1)', 
            }
          }}
        />
      </Box>


      <CardContent sx={{ px: 0, py: 3, paddingBottom: '0 !important' }}>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, px:1}}>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: '1rem',
                lineHeight: 1.3,
                height: '2.6em',
                color: 'text.primary',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {product.category}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
            ${product.price.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, alignItems: { xs: 'stretch', sm: 'center' } }}>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid',
              borderColor: 'rgba(0,0,0,0.1)',
              height: '40px',
              flexShrink: 0,
            }}
          >
            <IconButton
              onClick={decrement}
              disabled={Number(quantity) <= minQuantity}
              sx={{ borderRadius: 0, width: '32px', height: '100%' }}
            >
              <RemoveIcon fontSize="small" sx={{ color: 'text.primary' }} />
            </IconButton>

            <TextField
              value={quantity}
              onChange={handleInputChange}
              onBlur={handleBlur}
              variant="standard"
              slotProps={{
                htmlInput: {
                  type: 'text',
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  style: { textAlign: 'center' }
                }
              }}
              sx={{
                width: '28px',
                '& .MuiInput-underline:before, & .MuiInput-underline:after': { display: 'none' },
                '& input': { color: 'text.primary', fontWeight: 500, p: 0 }
              }}
            />

            <IconButton
              onClick={increment}
              disabled={Number(quantity) >= maxQuantity}
              sx={{ borderRadius: 0, width: '32px', height: '100%' }}
            >
              <AddIcon fontSize="small" sx={{ color: 'text.primary' }} />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<LocalMallOutlinedIcon fontSize="small" />}
            onClick={() => handleAddToCart(product.id, Number(quantity))}
            disableElevation
            sx={{
              flexGrow: 1,
              minWidth: 0,
              height: '40px',
              borderRadius: 0,
              color: 'primary.main',
              textTransform: 'uppercase',
              fontWeight: 400,
              fontSize: '0.7rem',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              px: 1,
              '& .MuiButton-startIcon': { mr: 0.5 },
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'text.primary',
              }
            }}
          >
            Add to Cart
          </Button>
        </Box>
        
      </CardContent>
    </Card>
  );
};

export default ProductCard;