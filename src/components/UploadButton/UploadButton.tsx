import React from 'react'
import { Button, ButtonProps, SvgIcon } from '@material-ui/core'

const iconPath = (
  <path d="M7.83309 12.8333L8.99976 13.9999L11.1664 11.8333V20.3333H12.8331V11.8333L14.9998 13.9999L16.1664 12.8333L11.9998 8.66658L7.83309 12.8333ZM17.8331 5.33325V11.9999L19.4998 11.9999V5.33325C19.4998 4.41658 18.7498 3.66658 17.8331 3.66658H6.16642C5.24976 3.66658 4.49976 4.41658 4.49976 5.33325V11.9999H6.16642L6.16642 5.33325H17.8331Z" />
)

interface UploadButtonProps extends Pick<ButtonProps, 'onClick' | 'size'> {
  type: 'export' | 'import'
}

export const UploadButton = React.memo<UploadButtonProps>(({ type, onClick, size = 'small' }) => {
  const isExport = type === 'export'
  return (
    <Button
      onClick={onClick}
      size={size}
      startIcon={
        <SvgIcon
          sx={{
            transform: isExport ? '' : 'rotate(180deg)',
          }}
        >
          {iconPath}
        </SvgIcon>
      }
    >
      {isExport ? 'Экспорт' : 'Импорт'}
    </Button>
  )
})
