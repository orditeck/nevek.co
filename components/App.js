import {StateProvider} from '../state'
import DomLibsSetup from "./DomLibsSetup";
import Footer from "../layouts/Footer";
import Head from 'next/head'

const App = props => {
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

    if(typeof window !== 'undefined'){
        window.addEventListener('wheel', (e) => e.preventDefault())
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
