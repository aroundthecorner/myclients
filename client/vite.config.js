module.exports = {
    optimizeDeps: {
        include: ['date-fns/locale/eo', 'date-fns/fp'],
    },

    alias: {
        '/@/': require('path').resolve(__dirname, 'src')
    },

    hmr: {
        port: 47344
    }
}