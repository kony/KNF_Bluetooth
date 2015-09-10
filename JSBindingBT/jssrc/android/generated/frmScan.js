//Form JS File
function frmScan_button158830574419209_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmScan_Segment01f18a13727f042_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    BondDevice.call(this);
};

function frmScan_Button01aa207d3ca1544_onClick_seq0(eventobject) {
    stopscan.call(this);
};

function frmScan_CopyButton0643cb1bfe91944_onClick_seq0(eventobject) {
    frmPairedDev.show();
    getBondedDevices.call(this);
};

function addWidgetsfrmScan() {
    var Label0a9b3c448f45c46 = new kony.ui.Label({
        "id": "Label0a9b3c448f45c46",
        "top": "17dp",
        "left": "145dp",
        "width": "60%",
        "height": "100%",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Devices",
        "skin": "sknLblTitle"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var button158830574418787 = new kony.ui.Button({
        "id": "button158830574418787",
        "top": "0dp",
        "left": "0dp",
        "width": "70px",
        "height": "70px",
        "centerX": "10%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "sknBtnBack"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var button158830574419209 = new kony.ui.Button({
        "id": "button158830574419209",
        "top": "1dp",
        "left": "0dp",
        "width": "20%",
        "height": "100%",
        "centerX": "10.0%",
        "centerY": "50.0%",
        "zIndex": 5,
        "isVisible": true,
        "text": null,
        "skin": "sknTrans",
        "onClick": frmScan_button158830574419209_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var flxTitle = new kony.ui.FlexContainer({
        "id": "flxTitle",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "sknflxTitle",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxTitle.setDefaultUnit(kony.flex.DP)
    flxTitle.add(
    Label0a9b3c448f45c46, button158830574418787, button158830574419209);
    var Segment01f18a13727f042box = new kony.ui.FlexContainer({
        "id": "Segment01f18a13727f042box",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var Segment01f18a13727f042 = new kony.ui.SegmentedUI2({
        "id": "Segment01f18a13727f042",
        "top": "44%",
        "left": "0dp",
        "width": "100%",
        "height": "56%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "Label0ffb0e67318474c": "Label0ffb0e67318474c"
        },
        "Location": "[0,198]",
        "rowTemplate": Segment01f18a13727f042box,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "onRowClick": frmScan_Segment01f18a13727f042_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var Label0ffb0e67318474c = new kony.ui.Label({
        "id": "Label0ffb0e67318474c",
        "top": "0dp",
        "left": "5%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknLblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    Segment01f18a13727f042box.add(
    Label0ffb0e67318474c);
    var Button01aa207d3ca1544 = new kony.ui.Button({
        "id": "Button01aa207d3ca1544",
        "top": "16%",
        "left": "52dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Stop Scan",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmScan_Button01aa207d3ca1544_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var CopyButton0643cb1bfe91944 = new kony.ui.Button({
        "id": "CopyButton0643cb1bfe91944",
        "top": "30%",
        "left": "52dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Show Paired Devices",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmScan_CopyButton0643cb1bfe91944_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    frmScan.add(
    flxTitle, Segment01f18a13727f042, Button01aa207d3ca1544, CopyButton0643cb1bfe91944);
};

function frmScanGlobals() {
    var MenuId = [];
    frmScan = new kony.ui.Form2({
        "id": "frmScan",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmNormal",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmScan
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
    frmScan.setDefaultUnit(kony.flex.DP);
};