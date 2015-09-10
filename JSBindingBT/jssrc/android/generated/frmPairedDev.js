//Form JS File
function frmPairedDev_button158830574417765_onClick_seq0(eventobject) {
    frmScan.show();
};

function addWidgetsfrmPairedDev() {
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
        "text": "Paired Devices",
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
    var button158830574418991 = new kony.ui.Button({
        "id": "button158830574418991",
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
    var button158830574417765 = new kony.ui.Button({
        "id": "button158830574417765",
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
        "onClick": frmPairedDev_button158830574417765_onClick_seq0
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
    Label0a9b3c448f45c46, button158830574418991, button158830574417765);
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
        "top": "10%",
        "left": "0dp",
        "width": "100%",
        "height": "90%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "Label0ffb0e67318474c": "Label0ffb0e67318474c"
        },
        "Location": "[0,45]",
        "rowTemplate": Segment01f18a13727f042box,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
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
    frmPairedDev.add(
    flxTitle, Segment01f18a13727f042);
};

function frmPairedDevGlobals() {
    var MenuId = [];
    frmPairedDev = new kony.ui.Form2({
        "id": "frmPairedDev",
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
        "addWidgets": addWidgetsfrmPairedDev
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
    frmPairedDev.setDefaultUnit(kony.flex.DP);
};