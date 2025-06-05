import { createContext } from 'react';
import type { AppContextType } from '../types/contextType';


const Context = createContext<AppContextType | undefined>(undefined);

export default Context;