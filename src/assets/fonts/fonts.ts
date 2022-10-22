import { createGlobalStyle } from 'styled-components'
import BoldFont from './RobotoMono-Bold.ttf'
import RegularFont from './RobotoMono-Regular.ttf'

const FontStyles = createGlobalStyle 
`
    @font-face {
        font-family: 'Bold';
        src: url(${BoldFont})
    }
    @font-face {
        font-family: 'Regular';
        src: url(${RegularFont})
    }
`

export default FontStyles