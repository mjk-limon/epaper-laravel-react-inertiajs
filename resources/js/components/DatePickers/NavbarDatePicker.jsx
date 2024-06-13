import { router, usePage } from '@inertiajs/react';
import { Icon, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

function NavbarDatePicker() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [open, setOpen] = useState(false);

  const { filters } = usePage().props;

  const handleDateChange = newDate => {
    const formatted = dayjs(newDate);
    filters.date = formatted.unix();

    router.get(`${location.pathname}?${(new URLSearchParams(filters)).toString()}`, {}, { preserveState: true });
    setSelectedDate(formatted);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography
        fontSize={14}
        marginLeft={3}
        display="inline-block"
        sx={{ cursor: 'pointer' }}
        onClick={() => setOpen(true)}
      >
        {selectedDate.format('dddd, MMM DD, YYYY')}
        <Icon>arrow_downward</Icon>
      </Typography>
      <MobileDatePicker
        open={open}
        defaultValue={selectedDate}
        onClose={() => setOpen(false)}
        onAccept={handleDateChange}
        slots={{ textField: () => null }} />
    </LocalizationProvider>
  )
}

export default NavbarDatePicker;