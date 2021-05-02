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
import * as $ from "jquery";
import pnp from 'sp-pnp-js';
import * as moment from 'moment'

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
    <input type="text" id="txtTaskOrderTitle" class="form-control" required>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">COR Name:</label>
    <input type="text" id="txtCORName" class="form-control" >
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Tracking Number :</label>
    <input type="text" id="txtTrackingNumber" class="form-control" >
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">CAM Name:</label>
    <input type="text" id="txtCAMName" class="form-control" >
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
    <input type="text" id="txtCustomer" class="form-control" >
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Scope :</label>
    <input type="text" id="txtScope" class="form-control" >
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Stakeholders :</label>
    <input type="text" id="txtStakeholders" class="form-control" >
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Office :</label>
    <input type="text" id="txtOffice" class="form-control" >
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Predecessor :</label>
    <input type="text" id="txtPredecessor" class="form-control" >
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Lifecycle Value :</label>
    <input type="text" id="txtLifecycleValue" class="form-control" >
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Source Selection :</label>
    <input type="text" id="txtSourceSelection" class="form-control" >
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Task Order type :</label>
    <input type="text" id="txtTaskOrdertype" class="form-control" >
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
    <div>Updated Target</div>
    <div>Actual Date</div> 
    </div>
    <div class="col-6 d-flex align-items-center justify-content-between date-label">
    <div>Target Date</div>
    <div>Updated Target</div>
    <div>Actual Date</div> 
    </div>
    </div> 
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Package Submitted :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtPackageSubmittedTargetDate"/>
    <input type="date" id="dtPackageSubmittedUpdatedTarget"/>
    <input type="date" id="dtPackageSubmittedActualDate"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Proposal recvd :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtProposalrecvdTargetDate"/>
    <input type="date" id="dtProposalrecvdUpdatedTarget"/>
    <input type="date" id="dtProposalrecvdActualDate"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Package Reviewed :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtPackageReviewedTargetDate"/>
    <input type="date" id="dtPackageReviewedUpdatedTarget"/>
    <input type="date" id="dtPackageReviewedActualDate"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Convenes :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtConvenesTargetDate"/>
    <input type="date" id="dtConvenesUpdatedTarget"/>
    <input type="date" id="dtConvenesActualDate"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Draft Posted :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtDraftPostedTargetDate"/>
    <input type="date" id="dtDraftPostedUpdatedTarget"/>
    <input type="date" id="dtDraftPostedActualDate"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Initial Submit :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtInitialSubmitTargetDate"/>
    <input type="date" id="dtInitialSubmitUpdatedTarget"/>
    <input type="date" id="dtInitialSubmitActualDate"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Industry Day :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtIndustryDayTargetDate"/>
    <input type="date" id="dtIndustryDayUpdatedTarget"/>
    <input type="date" id="dtIndustryDayActualDate"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Final Submit :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtFinalSubmitTargetDate"/>
    <input type="date" id="dtFinalSubmitUpdatedTarget"/>
    <input type="date" id="dtFinalSubmitActualDate"/> 
    </div>
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">RFP Posted :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtRFPPostedTargetDate"/>
    <input type="date" id="dtRFPPostedUpdatedTarget"/>
    <input type="date" id="dtRFPPostedActualDate"/> 
    </div>
    </div>
    <div class ="col-6 d-flex align-items-center">
    <label for="" class="form-label">Award release :</label>
    <div class="d-flex justify-content-between w-100 date-section">
    <input type="date" id="dtAwardReleaseTargetDate"/>
    <input type="date" id="dtAwardReleaseUpdatedTarget"/>
    <input type="date" id="dtAwardReleaseActualDate"/> 
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
    <input type="text" id="txtStatus" class="form-control" >
    </div>
    </div>
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Issues :</label>
    <textarea id="txtIssues" class="form-control" placeholder="" ></textarea>
    </div>
    </div> 
    <div class="row my-3">
    <div class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Actions :</label>
    <textarea id="txtActions" class="form-control" placeholder="" ></textarea> 
    </div> 
    </div>
    </div>
    <div class="acquisition risk col-6">
    <div class="title-section text-light bg-primary">
    <h4>Acquisition Risk</h4>
    </div> 
    <div class="row my-3">
    <div id = "requirement" class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Requirement :</label>
    <div class="d-flex w-100">
    <span ></span><input type="text" id="txtRequirement" class="form-control">
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div id = "funding" class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Funding :</label>
    <div class="d-flex w-100">
    <span></span><input type="text" id="txtFunding" class="form-control" >
    </div> 
    </div>
    </div>
    <div class="row my-3">
    <div id = "strategy" class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Strategy :</label>
    <div class="d-flex w-100">
    <span></span><input type="text" id="txtStrategy" class="form-control" >
    </div> 
    </div> 
    </div>
    <div class="row my-3">
    <div id = "schedule" class ="col-12 d-flex align-items-center">
    <label for="" class="form-label">Schedule :</label>  
    <div class="d-flex w-100">
    <span></span><input type="text" id="txtSchedule" class="form-control" >
    </div> 
    </div>
    </div>
    </div>
    </div> 
    <div class="submit-section">
    <button type="button" id="btnSubmit" class="btn btn-primary btn-submit">Submit</button>
    </div>
    </div>
    </div>  
    `;

    const urlParams = new URLSearchParams(window.location.search);
    const Taskid = urlParams.get('Taskid');
    if (Taskid != null) {
      $("#btnSubmit").html("Update");
      getItems(Taskid);

    }
    else {
      $(".color-status div:eq(0)").addClass("active")
      $("#requirement span").addClass("risk-color-green")
      $("#funding span").addClass("risk-color-green")
      $("#strategy span").addClass("risk-color-green")
      $("#schedule span").addClass("risk-color-green")
    }

    $("#btnSubmit").on("click", function () {
      var OverallStatus = $(".color-status .active").index()
      var RequirementStatus = $("#requirement span").attr("class").split("-")[2]
      var FundingStatus = $("#funding span").attr("class").split("-")[2]
      var StrategyStatus = $("#strategy span").attr("class").split("-")[2]
      var ScheduleStatus = $("#schedule span").attr("class").split("-")[2]

      if (Taskid != null) {
        updateItems(Taskid)
      }
      else {
        addItems()
      }
    });

    $(".color-status div").on("click", function () {
      $(".color-status div").removeClass("active");
      $(this).addClass("active");

    });

    $("#requirement span").on("click", function () {

      if ($(this).attr("class") == "risk-color-green") {
        $(this).removeClass("risk-color-green");
        $(this).addClass("risk-color-yellow");
      }
      else if ($(this).attr("class") == "risk-color-yellow") {
        $(this).removeClass("risk-color-yellow");
        $(this).addClass("risk-color-red");
      }
      else {
        $(this).removeClass("risk-color-red");
        $(this).addClass("risk-color-green");
      }
    });

    $("#funding span").on("click", function () {

      if ($(this).attr("class") == "risk-color-green") {
        $(this).removeClass("risk-color-green");
        $(this).addClass("risk-color-yellow");
      }
      else if ($(this).attr("class") == "risk-color-yellow") {
        $(this).removeClass("risk-color-yellow");
        $(this).addClass("risk-color-red");
      }
      else {
        $(this).removeClass("risk-color-red");
        $(this).addClass("risk-color-green");
      }
    });

    $("#strategy span").on("click", function () {

      if ($(this).attr("class") == "risk-color-green") {
        $(this).removeClass("risk-color-green");
        $(this).addClass("risk-color-yellow");
      }
      else if ($(this).attr("class") == "risk-color-yellow") {
        $(this).removeClass("risk-color-yellow");
        $(this).addClass("risk-color-red");
      }
      else {
        $(this).removeClass("risk-color-red");
        $(this).addClass("risk-color-green");
      }
    });

    $("#schedule span").on("click", function () {

      if ($(this).attr("class") == "risk-color-green") {
        $(this).removeClass("risk-color-green");
        $(this).addClass("risk-color-yellow");
      }
      else if ($(this).attr("class") == "risk-color-yellow") {
        $(this).removeClass("risk-color-yellow");
        $(this).addClass("risk-color-red");
      }
      else {
        $(this).removeClass("risk-color-red");
        $(this).addClass("risk-color-green");
      }
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

function getItems(Taskid) {
  pnp.sp.web.lists.getByTitle('TaskOrder').items.getById(parseInt(Taskid)).get()
    .then(result => {
      var OverallStatus = result.OverallStatus
      var RequirementStatus = result.RequirementStatus
      var FundingStatus = result.FundingStatus
      var StrategyStatus = result.StrategyStatus
      var ScheduleStatus = result.ScheduleStatus
      $("#txtTaskOrderTitle").val(result.Title)
      $("#txtTrackingNumber").val(result.TrackingNumber)
      $("#txtCORName").val(result.CORName)
      $("#txtCAMName").val(result.CAMName)
      OverallStatus == "Green" ? $(".color-status div:eq(0)").addClass("active") :
        (OverallStatus == "Yellow" ? $(".color-status div:eq(1)").addClass("active") :
          $(".color-status div:eq(2)").addClass("active"))
      $("#txtCustomer").val(result.Customer)
      $("#txtStakeholders").val(result.Stakeholders)
      $("#txtPredecessor").val(result.Predecessor)
      $("#txtSourceSelection").val(result.SourceSelection)
      $("#txtScope").val(result.Scope)
      $("#txtOffice").val(result.Office)
      $("#txtLifecycleValue").val(result.LifecycleValue)
      $("#txtTaskOrdertype").val(result.TaskOrdertype)
      $("#dtPackageSubmittedTargetDate").val(moment(result.PackageSubmittedTargetDate).format("YYYY-MM-DD"))
      $("#dtPackageSubmittedUpdatedTarget").val(moment(result.PackageSubmittedUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtPackageSubmittedActualDate").val(moment(result.PackageSubmittedActualDate).format("YYYY-MM-DD"))
      $("#dtPackageReviewedTargetDate").val(moment(result.PackageReviewedTargetDate).format("YYYY-MM-DD"))
      $("#dtPackageReviewedUpdatedTarget").val(moment(result.PackageReviewedUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtPackageReviewedActualDate").val(moment(result.PackageReviewedActualDate).format("YYYY-MM-DD"))
      $("#dtDraftPostedTargetDate").val(moment(result.DraftPostedTargetDate).format("YYYY-MM-DD"))
      $("#dtDraftPostedUpdatedTarget").val(moment(result.DraftPostedUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtDraftPostedActualDate").val(moment(result.DraftPostedActualDate).format("YYYY-MM-DD"))
      $("#dtIndustryDayTargetDate").val(moment(result.IndustryDayTargetDate).format("YYYY-MM-DD"))
      $("#dtIndustryDayUpdatedTarget").val(moment(result.IndustryDayUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtIndustryDayActualDate").val(moment(result.IndustryDayActualDate).format("YYYY-MM-DD"))
      $("#dtRFPPostedTargetDate").val(moment(result.RFPPostedTargetDate).format("YYYY-MM-DD"))
      $("#dtRFPPostedUpdatedTarget").val(moment(result.RFPPostedUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtRFPPostedActualDate").val(moment(result.RFPPostedActualDate).format("YYYY-MM-DD"))
      $("#dtProposalrecvdTargetDate").val(moment(result.ProposalrecvdTargetDate).format("YYYY-MM-DD"))
      $("#dtProposalrecvdUpdatedTarget").val(moment(result.ProposalrecvdUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtProposalrecvdActualDate").val(moment(result.ProposalrecvdActualDate).format("YYYY-MM-DD"))
      $("#dtConvenesTargetDate").val(moment(result.ConvenesTargetDate).format("YYYY-MM-DD"))
      $("#dtConvenesUpdatedTarget").val(moment(result.ConvenesUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtConvenesActualDate").val(moment(result.ConvenesActualDate).format("YYYY-MM-DD"))
      $("#dtInitialSubmitTargetDate").val(moment(result.InitialSubmitTargetDate).format("YYYY-MM-DD"))
      $("#dtInitialSubmitUpdatedTarget").val(moment(result.InitialSubmitUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtInitialSubmitActualDate").val(moment(result.InitialSubmitActualDate).format("YYYY-MM-DD"))
      $("#dtFinalSubmitTargetDate").val(moment(result.FinalSubmitTargetDate).format("YYYY-MM-DD"))
      $("#dtFinalSubmitUpdatedTarget").val(moment(result.FinalSubmitUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtFinalSubmitActualDate").val(moment(result.FinalSubmitActualDate).format("YYYY-MM-DD"))
      $("#dtAwardReleaseTargetDate").val(moment(result.AwardReleaseTargetDate).format("YYYY-MM-DD"))
      $("#dtAwardReleaseUpdatedTarget").val(moment(result.AwardReleaseUpdatedTarget).format("YYYY-MM-DD"))
      $("#dtAwardReleaseActualDate").val(moment(result.AwardReleaseActualDate).format("YYYY-MM-DD"))
      $("#txtStatus").val(result.Status)
      $("#txtIssues").val(result.Issues)
      $("#txtActions").val(result.Actions)
      $("#txtRequirement").val(result.Requirement)
      $("#txtFunding").val(result.Funding)
      $("#txtStrategy").val(result.Strategy)
      $("#txtSchedule").val(result.Schedule)
      RequirementStatus == "Green" ? $("#requirement span").addClass("risk-color-green") :
        (RequirementStatus == "Yellow" ? $("#requirement span").addClass("risk-color-yellow") :
          $("#requirement span").addClass("risk-color-red"))
      FundingStatus == "Green" ? $("#funding span").addClass("risk-color-green") :
        (FundingStatus == "Yellow" ? $("#funding span").addClass("risk-color-yellow") :
          $("#funding span").addClass("risk-color-red"))
      StrategyStatus == "Green" ? $("#strategy span").addClass("risk-color-green") :
        (StrategyStatus == "Yellow" ? $("#strategy span").addClass("risk-color-yellow") :
          $("#strategy span").addClass("risk-color-red"))
      ScheduleStatus == "Green" ? $("#schedule span").addClass("risk-color-green") :
        (ScheduleStatus == "Yellow" ? $("#schedule span").addClass("risk-color-yellow") :
          $("#strategy span").addClass("risk-color-red"))
    })
    .catch(error => { alert(error); console.log(error) });
}

function updateItems(Taskid) {
  var OverallStatus = $(".color-status .active").index()
  var RequirementStatus = $("#requirement span").attr("class").split("-")[2]
  var FundingStatus = $("#funding span").attr("class").split("-")[2]
  var StrategyStatus = $("#strategy span").attr("class").split("-")[2]
  var ScheduleStatus = $("#schedule span").attr("class").split("-")[2]

  pnp.sp.web.lists.getByTitle('TaskOrder').items.getById(parseInt(Taskid)).update({
    Title: $("#txtTaskOrderTitle").val(),
    TrackingNumber: $("#txtTrackingNumber").val(),
    CORName: $("#txtCORName").val(),
    CAMName: $("#txtCAMName").val(),
    OverallStatus: OverallStatus == 0 ? "Green" : (OverallStatus == 1 ? "Yellow" : "Red"),
    Customer: $("#txtCustomer").val(),
    Stakeholders: $("#txtStakeholders").val(),
    Predecessor: $("#txtPredecessor").val(),
    SourceSelection: $("#txtSourceSelection").val(),
    Scope: $("#txtScope").val(),
    Office: $("#txtOffice").val(),
    LifecycleValue: $("#txtLifecycleValue").val(),
    TaskOrdertype: $("#txtTaskOrdertype").val(),
    PackageSubmittedTargetDate: $("#dtPackageSubmittedTargetDate").val() ? $("#dtPackageSubmittedTargetDate").val() : null,
    PackageSubmittedUpdatedTarget: $("#dtPackageSubmittedUpdatedTarget").val() ? $("#dtPackageSubmittedUpdatedTarget").val() : null,
    PackageSubmittedActualDate: $("#dtPackageSubmittedActualDate").val() ? $("#dtPackageSubmittedActualDate").val() : null,
    PackageReviewedTargetDate: $("#dtPackageReviewedTargetDate").val() ? $("#dtPackageReviewedTargetDate").val() : null,
    PackageReviewedUpdatedTarget: $("#dtPackageReviewedUpdatedTarget").val() ? $("#dtPackageReviewedUpdatedTarget").val() : null,
    PackageReviewedActualDate: $("#dtPackageReviewedActualDate").val() ? $("#dtPackageReviewedActualDate").val() : null,
    DraftPostedTargetDate: $("#dtDraftPostedTargetDate").val() ? $("#dtDraftPostedTargetDate").val() : null,
    DraftPostedUpdatedTarget: $("#dtDraftPostedUpdatedTarget").val() ? $("#dtDraftPostedUpdatedTarget").val() : null,
    DraftPostedActualDate: $("#dtDraftPostedActualDate").val() ? $("#dtDraftPostedActualDate").val() : null,
    IndustryDayTargetDate: $("#dtIndustryDayTargetDate").val() ? $("#dtIndustryDayTargetDate").val() : null,
    IndustryDayUpdatedTarget: $("#dtIndustryDayUpdatedTarget").val() ? $("#dtIndustryDayUpdatedTarget").val() : null,
    IndustryDayActualDate: $("#dtIndustryDayActualDate").val() ? $("#dtIndustryDayActualDate").val() : null,
    RFPPostedTargetDate: $("#dtRFPPostedTargetDate").val() ? $("#dtRFPPostedTargetDate").val() : null,
    RFPPostedUpdatedTarget: $("#dtRFPPostedUpdatedTarget").val() ? $("#dtRFPPostedUpdatedTarget").val() : null,
    RFPPostedActualDate: $("#dtRFPPostedActualDate").val() ? $("#dtRFPPostedActualDate").val() : null,
    ProposalrecvdTargetDate: $("#dtProposalrecvdTargetDate").val() ? $("#dtProposalrecvdTargetDate").val() : null,
    ProposalrecvdUpdatedTarget: $("#dtProposalrecvdUpdatedTarget").val() ? $("#dtProposalrecvdUpdatedTarget").val() : null,
    ProposalrecvdActualDate: $("#dtProposalrecvdActualDate").val() ? $("#dtProposalrecvdActualDate").val() : null,
    ConvenesTargetDate: $("#dtConvenesTargetDate").val() ? $("#dtConvenesTargetDate").val() : null,
    ConvenesUpdatedTarget: $("#dtConvenesUpdatedTarget").val() ? $("#dtConvenesUpdatedTarget").val() : null,
    ConvenesActualDate: $("#dtConvenesActualDate").val() ? $("#dtConvenesActualDate").val() : null,
    InitialSubmitTargetDate: $("#dtInitialSubmitTargetDate").val() ? $("#dtInitialSubmitTargetDate").val() : null,
    InitialSubmitUpdatedTarget: $("#dtInitialSubmitUpdatedTarget").val() ? $("#dtInitialSubmitUpdatedTarget").val() : null,
    InitialSubmitActualDate: $("#dtInitialSubmitActualDate").val() ? $("#dtInitialSubmitActualDate").val() : null,
    FinalSubmitTargetDate: $("#dtFinalSubmitTargetDate").val() ? $("#dtFinalSubmitTargetDate").val() : null,
    FinalSubmitUpdatedTarget: $("#dtFinalSubmitUpdatedTarget").val() ? $("#dtFinalSubmitUpdatedTarget").val() : null,
    FinalSubmitActualDate: $("#dtFinalSubmitActualDate").val() ? $("#dtFinalSubmitActualDate").val() : null,
    AwardReleaseTargetDate: $("#dtAwardReleaseTargetDate").val() ? $("#dtAwardReleaseTargetDate").val() : null,
    AwardReleaseUpdatedTarget: $("#dtAwardReleaseUpdatedTarget").val() ? $("#dtAwardReleaseUpdatedTarget").val() : null,
    AwardReleaseActualDate: $("#dtAwardReleaseActualDate").val() ? $("#dtAwardReleaseActualDate").val() : null,
    Status: $("#txtStatus").val(),
    Issues: $("#txtIssues").val(),
    Actions: $("#txtActions").val(),
    Requirement: $("#txtRequirement").val(),
    Funding: $("#txtFunding").val(),
    Strategy: $("#txtStrategy").val(),
    Schedule: $("#txtSchedule").val(),
    RequirementStatus: RequirementStatus == "green" ? "Green" : (RequirementStatus == "yellow" ? "Yellow" : "Red"),
    FundingStatus: FundingStatus == "green" ? "Green" : (FundingStatus == "yellow" ? "Yellow" : "Red"),
    StrategyStatus: StrategyStatus == "green" ? "Green" : (StrategyStatus == "yellow" ? "Yellow" : "Red"),
    ScheduleStatus: ScheduleStatus == "green" ? "Green" : (ScheduleStatus == "yellow" ? "Yellow" : "Red")
  }).then(result => { alert("Task Order Updated Successfully") })
    .catch(error => { alert(error); console.log(error) });

}

function addItems() {
  var OverallStatus = $(".color-status .active").index()
  var RequirementStatus = $("#requirement span").attr("class").split("-")[2]
  var FundingStatus = $("#funding span").attr("class").split("-")[2]
  var StrategyStatus = $("#strategy span").attr("class").split("-")[2]
  var ScheduleStatus = $("#schedule span").attr("class").split("-")[2]

  pnp.sp.web.lists.getByTitle('TaskOrder').items.add({
    Title: $("#txtTaskOrderTitle").val(),
    TrackingNumber: $("#txtTrackingNumber").val(),
    CORName: $("#txtCORName").val(),
    CAMName: $("#txtCAMName").val(),
    OverallStatus: OverallStatus == 0 ? "Green" : (OverallStatus == 1 ? "Yellow" : "Red"),
    Customer: $("#txtCustomer").val(),
    Stakeholders: $("#txtStakeholders").val(),
    Predecessor: $("#txtPredecessor").val(),
    SourceSelection: $("#txtSourceSelection").val(),
    Scope: $("#txtScope").val(),
    Office: $("#txtOffice").val(),
    LifecycleValue: $("#txtLifecycleValue").val(),
    TaskOrdertype: $("#txtTaskOrdertype").val(),
    PackageSubmittedTargetDate: $("#dtPackageSubmittedTargetDate").val() ? $("#dtPackageSubmittedTargetDate").val() : null,
    PackageSubmittedUpdatedTarget: $("#dtPackageSubmittedUpdatedTarget").val() ? $("#dtPackageSubmittedUpdatedTarget").val() : null,
    PackageSubmittedActualDate: $("#dtPackageSubmittedActualDate").val() ? $("#dtPackageSubmittedActualDate").val() : null,
    PackageReviewedTargetDate: $("#dtPackageReviewedTargetDate").val() ? $("#dtPackageReviewedTargetDate").val() : null,
    PackageReviewedUpdatedTarget: $("#dtPackageReviewedUpdatedTarget").val() ? $("#dtPackageReviewedUpdatedTarget").val() : null,
    PackageReviewedActualDate: $("#dtPackageReviewedActualDate").val() ? $("#dtPackageReviewedActualDate").val() : null,
    DraftPostedTargetDate: $("#dtDraftPostedTargetDate").val() ? $("#dtDraftPostedTargetDate").val() : null,
    DraftPostedUpdatedTarget: $("#dtDraftPostedUpdatedTarget").val() ? $("#dtDraftPostedUpdatedTarget").val() : null,
    DraftPostedActualDate: $("#dtDraftPostedActualDate").val() ? $("#dtDraftPostedActualDate").val() : null,
    IndustryDayTargetDate: $("#dtIndustryDayTargetDate").val() ? $("#dtIndustryDayTargetDate").val() : null,
    IndustryDayUpdatedTarget: $("#dtIndustryDayUpdatedTarget").val() ? $("#dtIndustryDayUpdatedTarget").val() : null,
    IndustryDayActualDate: $("#dtIndustryDayActualDate").val() ? $("#dtIndustryDayActualDate").val() : null,
    RFPPostedTargetDate: $("#dtRFPPostedTargetDate").val() ? $("#dtRFPPostedTargetDate").val() : null,
    RFPPostedUpdatedTarget: $("#dtRFPPostedUpdatedTarget").val() ? $("#dtRFPPostedUpdatedTarget").val() : null,
    RFPPostedActualDate: $("#dtRFPPostedActualDate").val() ? $("#dtRFPPostedActualDate").val() : null,
    ProposalrecvdTargetDate: $("#dtProposalrecvdTargetDate").val() ? $("#dtProposalrecvdTargetDate").val() : null,
    ProposalrecvdUpdatedTarget: $("#dtProposalrecvdUpdatedTarget").val() ? $("#dtProposalrecvdUpdatedTarget").val() : null,
    ProposalrecvdActualDate: $("#dtProposalrecvdActualDate").val() ? $("#dtProposalrecvdActualDate").val() : null,
    ConvenesTargetDate: $("#dtConvenesTargetDate").val() ? $("#dtConvenesTargetDate").val() : null,
    ConvenesUpdatedTarget: $("#dtConvenesUpdatedTarget").val() ? $("#dtConvenesUpdatedTarget").val() : null,
    ConvenesActualDate: $("#dtConvenesActualDate").val() ? $("#dtConvenesActualDate").val() : null,
    InitialSubmitTargetDate: $("#dtInitialSubmitTargetDate").val() ? $("#dtInitialSubmitTargetDate").val() : null,
    InitialSubmitUpdatedTarget: $("#dtInitialSubmitUpdatedTarget").val() ? $("#dtInitialSubmitUpdatedTarget").val() : null,
    InitialSubmitActualDate: $("#dtInitialSubmitActualDate").val() ? $("#dtInitialSubmitActualDate").val() : null,
    FinalSubmitTargetDate: $("#dtFinalSubmitTargetDate").val() ? $("#dtFinalSubmitTargetDate").val() : null,
    FinalSubmitUpdatedTarget: $("#dtFinalSubmitUpdatedTarget").val() ? $("#dtFinalSubmitUpdatedTarget").val() : null,
    FinalSubmitActualDate: $("#dtFinalSubmitActualDate").val() ? $("#dtFinalSubmitActualDate").val() : null,
    AwardReleaseTargetDate: $("#dtAwardReleaseTargetDate").val() ? $("#dtAwardReleaseTargetDate").val() : null,
    AwardReleaseUpdatedTarget: $("#dtAwardReleaseUpdatedTarget").val() ? $("#dtAwardReleaseUpdatedTarget").val() : null,
    AwardReleaseActualDate: $("#dtAwardReleaseActualDate").val() ? $("#dtAwardReleaseActualDate").val() : null,
    Status: $("#txtStatus").val(),
    Issues: $("#txtIssues").val(),
    Actions: $("#txtActions").val(),
    Requirement: $("#txtRequirement").val(),
    Funding: $("#txtFunding").val(),
    Strategy: $("#txtStrategy").val(),
    Schedule: $("#txtSchedule").val(),
    RequirementStatus: RequirementStatus == "green" ? "Green" : (RequirementStatus == "yellow" ? "Yellow" : "Red"),
    FundingStatus: FundingStatus == "green" ? "Green" : (FundingStatus == "yellow" ? "Yellow" : "Red"),
    StrategyStatus: StrategyStatus == "green" ? "Green" : (StrategyStatus == "yellow" ? "Yellow" : "Red"),
    ScheduleStatus: ScheduleStatus == "green" ? "Green" : (ScheduleStatus == "yellow" ? "Yellow" : "Red")
  }).then(result => { alert("Task Order Submitted Successfully") })
    .catch(error => { alert(error); console.log(error) });
}