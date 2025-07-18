
import { Button, styled, SvgIcon } from '@mui/material';
import seta from '../../../assets/setaUpload.svg';
import './uploadBtn.css'

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function UploadBtn() {
  return (
    <Button
      className="uploadBtn"
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      sx={{
        backgroundColor: 'black',
        color: '#e4e4e4',
        '&:hover': {
          backgroundColor: '#1a1a1a',
        },
        borderRadius: '0.5rem',
        margin: '0.4rem 0 0',
      }}
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
      Adicionar foto
      <img src={seta} alt="" />
      <VisuallyHiddenInput type="file" />
    </Button>

  );
}
