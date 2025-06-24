import * as React from 'react';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import { Box, Drawer, IconButton, Input, List, ListItemButton, MenuItem, Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';
import './menuLateral.css'
import { MenuOpen } from '@mui/icons-material';
import { useUsuarios } from '../../hooks/useUsuarios';



export default function MenuLateral() {
    const [open, setOpen] = React.useState(false);

        const {handleSair} = useUsuarios()

    return (
        <React.Fragment>
            <div className='testee'>

           
            <MenuOpen
                sx={{fontSize: '2.5rem'}}
                className='IconButton'
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}>
                <Menu />
            </MenuOpen>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        ml: 'auto',
                        mt: 1,
                        mr: 30,
                    }}
                >
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        sx={{ fontSize: 'md', fontWeight: 'lg', cursor: 'pointer',  }}
                    >

                    </Typography>
                    <IconButton
                        id="close-icon"
                        sx={{ position: 'initial' }}
                        onClick={() => setOpen(false)}
                        aria-label="Close"
                    >
                        <Close />
                    </IconButton>
                </Box>
                
                <List
                    size="lg"
                    component="nav"
                    sx={{
                        flex: 'none',
                        fontSize: '1.6rem',
                        '& > div': { justifyContent: 'center' },
                    }}
                >
                    <ListItemButton to={'/'} sx={{ justifyContent: 'center' }}>Home</ListItemButton>
                    <ListItemButton >Minha Conta</ListItemButton>
                    <ListItemButton>Solicitações</ListItemButton>
                    <ListItemButton sx={{color:'#f63232'}} onClick={handleSair}>Sair</ListItemButton>
                </List>
            </Drawer>
             </div>
        </React.Fragment>
    );
}
