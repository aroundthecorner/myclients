function useCalendar()
{
    /**
     * Generate 24 hours
     */
    function generateHours()
    {
        let hours = []

        for (let i = 0; i <= 23; i++) {
            var hour = i + ':00'
            
            if (hour < 10) {
                hour = '0' + hour
            } 

            hours.push({
                id: `hour-${i}`,
                description: hour,
            })
        }

        return hours
    }

    /**
     * Scrolls calendar to current time
     */
    function scrollToCurrentTime()
    {
        let date = new Date()
        let time = (date.getHours() - 2) + ':00'
        let timeRow = document.getElementById(time)

        if (timeRow) {
            document.getElementById(time).scrollIntoView()
        }
    }

    /**
     * Get current time in decimal format
     */
    function getDecimalTime()
    {
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()

        return parseFloat(hours + (minutes / 60)).toFixed(2)
    }

    return {
        generateHours, scrollToCurrentTime, getDecimalTime
    }
}

export default useCalendar