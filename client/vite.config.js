module.exports = {
    optimizeDeps: {
        include: ['date-fns/locale/eo', 'date-fns/fp'],
    },

    alias: {
        '/@/': path.resolve(__dirname, './src')
    },

    hmr: {
        port: 47344
    }
}