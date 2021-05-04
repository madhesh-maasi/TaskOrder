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

import * as $ from "jquery";
import { sp } from "@pnp/pnpjs";
import "../../ExternalRef/js/jquery-1.12.4.js";
import "../../ExternalRef/js/jquery-ui.js";

//SPComponentLoader.loadScript("https://code.jquery.com/jquery-1.12.4.js");
//SPComponentLoader.loadScript("https://code.jquery.com/ui/1.12.1/jquery-ui.js");
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css");
SPComponentLoader.loadCss("https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css");

import "../../ExternalRef/css/alertify.min.css";
var alertify: any = require("../../ExternalRef/js/alertify.min.js");

var arrTrackingNumber = [];
var flgautocmplt = true;
var siteURL = "";

export interface ITaskOrderWebPartProps {
  description: string;
}


export default class TaskOrderWebPart extends BaseClientSideWebPart<ITaskOrderWebPartProps> {
  public onInit(): Promise<void> {
    return super.onInit().then((_) => {
      sp.setup({
        spfxContext: this.context,
      });
    });
  }
  public render(): void {
    siteURL = this.context.pageContext.web.absoluteUrl;
    this.domElement.innerHTML = `
    <span style="display:none" class="loader">
<img class="loader-spin"/>
</span>
      <div class="landing-page">
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
      <input type="text" class="search-input" id="tasknum" placeholder="Task Order Number" />
      </div>
      <div class="create-task-btn">
      <button class="btn btn-sm btn-secondary border border-primary addtaskorder">Create New Task Order</button>
      </div>
      </div>
      </div>
      </div> 
      <div class="view-screen" style="display:none"> 
      <div class="view-header d-flex justify-content-between">
      <div><div class="logo bg-primary">Logo</div></div>
      <div class="header-info"> 
      <p>Requirements needed to complete packages regarding the TreCuquising  Association Board.</p> 
      <div class="track-num-sec d-flex justify-content-end">
      <label>Tracking Number :</label><label id="TrackingNumber"></label>
      <div class="Edit">
      </div>
      </div>
      </div>
      </div>
      <div class="user-info-section row justify-content-between my-1">
      <div class="user-name-sec d-flex col-6 justify-content-between">
      <div class="cor-name"><label class="title">COR : </label><label class="value" id="COR"></label></div>
      <div class="cam-name"><label class="title">CAM : </label><label class="value" id="CAM"></label></div>
      </div>
      <div class="status-sec col-6 text-right d-flex justify-content-end"><label class="title">Overall Status : </label><div class="status-color value" id="OverallStatus"></div></div>
      </div>
      <div class="row detail-milestone my-2">
      <div class="detail col-6">
      <div class="view-title-section text-light"> 
      <h4>Task Order Details</h4>
      </div>
      
      <div class="form-task-view">
      <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Task Order Title :</label>
    <div class="d-flex w-100" id="Title">
    </div> 
    </div>
    </div>
      <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Customer :</label>
    <div class="d-flex w-100" id="Customer">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Scope :</label>
    <div class="d-flex w-100" id="Scope">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Stakeholder :</label>
    <div class="d-flex w-100" id="Stakeholder">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Office :</label>
    <div class="d-flex w-100" id="Office">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Predecessor :</label>
    <div class="d-flex w-100" id="Predecessor">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Lifecycle Value :</label>
    <div class="d-flex w-100" id="LifecycleValue">
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Source Selection :</label>
    <div class="d-flex w-100" id="SourceSelection">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Task Order type :</label>
    <div class="d-flex w-100" id="TaskOrdertype">
    </div> 
    </div>
    </div> 
      </div>
      </div>
      <div class="milestone col-6">
      <div class="view-title-section text-light"> 
      <h4>Milestones</h4>
      </div>
      <table id="milestoneTable">
      <thead>
      <thead></thead>
      <th></th>
      <th>Target Date</th>
      <th>Updated Target Date</th>
      <th>Actual Date</th>
      <thead> 
      <tbody id="tbodymilestone">
     
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
      <tbody id="tbodycurrentstatus">

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
      <tbody id="tbodyassessmentrisk">
      
      </tbody>
      </table>
      </div>
      </div>
    <div class="submit-section">
    <button type="button" id="btnClose" class="btn btn-primary btn-submit">Close</button>
    </div>
      </div>  
    `;
    getAllData()

    $(document).on('click', '#btnClose', function () {
      $(".view-screen").hide();
      $("#tasknum").val('');
      $(".landing-page").show();
    });

    $(document).on('click', '.edittaskorder', function () {
      location.href = `${siteURL}/SitePages/AddTaskOrder.aspx?Taskid=${$(this).attr('data-id')}`;
    });
    $(document).on('click', '.addtaskorder', function () {
      location.href = `${siteURL}/SitePages/AddTaskOrder.aspx`;
    });
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

async function getAllData() {
  $(".loader").show();
  await sp.web.lists.getByTitle("TaskOrder").items.select("TrackingNumber").get().then(async (item) => {

    for (var i = 0; i < item.length; i++) {
      //TrackingNumber+=item[i].TrackingNumber;
      if (item[i].TrackingNumber)
        arrTrackingNumber.push(item[i].TrackingNumber);
      (<any>$("#tasknum")).autocomplete({
        source: arrTrackingNumber,
        appendTo: $('#tasknum').parents().eq(0),
        select: function (event, ui) {
          if (ui.item.value)
            $('#tasknum').val(ui.item.value);
          getTrakingfunction();
        }
      })
    }

  });
}

function getTrakingfunction() {
  getTaskOrderList($("#tasknum").val());
}

async function getTaskOrderList(TrackNum) {
  await sp.web.lists.getByTitle("TaskOrder").items.select("*").filter("TrackingNumber eq '" + TrackNum + "'").get().then(async (item) => {
    var htmlfortbodymilestone = "";
    var htmlforcurrentstatus = "";
    var htmlfortbodyassessmentrisk = "";
    var htmlforedit = "";
    var htmlforOverallStatus = "";
    console.log(item);


    $('#TrackingNumber').text(TrackNum);
    
    //$('#OverallStatus').text(item[0].OverallStatus);
    $('#COR').text(item[0].CORName);
    $('#CAM').text(item[0].CAMName);
    $('#Customer').text(item[0].Customer);
    $('#Title').text(item[0].Title);
    $('#Scope').text(item[0].Scope);
    $('#Stakeholder').text(item[0].Stakeholders);
    $('#Office').text(item[0].Office);
    $('#Predecessor').text(item[0].Predecessor);
    $('#LifecycleValue').text(item[0].LifecycleValue);
    $('#SourceSelection').text(item[0].SourceSelection);
    $('#TaskOrdertype').text(item[0].TaskOrdertype);

    htmlforOverallStatus =`<span style="background-color:${item[0].OverallStatus}"></span>`;
    htmlfortbodymilestone = `<tr><th>Package Submitted</th><td>${new Date(item[0].PackageSubmittedTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].PackageSubmittedUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].PackageSubmittedActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Package Reviewed</th><td>${new Date(item[0].PackageReviewedTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].PackageReviewedUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].PackageReviewedActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Draft Posted</th><td>${new Date(item[0].DraftPostedTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].DraftPostedUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].DraftPostedActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Industry Day</th><td>${new Date(item[0].IndustryDayTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].IndustryDayUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].IndustryDayActualDate).toLocaleDateString()}</td></tr>
   <tr><th>RPF Posted</th><td>${new Date(item[0].RFPPostedTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].RFPPostedUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].RFPPostedActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Proposal Received</th><td>${new Date(item[0].ProposalrecvdTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].ProposalrecvdUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].ProposalrecvdActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Convenes</th><td>${new Date(item[0].ConvenesTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].ConvenesUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].ConvenesActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Initial Submit</th><td>${new Date(item[0].InitialSubmitTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].InitialSubmitUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].InitialSubmitActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Final Submit</th><td>${new Date(item[0].FinalSubmitTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].FinalSubmitUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].FinalSubmitActualDate).toLocaleDateString()}</td></tr>
   <tr><th>Award release</th><td>${new Date(item[0].AwardReleaseTargetDate).toLocaleDateString()}</td><td>${new Date(item[0].AwardReleaseUpdatedTarget).toLocaleDateString()}</td><td>${new Date(item[0].AwardReleaseActualDate).toLocaleDateString()}</td></tr>`;

    htmlforcurrentstatus = `<tr><th>STATUS</th><td>${item[0].Status}</td></tr>
   <tr><th>ISSUES</th><td>${item[0].Issues}</td></tr>
   <tr><th>ACTIONS</th><td>${item[0].Actions}</td></tr>`;

    htmlfortbodyassessmentrisk = `<tr><td width="40px" style="background:${item[0].RequirementStatus}"></td><th>Requiremnets</th><td>${item[0].Requirement}</td></tr>
   <tr><td width="40px" style="background:${item[0].FundingStatus}"></td><th>Funding</th><td>${item[0].Funding}</td></tr>
   <tr><td width="40px" style="background:${item[0].StrategyStatus}"></td><th>Strategy</th><td>${item[0].Strategy}</td></tr>
   <tr><td width="40px" style="background:${item[0].ScheduleStatus}"></td><th>Schedule</th><td>${item[0].Schedule}</td></tr>`;
   
   $("#OverallStatus").html('');
    $("#OverallStatus").html(htmlforOverallStatus);
    $("#tbodymilestone").html('');
    $("#tbodymilestone").html(htmlfortbodymilestone);
    $("#tbodycurrentstatus").html('');
    $("#tbodycurrentstatus").html(htmlforcurrentstatus);
    $("#tbodyassessmentrisk").html('');
    $("#tbodyassessmentrisk").html(htmlfortbodyassessmentrisk);

    htmlforedit = `<a href="#" class="edittaskorder" data-id=${item[0].ID}><span class="icon-edit"></a>`;
    $(".Edit").html(htmlforedit);
    $(".landing-page").hide();
    $(".view-screen").show();

    $(".loader").hide();

  }).catch((error) => {
    ErrorCallBack(error, "TaskOrder");
  });
}
async function ErrorCallBack(error, methodname) {
  try {
    var errordata = {
      Error: error.message,
      MethodName: methodname,
    };
    await sp.web.lists
      .getByTitle("ErrorLog")
      .items.add(errordata)
      .then(function (data) {
        $('.loader').hide();
        AlertMessage("Something went wrong.please contact system admin");
      });
  } catch (e) {
    $('.loader').hide();
    AlertMessage("Something went wrong.please contact system admin");
  }
}
function AlertMessage(strMewssageEN) {
  alertify
    .alert()
    .setting({
      label: "OK",

      message: strMewssageEN,

      onok: function () {
        window.location.href = "#";
      },
    })
    .show()
    .setHeader("<em>Confirmation</em> ")
    .set("closable", false);
}
