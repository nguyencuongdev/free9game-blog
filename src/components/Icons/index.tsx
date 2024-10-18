type iconPropsType = {
  width?: number;
  height?: number;
  className?: string;
};

export function MenuIcon(props: iconPropsType) {
  const { width = 16, height = 16, className } = props;

  return (
    <svg
      className={`svg-icons ${className}`}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='#4f535d'>
      <g id='SVGRepo_bgCarrier'></g>
      <g id='SVGRepo_tracerCarrier'></g>
      <g id='SVGRepo_iconCarrier'>
        <path d='M4 6H20M4 12H20M4 18H20' stroke='#4f535d'></path>
      </g>
    </svg>
  );
}

export function CloseIcon(props: iconPropsType) {
  const { width = 16, height = 16, className } = props;

  return (
    <svg
      className={`svg-icons ${className}`}
      width={width}
      height={height}
      viewBox='-0.5 0 25 25'
      fill='nones'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier'></g>
      <g id='SVGRepo_tracerCarrier'></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path d='M3 21.32L21 3.32001'></path> <path d='M3 3.32001L21 21.32'></path>
      </g>
    </svg>
  );
}

export function SearchIcon(props: iconPropsType) {
  const { width = 16, height = 16, className } = props;

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke='#7a7a7a'>
      <g id='SVGRepo_bgCarrier' />
      <g id='SVGRepo_tracerCarrier' />
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
          stroke='#7a7a7a'
        />
      </g>
    </svg>
  );
}
