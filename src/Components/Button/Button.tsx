import styles from "./Button.module.scss";
//@ts-ignore
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  padding?: string;
  arrow?: boolean;
  minor?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  width,
  height,
  padding,
  arrow,
}) => {
  return (
    <div onClick={onClick} className={styles.buttonContainer}>
      <button style={{ width: width, height: height, padding: padding }}>
        {arrow ? <Arrow className={styles.icon} /> : null} {text}
      </button>
    </div>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({
  text,
  onClick,
  width,
  height,
  padding,
  arrow,
}) => {
  return (
    <div onClick={onClick} className={styles.buttonContainer}>
      <button
        style={{
          width: width,
          height: height,
          padding: padding,
          backgroundColor: "transparent",
          outline: "2px solid #2f2c99",
          color: "#2f2c99",
        }}
      >
        {arrow ? <Arrow className={styles.icon} /> : null} {text}
      </button>
    </div>
  );
};

export const ButtonTertiary: React.FC<ButtonProps> = ({
  text,
  onClick,
  width,
  height,
  padding,
  arrow,
}) => {
  return (
    <div onClick={onClick} className={styles.buttonContainer}>
      <button
        style={{
          width: width,
          height: height,
          padding: padding,
          backgroundColor: "transparent",
          outline: "0px solid #2f2c99",
          color: "#2f2c99",
          textDecoration: "underline",
          textUnderlineOffset: "8px",
        }}
      >
        {arrow ? <Arrow className={styles.icon} /> : null} {text}
      </button>
    </div>
  );
};
