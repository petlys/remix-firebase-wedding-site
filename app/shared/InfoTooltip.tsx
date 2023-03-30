import styled from 'styled-components'
import { InfoIcon } from './icons/InfoIcon'

const Container = styled.div<{ content: string }>`
  position: relative;

  :hover:after {
    background-color: rgb(243 244 246);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    padding: 1rem;
    content: '${(props: any) => props.content}';
    position: absolute;
    bottom: 25px;
    right: 25px;
    min-width: 200px;
    z-index: 100;
  }
`

type Props = {
  content: string
}

export const InfoTooltip = ({ content }: Props) => (
  <Container content={content} onClick={evt => evt.stopPropagation()} className="font-sans text-sm">
    <InfoIcon />
  </Container>
)
