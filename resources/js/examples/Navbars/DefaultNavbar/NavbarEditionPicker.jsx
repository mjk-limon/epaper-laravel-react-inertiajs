import axios from '@/api';
import colors from '@/assets/theme/base/colors';
import SoftTypography from '@/components/SoftTypography';
import { router, usePage } from '@inertiajs/react';
import { Check, Close } from '@mui/icons-material';
import { Box, Dialog, DialogContent, DialogTitle, Grid, Icon, IconButton, List, ListItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function NavbarEditionPicker() {
  const [open, setOpen] = useState(false);
  const [editions, setEditions] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selected, setSelected] = useState({});

  const { filters } = usePage().props;
  const itemsPerColumn = 3;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editionPicker = editionId => {
    filters.editionId = editionId;

    router.get(`${location.pathname}?${(new URLSearchParams(filters)).toString()}`);
    handleClose();
  }

  useEffect(() => {
    axios
      .get('/editions')
      .then(r => {
        const c = [];
        const items = r.data.filter(v => v.isPaperEdition);

        for (let i = 0; i < items.length; i += itemsPerColumn) {
          c.push(items.slice(i, i + itemsPerColumn));
        }

        setEditions(items);
        setColumns(c);
      })
  }, []);

  useEffect(() => {
    if (editions.length) {
      const def_edition = editions.filter(v => v.isHome);
      const selected = editions.filter(v => v.editionId == filters?.editionId);

      setSelected(selected[0] || def_edition[0]);
    }
  }, [editions, filters])

  return (
    <>
      <Typography
        fontSize={14}
        marginLeft={3}
        display="inline-block"
        sx={{ cursor: 'pointer' }}
        onClick={handleClickOpen}
      >
        {selected ? selected.editionDisplayName : ''}
        <Icon>arrow_downward</Icon>
      </Typography>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          display="flex"
          justifyContent="space-between"
          bgcolor={colors.black.light}
          color={colors.light.main}
          sx={{
            padding: '0.25rem 1.5rem'
          }}>
          Select Edition
          <IconButton color='light' size='small' aria-label='close' onClick={handleClose}><Close /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            noValidate
            sx={{
              m: 'auto',
              flexGrow: 1,
              padding: '1rem 0'
            }}
          >
            <Grid container spacing={2}>
              {columns.map((column, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} >
                  <List>
                    {column.map((item, idx) => (
                      <ListItem
                        sx={{
                          cursor: 'pointer',
                          borderBottom: '1px solid #ddd',
                        }}
                        key={idx}
                        onClick={() => editionPicker(item.editionId)}
                      >
                        <SoftTypography
                          px={2}
                          width="100%"
                          sx={{
                            fontSize: 22,
                            fontFamily: "Shurjo",
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: (item.editionId === selected.editionId) ? '#d60000' : '#333',
                          }}
                        >
                          {item.editionDisplayName}
                          {(item.editionId === selected.editionId) ? <Check /> : null}
                        </SoftTypography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default NavbarEditionPicker;