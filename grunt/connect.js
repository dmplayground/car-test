module.exports = {
    server: {
        options: {
            port: 9090,
            base: '<%= path.build %>',
            options: {
                maxAge: 300000
            }
        }
    }
}
