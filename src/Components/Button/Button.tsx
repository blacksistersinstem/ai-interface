import React from "react";
import styles from './Button.module.scss';
import {ReactComponent as Arrow} from '../../assets/svg/arrow.svg';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  padding?: string;
  arrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, width, height, padding, arrow}) => {
  return (
    <div onClick={onClick} className={styles.buttonContainer} style={{width: width, height: height, padding: padding}}>
      <button>
        {arrow ? <Arrow className={styles.icon}/> : null} {text}
      </button>
    </div>
  );
};
