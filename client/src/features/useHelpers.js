function useHelpers()
{
    /**
     * Fade out an element
     */
    function fadeOut(element)
    {
        document.querySelector(element).style.transition = '0.4s'
        document.querySelector(element).style.opacity = 0
    }

    return {
        fadeOut
    }
}

export default useHelpers