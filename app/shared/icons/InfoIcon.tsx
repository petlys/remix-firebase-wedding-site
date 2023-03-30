type Props = {
  color?: string
  size?: string
}

export const InfoIcon = (props: Props) => (
  <svg
    height={props.size || '1.6rem'}
    viewBox="0 0 24 24"
    width={props.size || '1.6rem'}
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fill: 'none',
      stroke: props.color || 'black',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5px'
    }}
  >
    <path d="M14.25,16.5H13.5A1.5,1.5,0,0,1,12,15V11.25a.75.75,0,0,0-.75-.75H10.5" />
    <path d="M11.625,6.75A.375.375,0,1,0,12,7.125a.375.375,0,0,0-.375-.375h0" />
    <circle cx="12" cy="12" r="11.25" />
  </svg>
)
