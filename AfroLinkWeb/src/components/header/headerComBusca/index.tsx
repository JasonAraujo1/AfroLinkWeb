import DropDownBusca from '../../../components/dropDownBusca';
import IconesHome from '../../../components/iconesHome';
import HeaderSimples from '../headerSimples';
import './header.css'

export default function Header() {
    return (
        <header className='headerHome fade-delay-2'>
            <HeaderSimples />
            <h1 className='tituloHome '>
                ENCONTRE UM PROFISSIONAL<span className='tituloHome_span'>NEGRO</span>
            </h1>

            <div className='fade-in-scale fade-delay-3'>
                <DropDownBusca />
                <IconesHome />
            </div>
        </header>
    )
}