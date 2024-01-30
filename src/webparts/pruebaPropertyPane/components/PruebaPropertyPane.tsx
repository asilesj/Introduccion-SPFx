import * as React from 'react';
import styles from './PruebaPropertyPane.module.scss';
import { IPruebaPropertyPaneProps } from './IPruebaPropertyPaneProps';


export default class PruebaPropertyPane extends React.Component<IPruebaPropertyPaneProps, {}> {
  public render(): React.ReactElement<IPruebaPropertyPaneProps> {

    const { texto } = this.props;
    // const { texto, url, posicion, modoOscuro } = this.props;

    return (
      <section className={`${styles.pruebaPropertyPane}`}>
        <div className={styles.welcome}>
          {texto}
        </div>
      </section>
    );
  }
}
