import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PruebaPropertyPaneWebPartStrings';
import PruebaPropertyPane from './components/PruebaPropertyPane';
import { IPruebaPropertyPaneProps } from './components/IPruebaPropertyPaneProps';

export interface IPruebaPropertyPaneWebPartProps {
  texto: string;
  url: string;
  posicion: number;
  modoOscuro: boolean;
}

export default class PruebaPropertyPaneWebPart extends BaseClientSideWebPart<IPruebaPropertyPaneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPruebaPropertyPaneProps> = React.createElement(
      PruebaPropertyPane,
      {
        texto: this.properties.texto,
        url: this.properties.url,
        posicion: this.properties.posicion,
        modoOscuro: this.properties.modoOscuro,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // protected onInit(): Promise<void> {
  // }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('texto', {
                  label: 'Texto del botón',
                  value: this.properties.texto,
                }),
                PropertyPaneTextField('url', {
                  label: 'URL del botón',
                  value: this.properties.url,
                }),
                PropertyPaneSlider("posicion", {
                  label: "Posición del botón del primer banner",
                  value: this.properties.posicion,
                  min: 0,
                  max: 100,
                  step: 1,
                  showValue: false,
                }),
                PropertyPaneCheckbox("modoOscuro", {
                  text: 'Modo oscuro',
                  checked: false,
                  disabled: false,
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
