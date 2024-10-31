import * as S from './styles'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <S.FooterBar>
      <p>{currentYear} - &copy; ENCURTA Todos os direitos reservados</p>
    </S.FooterBar>
  )
}

export default Footer
