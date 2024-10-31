import { ClipLoader  } from 'react-spinners'
import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClipLoader color={colors.white} />
  </Container>
)

export default Loader
