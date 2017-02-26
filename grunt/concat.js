module.exports = {
    all:{
        files: {
            '<%= path.jsDist %>script.js': ['<%= path.js %>script.js'],
            '<%= path.jsDist %>vendor.js': ['<%= path.js %>vendor/jquery.js']
        }
    }
}
