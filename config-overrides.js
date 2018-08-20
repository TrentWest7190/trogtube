const { compose } = require('react-app-rewired')
const rewireMobx = require('react-app-rewire-mobx')
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = compose(
  rewireMobx,
  rewireStyledComponents
)
