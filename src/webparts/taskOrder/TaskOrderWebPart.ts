import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TaskOrderWebPart.module.scss';
import * as strings from 'TaskOrderWebPartStrings';
import { SPComponentLoader } from "@microsoft/sp-loader";
import "../../ExternalRef/CSS/style.css";
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css");
// SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js");
export interface ITaskOrderWebPartProps {
  description: string;
}

export default class TaskOrderWebPart extends BaseClientSideWebPart<ITaskOrderWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="landing-page hide">
      <div class="header">
      <div class="logo bg-primary">Logo</div>     
      <div class="menu">
      <button class="btn btn-primary rounded-0"> Menu</button>
      </div>
      </div>
      <div class="main-content">       
      <h2>Task Order</h2>
      <div class="section-btns d-flex"> 
      <div class="search-section bg-primary">
      <input type="text" class="search-input" placeholder="Task Order Number" />
      <button class="btn btn-sm btn-secondary btn-search border border-primary">Search</button>
      </div>
      <div class="create-task-btn">
      <button class="btn btn-sm btn-secondary border border-primary">Create New Task Order</button>
      </div>
      </div>
      </div>
      </div> 
      <div class="view-screen"> 
      <div class="view-header d-flex justify-content-between">
      <div><div class="logo bg-primary">Logo</div></div>
      <div class="header-info"> 
      <p>Requirements needed to complete packages regarding the TreCuquising  Association Board.</p> 
      <div class="track-num-sec d-flex justify-content-end">
      <label>Tracking Number :</label><label>Sample Number</label>
      </div>
      </div>
      </div>
      <div class="user-info-section row justify-content-between my-1">
      <div class="user-name-sec d-flex col-6 justify-content-between">
      <div class="cor-name"><label class="title">COR : </label><label class="value">Name</label></div>
      <div class="cam-name"><label class="title">CAM : </label><label class="value">Name</label></div>
      </div>
      <div class="status-sec col-6 text-right d-flex justify-content-end"><label class="title">Overall Status : </label><div class="status-color"></div></div>
      </div>
      <div class="row detail-milestone my-2">
      <div class="detail col-6">
      <div class="view-title-section text-light"> 
      <h4>Task Order Details</h4>
      </div>
      
      <div class="form-task-view">
      <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Customer :</label>
    <div class="d-flex w-100">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Scope :</label>
    <div class="d-flex w-100">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Stakeholder :</label>
    <div class="d-flex w-100">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Office :</label>
    <div class="d-flex w-100">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Predecessor :</label>
    <div class="d-flex w-100">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Lifecycle Value :</label>
    <div class="d-flex w-100">
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Source Selection :</label>
    <div class="d-flex w-100">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Task Order type :</label>
    <div class="d-flex w-100">
    </div> 
    </div>
    </div> 
      </div>
      </div>
      <div class="milestone col-6">
      <div class="view-title-section text-light"> 
      <h4>Milestone</h4>
      </div>
      <table id="milestoneTable">
      <thead>
      <thead></thead>
      <th></th>
      <th>Target Dte</th>
      <th>Updated Target Date</th>
      <th>Actual Date</th>
      <thead> 
      <tbody>
      <tr><td>Package Submitted</td><td></td><td></td><td></td></tr>
      <tr><td>Package Reviewed</td><td></td><td></td><td></td></tr>
      <tr><td>Draft Posted</td><td></td><td></td><td></td></tr>
      <tr><td>Industry  Day</td><td></td><td></td><td></td></tr>
      <tr><td>RPF Posted</td><td></td><td></td><td></td></tr>
      <tr><td>Proposal Received</td><td></td><td></td><td></td></tr>
      <tr><td>Convenes</td><td></td><td></td><td></td></tr>
      <tr><td>Initial Submit</td><td></td><td></td><td></td></tr>
      <tr><td>Final Submit</td><td></td><td></td><td></td></tr>
      <tr><td>Award release</td><td></td><td></td><td></td></tr>
      </tbody>
      </table>
      </div>
      </div>
      <div class="section-status-Risk row">
      <div class="currrent-status col-6">
      <div class="view-title-section text-light"> 
      <h4>Current Status</h4>
      </div>
      <table id="currentStatusTable">
      <tbody>
      <tr><th>STATUS</th><td></td></tr>
      <tr><th>ISSUES</th><td></td></tr>
      <tr><th>ACTIONS</th><td></td></tr>
      </tbody>  
      </table>
      </div>
      <div class="Assessment-Risk col-6">
      <div class="view-title-section text-light"> 
      <h4>Assessment Risk</h4>
      </div>
      <table id="assessmentTable">
      <thead>
      <tr><th></th><th>Risk Area</th><td>COMMENTS/MITIGATION</td></tr>
      </thead>
      <tbody>
      <tr><td></td><th>Requiremnets</th><td></td></tr>
      <tr><td></td><th>Funding</th><td></td></tr>
      <tr><td></td><th>Strategy</th><td></td></tr>
      <tr><td></td><th>Schedule</th><td></td></tr>
      </tbody>
      </table>
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
