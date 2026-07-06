import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router';
import useCartStore from '../store/useCartStore';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartItemsCount = useCartStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );

  const closeDrawer = () => setMobileOpen(false);

  return (
      <AppBar position="static" sx={{
        backgroundColor: 'transparent',
        boxShadow: "none",
        color: "text.primary",
        fontWeight: "bold",
        }}>
        <Toolbar sx={{ mx: { xs: 1, sm: 4 } }}>

          <Typography variant="h4" component="div"  sx={{ flexGrow: 1, pl: { xs: 0, sm: 3 } }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              TRES JOLIE
            </Link>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/home">
              <Typography color="inherit" sx={{ mr: 1 }}>
                Home
              </Typography>
              </Button>
            <Button color="inherit" component={Link} to="/products">
              <Typography color="inherit" sx={{ mr: 1 }}>
                Products
              </Typography>
            </Button>
          </Box>

          <IconButton color="inherit" component={Link} to="/cart">
              <Typography sx={{ mr: 1, fontSize: '1rem', textTransform: 'uppercase', display: { xs: 'none', sm: 'inline' } }}>
                  Cart
              </Typography>
              <Badge badgeContent={cartItemsCount} color="secondary">
                <ShoppingBasketOutlinedIcon />
              </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="right" open={mobileOpen} onClose={closeDrawer}>
            <Box sx={{ width: 240 }} role="presentation">
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/home" onClick={closeDrawer}>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/products" onClick={closeDrawer}>
                    <ListItemText primary="Products" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/cart" onClick={closeDrawer}>
                    <ListItemText primary="Cart" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>

        </Toolbar>
      </AppBar>
  );
}
