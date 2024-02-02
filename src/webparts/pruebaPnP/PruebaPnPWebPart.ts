import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PruebaPnPWebPartStrings';
import PruebaPnP from './components/PruebaPnP';
import { IPruebaPnPProps } from './components/IPruebaPnPProps';

import { getSP } from '../../pnpConfig/pnpjsConfig';

export interface IPruebaPnPWebPartProps {
  listName: string;
}

export default class PruebaPnPWebPart extends BaseClientSideWebPart<IPruebaPnPWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPruebaPnPProps> = React.createElement(
      PruebaPnP,
      {
        listName: this.properties.listName,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await getSP(this.context);
  }

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
                PropertyPaneTextField('listName', {
                  label: strings.DescriptionFieldLabel,
                  value: this.properties.listName
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
