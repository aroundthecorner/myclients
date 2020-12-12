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
        generateHours, getDecimalTime
    }
}

export default useCalendar