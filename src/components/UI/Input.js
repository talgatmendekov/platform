import { TextField } from '@mui/material'

export const Input = ({
   placeholder,
   children,
   classes,
   fullWidth,
   onChange,
   ...other
}) => {
   return (
      <TextField
         style={{
            width: '300px',
            border: '2px solid #242831',
            borderRadius: '8px',
         }}
         sx={{
            input: { color: '#FFFFFF', fontSize: '16px' },
         }}
         placeholder={placeholder}
         fullWidth={fullWidth}
         classes={classes}
         onChange={onChange}
         {...other}
      >
         {children}
      </TextField>
   )
}
