import * as React from 'react';
import styles from './PruebaPnP.module.scss';
import { IPruebaPnPProps } from './IPruebaPnPProps';
import { IPruebaPnPState } from './IPruebaPnPState';
import { getItems } from '../../../services/services';
import { ListElement } from '../../../types/ListElement';

export default class PruebaPnP extends React.Component<IPruebaPnPProps, IPruebaPnPState> {
  constructor(props: IPruebaPnPProps, state: IPruebaPnPState) {
    super(props);

    this.state = {
      elements: []
    };
  }

  public render(): React.ReactElement<IPruebaPnPProps> {
    const { listName } = this.props;
    const { elements } = this.state;

    return (
      <>
        <div onClick={async () => await this.getElementsFromList()} className={styles.button}>
          {listName ? `Haz click aquí para traer los elementos de la lista "${listName}"` 
          : '¡Tienes que especificar un valor para "listName" en las propiedades del webpart!'}
        </div>

        {
          elements ?
            <ul>
            {
              elements.map((element: ListElement, index: number) => {
                return <li key={index}>{element.Title}</li>
              })
            }
            </ul>
          : null
        }
      </>
    );
  }

  public async getElementsFromList(): Promise<void> {
    const { listName } = this.props;

    if (listName) {
      const elements: ListElement[] = await getItems(listName , 'Title', '', '');

      if (elements)
        this.setState({ elements });
    }
  } 
}
