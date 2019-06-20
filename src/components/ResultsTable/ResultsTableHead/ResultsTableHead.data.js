const rows = [
  { id: 'type', numeric: false, disablePadding: true, label: 'Type' },
  {
    id: 'fileNumber',
    numeric: true,
    disablePadding: false,
    label: 'File Number'
  },
  { id: 'debtor', numeric: false, disablePadding: true, label: 'Debtor' },
  { id: 'issue', numeric: true, disablePadding: false, label: 'Issue' },
  {
    id: 'expiration_date',
    numeric: true,
    disablePadding: false,
    label: 'Expiration Date'
  },
  {
    id: 'amount',
    numeric: false,
    disablePadding: false,
    label: 'Amount'
  }
]

export { rows }
