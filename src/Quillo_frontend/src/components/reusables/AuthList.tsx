import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ArrowForward } from '@mui/icons-material';
import { colors } from '../../assets/colors';

interface NestedListProps {
  items: string[];
  handleConnectWallet: () => void 
}

const NestedList: React.FC<NestedListProps> = ({ items, handleConnectWallet }) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {items.map((item, index) => (
        <ListItemButton
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            paddingLeft: 0,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              display: 'inline-block',
              width: '40px',
              height: '40px',
              lineHeight: '40px',
              textAlign: 'center',
              border: `2px solid ${colors.divider}`,
              marginRight: '10px',
            }}
          >
            {index + 1}
          </Typography>
          {index === 0 || index === 1 ? (
            <Typography  sx={{fontWeight:"bold"}}>{item}</Typography>
         
          ) : (
            <Button
            onClick={handleConnectWallet}
              variant='contained'
              endIcon={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `2px solid ${colors.divider}`,
                  }}
                >
                  <ArrowForward />
                </div>
              }
              sx={{
                height: "48px",
                minWidth: "70%",
                background: colors.primary,
                margin: "0 10px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover': {
                  background: colors.primary,
                }
              }}
            >
              <span style={{ marginLeft: '10px' }}>{item}</span>
            </Button>
          )}
        </ListItemButton>
      ))}
    </List>
  );
};

export default NestedList;
