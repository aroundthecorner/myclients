import { ref } from 'vue'
import useEnv from '/@/features/useEnv.js'

function useEncryption()
{
    /**
     * Return the encrypted string
     */
    function encrypt(string)
    {
        const { env } = useEnv()
        const encrypted = ref('')

        if (inDevelopment()) return string

        encrypted.value = CryptoJS.AES.encrypt(string, env('VITE_ENCRYPTION_KEY'))

        return encrypted.value
    }

    /**
     * Return the decrypted string
     */
    function decrypt(encrypted)
    {
        const { env } = useEnv()
        const decrypted = ref('')

        if (!encrypted) return ''
        if (inDevelopment()) return encrypted
        
        decrypted.value = CryptoJS.AES.decrypt(encrypted, env('VITE_ENCRYPTION_KEY'))
        decrypted.value = decrypted.value.toString(CryptoJS.enc.Utf8)

        return decrypted.value
    }

    /**
     * Return if app is in development mode
     */
    function inDevelopment()
    {
        const { env } = useEnv()
        
        return env('VITE_APP_ENV') == 'dev'
    }

    return {
        encrypt, decrypt
    }
}

export default useEncryption