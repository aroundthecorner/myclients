function useEnv()
{
    /**
     * Get env variable
     */
    function env(variable)
    {
        return import.meta.env[variable]
    }

    return {
        env
    }
}

export default useEnv