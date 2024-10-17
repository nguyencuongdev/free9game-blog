import star from '@/assets/imgs/star.png';
import Image from 'next/image';

type iconPropsType = {
  width?: number;
  height?: number;
  className?: string;
};
export function StarFull(props: iconPropsType) {
  const { width = 16, height = 16, className } = props;

  return <Image width={width} height={height} src={star} alt='icon star' className={className} />;
}

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
