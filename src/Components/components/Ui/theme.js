import { createMuiTheme } from '@material-ui/core/styles';


const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = "#868686";
export default createMuiTheme({

    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: '700',
            fontSize: '1em',
        },
        estimate: {
            fontSize: '1em',
            color: 'white',
            fontFamily: 'Pacifico',
            textTransform: 'none'
        },
        h2 : {
            color : arcBlue,
            fontSize : '2.5rem',
            fontWeight : 700,
            fontFamily : 'Raleway',
            lineHeight : '1.5'
        },
        h4 : {
              color : arcBlue,
              fontSize : '1.75rem',
              fontWeight : 700,
              fontFamily : 'Raleway',
        },
        subtitle1 : {
            fontSize : '1.25em',
            fontWeight : 300,
            color : arcGrey
        },
        learnButton : {
            borderColor : arcBlue,
            color : arcBlue,
            borderRadius : 50,
            borderWidth : 2,
            fontFamily : 'Roboto',
            textTransform : 'none',
            fontWeight : 'bold',
        }
    }

})