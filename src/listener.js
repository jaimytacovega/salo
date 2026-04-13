import { LISTENER_SCRIPT } from './constants'


const getScriptListener = ({ 
    SRC_ELEMEMENTS_QUERY = [],
    listenAfterMs = 2_500
} = {}) => {
    return `<script defer>(${LISTENER_SCRIPT})({ SRC_ELEMEMENTS_QUERY: ${JSON.stringify(SRC_ELEMEMENTS_QUERY)}, listenAfterMs: ${listenAfterMs} })</script>`
}

export {
    getScriptListener,
}