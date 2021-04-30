import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './InsertEditWebPart.module.scss';
import * as strings from 'InsertEditWebPartStrings';
import { SPComponentLoader } from "@microsoft/sp-loader";
import "../../ExternalRef/CSS/style.css";
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css");
// SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js");
export interface IInsertEditWebPartProps {
  description: string;
}

export default class InsertEditWebPart extends BaseClientSideWebPart<IInsertEditWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <div class="new-screen">
    <div class="section-insert">
    <div class="title-section text-light bg-primary">
    <h4>Task Order Informantion</h4>
    </div>
    <div class="task-form container">
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Task Order Title :</label>
    <input type="text" class="form-control" id="">
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">COR Name:</label>
    <input type="text" class="form-control" id="">
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Tracking Number :</label>
    <input type="text" class="form-control" id="">
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">CAM Name:</label>
    <input type="text" class="form-control" id="">
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">OverAll Status:</label>
    <div class="color-status d-flex justify-content-between">
    <div class="color-green"></div> 
    <div class="color-yellow"></div>
    <div class="color-red"></div>
    </div>
    </div>
    </div>
    </div> 
    <div class="title-section text-light bg-primary">
    <h4>Task Order Details</h4>
    </div> 
    <div class="task-form">
    <div class="row my-3"> 
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Customer :</label>
    <input type="text" class="form-control" id="">
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Scope :</label>
    <input type="text" class="form-control" id="">
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Stakeholders :</label>
    <input type="text" class="form-control" id="">
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Office :</label>
    <input type="text" class="form-control" id="">
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Predecessor :</label>
    <input type="text" class="form-control" id="">
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Lifcycle Value :</label>
    <input type="text" class="form-control" id="">
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Source Selection :</label>
    <input type="text" class="form-control" id="">
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Task Order type :</label>
    <input type="text" class="form-control" id="">
    </div>
    </div>
    </div>
    <div class="title-section text-light bg-primary">
    <h4>Task Order Details</h4>
    </div>
    <div class="task-form">
    <div class="row my-3">
    <div class="col-6 d-flex align-items-center justify-content-between date-label">
    <div>Target Date</div>
    <div>Updated Date</div>
    <div>Date Actual Date</div> 
    </div>
    <div class="col-6 d-flex align-items-center justify-content-between date-label">
    <div>Target Date</div>
    <div>Updated Date</div>
    <div>Date Actual Date</div> 
    </div>
    </div> 
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Package Submitted :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Proposal recvd :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Package Reviewed :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Convense :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Draft Posted :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Initial Submit :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Industry Day :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Final Submit :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">RFP Posted :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Award release :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date"/>
    <input type="date"/>
    <input type="date"/> 
    </div>
    </div>
    </div>
    </div> 
    <div class="risk-section row">
    <div class="current-risk col-6">
    <div class="title-section text-light bg-primary">
    <h4>Current Risk</h4>
    </div> 
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Status :</label>
    <input type="text" class="form-control" id="">
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Issues :</label>
    <textarea class="form-control" placeholder="" id="floatingTextarea"></textarea>
    </div>
    </div> 
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Actions :</label>
    <textarea class="form-control" placeholder="" id="floatingTextarea"></textarea> 
    </div> 
    </div>
    </div>
    <div class="acquisition risk col-6">
    <div class="title-section text-light bg-primary">
    <h4>Acquisition Risk</h4>
    </div> 
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Requirement :</label>
    <div class="d-flex w-100">
    <span class="risk-color-green"></span><input type="text" class="form-control" id="">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Funding :</label>
    <div class="d-flex w-100">
    <span class="risk-color-green"></span><input type="text" class="form-control" id="">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Strategy :</label>
    <div class="d-flex w-100">
    <span class="risk-color-green"></span><input type="text" class="form-control" id="">
    </div> 
    </div> 
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Schedule :</label>  
    <div class="d-flex w-100">
    <span class="risk-color-green"></span><input type="text" class="form-control" id="">
    </div> 
    </div>
    </div>
    </div>
    </div> 
    </div>
    </div> 
    `;
  } 

  protected get dataVersion(): Version {
    return Version.parse('1.0'); 
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
