import * as React from 'react';
import styles from './PruebaPropertyPane.module.scss';
import { IPruebaPropertyPaneProps } from './IPruebaPropertyPaneProps';


export default class PruebaPropertyPane extends React.Component<IPruebaPropertyPaneProps, {}> {
  public render(): React.ReactElement<IPruebaPropertyPaneProps> {

    const { texto, url, posicion, modoOscuro } = this.props;

    const posButton: React.CSSProperties = {
      right: `${-posicion}%`
    };

    return (
      <section className={`${styles.pruebaPropertyPane}`}>
        <div style={posButton} className={`${styles.button} ${modoOscuro ? styles.buttonDark : styles.buttonLight}`}>
          <a href={url} target='_blank' rel="noreferrer">
            {texto}
          </a>
        </div>
      </section>
    );
  }
}
