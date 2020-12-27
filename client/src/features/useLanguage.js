import store from '../store/index.js'
import { computed } from 'vue'

function useLanguage()
{
    /**
     * Return a translation string
     */
    function lang(string)
    {
        let language = computed(() => store.state.app.language)
        language = language.value

        return store.state.app.languages[language]['translations'][string]
    }

    return {
        lang
    }
}

export default useLanguage