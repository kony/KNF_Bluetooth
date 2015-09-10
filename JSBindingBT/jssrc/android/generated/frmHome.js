//Form JS File
function frmHome_frmHome_postshow_seq0(eventobject) {
    getBlutoothSupport.call(this);
};

function frmHome_Button0b8a176491cc14c_onClick_seq0(eventobject) {
    getbluetoothstatus.call(this);
};

function frmHome_CopyButton0163d0de0e7cc41_onClick_seq0(eventobject) {
    frmScan.show();
    startscanscan.call(this);
};

function frmHome_CopyButton0f628f569012248_onClick_seq0(eventobject) {
    sendfile.call(this);
};

function addWidgetsfrmHome() {
    var Label0a9b3c448f45c46 = new kony.ui.Label({
        "id": "Label0a9b3c448f45c46",
        "top": "17dp",
        "left": "145dp",
        "width": "100%",
        "height": "100%",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Bluetooth",
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
    Label0a9b3c448f45c46);
    var Button0b8a176491cc14c = new kony.ui.Button({
        "id": "Button0b8a176491cc14c",
        "top": "16%",
        "left": "52dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "BA Status",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmHome_Button0b8a176491cc14c_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var CopyButton0163d0de0e7cc41 = new kony.ui.Button({
        "id": "CopyButton0163d0de0e7cc41",
        "top": "58%",
        "left": "52dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Start Scan",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmHome_CopyButton0163d0de0e7cc41_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var CopyButton0f628f569012248 = new kony.ui.Button({
        "id": "CopyButton0f628f569012248",
        "top": "72%",
        "left": "52dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Send File",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmHome_CopyButton0f628f569012248_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var lblSupport = new kony.ui.Label({
        "id": "lblSupport",
        "top": "30%",
        "left": "48dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var lblOnOff = new kony.ui.Label({
        "id": "lblOnOff",
        "top": "44%",
        "left": "53dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    frmHome.add(
    flxTitle, Button0b8a176491cc14c, CopyButton0163d0de0e7cc41, CopyButton0f628f569012248, lblSupport, lblOnOff);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmNormal",
        "postShow": frmHome_frmHome_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
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
    frmHome.setDefaultUnit(kony.flex.DP);
};