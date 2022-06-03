
const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
    config => {
        config.optimization = {
            ...config.optimization,
            minimizer: config.optimization.minimize[0]
        }
        return config
    }
)