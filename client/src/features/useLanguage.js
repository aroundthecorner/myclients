import store from '/@/store/index.js'
import { computed } from 'vue'

function useLanguage()
{
    /**
     * Return a translation string
     */
    function lang(string)
    {
        const language = computed(() => store.state.app.language)

        const translation = computed(() => {
            if (store.state.app.languages !== undefined && store.state.app.languages[language.value] !== undefined) {
                return store.state.app.languages[language.value]['translations'][string]
            } else {
                return ''
            }
        })

        return translation.value
    }

    return {
        lang
    }
}

export default useLanguage