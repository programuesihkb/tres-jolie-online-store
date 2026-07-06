import { Box, Typography, Divider, Button } from '@mui/material';

type CheckoutItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

const PaymentSummary = ({ checkoutItems }: { checkoutItems: CheckoutItem[] }) => {
  const total = checkoutItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <Box
      sx={{
        position: { xs: 'static', md: 'sticky' },
        top: 32,
        alignSelf: 'flex-start',
        p: { xs: 3, md: 4 },
        borderLeft: { xs: 'none', md: '1px solid' },
        borderTop: { xs: '1px solid', md: 'none' },
        borderColor: 'rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Playfair Display", serif',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 500,
          mb: 4,
          color: 'text.secondary',
        }}
      >
        Payment Summary
      </Typography>

      {checkoutItems.length === 0 ? (
        <Typography variant="body2" color="text.primary">
          No items selected for checkout.
        </Typography>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
            {checkoutItems.map((item, index) => (
              <Box
                key={`${item.id}-${index}`}
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.primary',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    fontSize: '0.8rem',
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                  {item.quantity > 1 && (
                    <Box component="span" sx={{ color: 'text.secondary' }}> &times;{item.quantity}</Box>
                  )}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)', mb: 3 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', color: 'text.primary' }}
            >
              Total
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
              ${total.toFixed(2)}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
            sx={{
              height: '48px',
              borderRadius: 0,
              color: 'primary.main',
              textTransform: 'uppercase',
              fontWeight: 400,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'text.primary',
              },
            }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default PaymentSummary;
