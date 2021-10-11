import Head from 'next/head';
import { DomLibsSetup } from '.';
import { Footer } from '../layouts';
import { StateProvider } from '../state';

export const App = props => {
    const initialState = {
        mainNavItem: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeMainNavItem':
                return {
                    ...state,
                    mainNavItem: action.newMainNavItem
                };
            default:
                return state;
        }
    }

    return <StateProvider initialState={initialState} reducer={reducer}>
        <DomLibsSetup>
            <Head>
                <title>Keven Lefebvre | Stratège numérique à Chicoutimi, Saguenay (Québec)</title>
            </Head>
            {props.children}
            <Footer/>
        </DomLibsSetup>
    </StateProvider>
}

export default App